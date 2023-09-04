require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const {Plan, Distributionw, Pretendent} = require('./models/models')
const cors = require('cors')
const fs = require('fs');
const https = require('https')
const Route = require('./routes/route')
const errorHandler = require('./middleware/ErrorHandling')
const path = require('path')
const bodyParser = require("body-parser");
//планировщик
const cron = require('node-cron');

//fetch api
const fetch = require('node-fetch');

let tasks = []

// Port that the webserver listens to
const port = process.env.PORT || 5000;
const host_api_bottest = process.env.BOTTEST_API_URL
const token = process.env.TELEGRAM_API_TOKEN_WORK

const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.resolve(__dirname, 'images')))
app.use(express.static(path.resolve(__dirname, 'uploads')))
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api', Route);

// Certificate
const privateKey = fs.readFileSync('privkey.pem', 'utf8'); //fs.readFileSync('/etc/letsencrypt/live/proj.uley.team/privkey.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8'); //fs.readFileSync('/etc/letsencrypt/live/proj.uley.team/cert.pem', 'utf8');
const ca = fs.readFileSync('chain.pem', 'utf8'); //fs.readFileSync('/etc/letsencrypt/live/proj.uley.team/chain.pem', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

const httpsServer = https.createServer(credentials, app);

// Обработка ошибок, последний middleware
app.use(errorHandler)

const getDistributionsPlan = async() => {
    console.log("Обновляю план рассылок...")

    const d = new Date();
    const month = String(d.getMonth()+1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const date_str = `${day}.${month}`;
    
    d.setDate(d.getDate() + 1);
    const month2 = String(d.getMonth()+1).padStart(2, "0");
    const day2 = String(d.getDate()).padStart(2, "0");
    const date_str2 = `${day2}.${month2}`;
    const year = d.getFullYear();

    //удаление таймеров
    console.log("Запускаю очистку задач...")
    console.log("tasks: ", tasks)
    tasks.forEach((tmp)=> {
        clearTimeout(tmp)
        console.log("Задача удалена! ")   
    })

    console.log("Запускаю планировщик задач...")

    //получить запланированные рассылки
    const distributions = await Distributionw.findAll({
        order: [
            ['id', 'ASC'],
        ],
        where: {
            delivered: false
        }
    })

    //console.log("Рассылки:", distributions)

    //рассылки
    distributions.forEach(async (item, index)=> {
        const date1 = item.datestart //дата отправки рассылки
        const dateNow = new Date().getTime() + 10800000 //текущая дата
        console.log("date1: ", new Date(date1))
        console.log("dateNow: ", new Date(dateNow))

        const d = new Date(date1);
        const month = String(d.getMonth()+1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        const year = d.getFullYear();
        const chas = d.getHours();
        const minut = String(d.getMinutes()).padStart(2, "0");
        const date2 = `${day}.${month}.${year}`

        const milliseconds = Math.floor(new Date(date1) - new Date(dateNow));       
        console.log("milliseconds: ", milliseconds)

        if (milliseconds > 0) {          
            const objPlan = {
                users: item.users.split(','),
                text: item.text,
                textButton: item.textButton,
                image: item.image,
                time: milliseconds,
                id: item.id,  
                projId: item.projectId, 
                uuid: item.uuid     
            }

            console.log("!!!!Планирую запуск отправки собщения..." + (index+1))
            const timerId = setTimeout(() => {
                objPlan.users.map(async (user, ind) => {
                    console.log("Пользователю ID: " + user + " сообщение " + item.text + " отправлено! Кнопка " + item.textButton + " отправлена!")

                    //получить план из БД
                    const plan = await Plan.findOne({
                        where: {datestart: date2}
                    })
                    
                    const newArray = JSON.parse(plan.dataValues.times)
                    let time1 = `${chas}:${minut}`

                    //обновить план в БД
                    let planer_str
                    let dateIndex = newArray.findIndex((i) => i.time === time1)
                    const datesCopy = JSON.parse(JSON.stringify(newArray));
                    const dateObject = datesCopy[dateIndex];
                    datesCopy[dateIndex] = { ...dateObject, ['go']: true};
                    planer_str = JSON.stringify(datesCopy)

                    const newObj = {
                        "datestart": date2,
                        "times": planer_str
                    }

                    //обновить план в БД
                    const foundItem = await Plan.findOne({ where: {datestart: newObj.datestart} });
                    if (!foundItem) {
                        // Item not found, create a new one
                        const newPlan = await Plan.create(newObj.datestart, newObj.times)
                        //return res.status(200).json(newPlan);
                    } else {
                       // Found an item, update it
                        const item = await Plan.update({times: newObj.times},{where: {datestart: newObj.datestart}});
                    }
                    

                    //получить id специалиста по его telegramId
                    //const worker = await getWorkerId(user)
                    let worker
                    await fetch(host_api_bottest + '/workers/chat/' + user)
                    .then((response) => response.json())
                    .then((data) => {
                        if (data) {
                            console.log("data: ", data)
                            worker = data
                        } else {
                            console.log("Worker не найден!")
                        }                             
                    });
                    
                    
                    //новый претендент
                    let count = 0
                    let pretendent

                    const projId = item.projectId

                    count = await Pretendent.count({
                        where: { receiverId: user, projectId: projId },
                    });
                    console.log("worker: ", worker)
                    console.log("count: ", count)
                    if (count === 0) {
                        pretendent = await Pretendent.create(projId, worker, user) //{projectId, workerId, receiverId}) 
                    } else {
                        pretendent = await Pretendent.findOne({
                            where: {receiverId: user, projectId: projId },
                        })
                    }
                    
                    //Передаем данные боту
                    const keyboard = JSON.stringify({
                        inline_keyboard: [
                            [
                                {"text": item.textButton, callback_data:'/report'},
                            ],
                        ]
                    });
                
                    const keyboard2 = JSON.stringify({
                        inline_keyboard: [
                            [
                                {"text": 'Принять', callback_data:'/accept '}, //  + pretendent.id
                                {"text": 'Отклонить', callback_data:'/cancel'},
                            ],
                        ]
                    });

                    //отправить в телеграмм
                    let sendToTelegram
                    if (item.text !== '') {
                        const url_send_msg = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${user}&parse_mode=html&text=${item.text.replace(/\n/g, '%0A')}`
                        
                        sendToTelegram = await fetch(url_send_msg);

                        const delivered = true

                        //обновить рассылке статус отправки
                        let exist = await Distributionw.findOne( {where: {id: item.id}} )
            
                        if(!exist){
                            console.log("Рассылка не существует!");
                        }
            
                        const newDistrib = await Distributionw.update(
                            { delivered },
                            { where: {id: item.id} }
                        )
                    }

                    const url_send_photo = `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${user}&reply_markup=${showEditButtonAdd ? keyboard : keyboard2}`

                    let sendPhotoToTelegram
                    if (file) {
                        const form = new FormData();
                        form.append("photo", file);

                        //sendPhotoToTelegram = await $host.post(url_send_photo, form);
                        sendPhotoToTelegram = await fetch(url_send_photo, {
                            method: 'POST',
                            body: form,
                        });
                    } 
                })
            }, milliseconds)

            tasks.push(timerId)
        } 
    })
}

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        
        httpsServer.listen(port, async() => {
            console.log('HTTPS Server Admin-panel running on port ' + port);

            // начало цикла           
            // setInterval(async() => {              
            //     getDistributionsPlan()
            // }, 120000) //каждые 2 минуты);

            //получить id специалиста по его telegramId

                    let worker
                    await fetch(host_api_bottest + '/workers/chat/805436270' )
                    .then((response) => response.json())
                    .then((data) => {
                        if (data) {
                            console.log("data: ", data)
                            worker = data
                        } else {
                            console.log("Worker не найден!")
                        }                             
                    });
                    
                    
                    //новый претендент
                    let count = 0
                    let pretendent

                    const projId = item.projectId

                    count = await Pretendent.count({
                        where: { receiverId: '805436270', projectId: '5ecac1e4-3559-4bfa-9b3c-28e1591ea3da' },
                    });
                    console.log("worker: ", worker)
                    console.log("count: ", count)
                    if (count === 0) {
                        console.log("create...")
                        pretendent = await Pretendent.create('5ecac1e4-3559-4bfa-9b3c-28e1591ea3da', worker, '805436270') //{projectId, workerId, receiverId}) 
                    } else {
                        console.log("find...")
                        pretendent = await Pretendent.findOne({
                            where: {receiverId: '805436270', projectId: '5ecac1e4-3559-4bfa-9b3c-28e1591ea3da' },
                        })
                    }
        }); 

    } catch (error) {
        console.log('Подключение к БД сломалось!', error)
    }
}

start()