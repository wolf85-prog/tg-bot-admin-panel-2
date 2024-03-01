const { Distribution, Distributionw }= require('../models/models')
const {Message, Conversation} = require('../models/workers')
const ApiError = require('../error/ApiError')

const { Op } = require('sequelize')

//fetch api
const fetch = require('node-fetch');
const axios = require("axios");

const webAppAddStavka = process.env.WEBAPP_STAVKA
const token = process.env.TELEGRAM_API_TOKEN_WORK
const chatAdminId = process.env.REACT_APP_CHAT_ADMIN_ID
const host = process.env.HOST

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//socket.io
const {io} = require("socket.io-client")
const socketUrl = process.env.SOCKET_APP_URL

class DistributionController {

    //add Distribution
    async newDistribution(req, res) {
        const {name, text, image, button, receivers, datestart, delivered} = req.body
        try {
            await Distribution.create({name, text, image, button, receivers, datestart, delivered})
            return res.status(200).json("Distribution has been sent successfully");
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async getDistributions(req, res) {
        try {
            const distributions = await Distribution.findAll({
                order: [
                    ['id', 'DESC'],
                ],
            })
            return res.status(200).json(distributions);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async getDistributionsId(req, res) {
        const {id} = req.params
        try {
            const distib = await Distribution.findAll({where: {chatId: id}})
            return res.status(200).json(distib);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async getDistribution(req, res) {
        const {id} = req.params
        try {
            const distib = await Distribution.findOne({where: {id: id}})
            return res.status(200).json(distib);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    //delete message
    async delDistribution(req, res) {
        const id = req.params.id
        try {
            await Distribution.destroy({
                where: { id: String(id) },
            })
            return res.status(200).json("Distribution has been delete successfully");
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

//=========== Workhub =====================================================================

    //add Distribution
    async newDistributionW(req, res) {
        const {text, image, project, receivers, datestart, delivered, projectId, count, date, users, button, del, uuid, editButton} = req.body
        try {
            const distrib = await Distributionw.create({
                text, 
                image, 
                project, 
                receivers, 
                datestart, 
                delivered, 
                projectId, 
                count, 
                date, 
                users, 
                button,
                del,
                uuid, 
                editButton
            })
            return res.status(200).json(distrib);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async getDistributionsW(req, res) {
        try {
            const distributions = await Distributionw.findAll({
                order: [
                    ['id', 'DESC'],
                ],
                where: {
                    delivered: true
                }
            })
            return res.status(200).json(distributions);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async getDistributionsWPlan(req, res) {
        try {
            const distributions = await Distributionw.findAll({
                order: [
                    ['id', 'ASC'],
                ],
                where: {
                    delivered: false,
                }
            })
            return res.status(200).json(distributions);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async getDistributionsWId(req, res) {
        const {id} = req.params
        try {
            const distib = await Distributionw.findAll({where: {chatId: id}})
            return res.status(200).json(distib);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async getDistributionW(req, res) {
        const {id} = req.params
        try {
            const distib = await Distributionw.findOne({where: {id: id}})
            return res.status(200).json(distib);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    //delete message
    async delDistributionW(req, res) {
        const id = req.params.id
        try {
            await Distributionw.destroy({
                where: { id: String(id) },
            })
            return res.status(200).json("Distribution has been delete successfully");
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //delete message
    async delDistributionWPlan(req, res) {
        const {id, date} = req.body

        try {
            await Distributionw.destroy({
                where: { 
                    uuid: String(id),
                    date: String(date),
                    delivered: false,
                },
            })
            return res.status(200).json("Distribution has been delete successfully");
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    //обновить рассылку - поменять статус delivered
    async editDistribW(req, res) { 
        const {id} = req.params      
        try {    
            let exist=await Distributionw.findOne( {where: {id: id}} )
            
            if(!exist){
                res.status(500).json({msg: "distrib not exist"});
                return;
            }

            const {delivered} = req.body

            const newDistrib = await Distributionw.update(
                { delivered },
                { where: {id: id} })
            return res.status(200).json(newDistrib);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async editDistribW2(req, res) { 
        const {id} = req.params      
        try {    
            let exist=await Distributionw.findOne( {where: {id: id}} )
            
            if(!exist){
                res.status(500).json({msg: "distrib not exist"});
                return;
            }

            const {success, report} = req.body
            //console.log("success count distrib: ", success)
            //console.log("report: ", report)

            const newDistrib = await Distributionw.update(
                { success,
                  report, 
                },
                { where: {id: id} })
            return res.status(200).json(newDistrib);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //обновить рассылку - поменять статус del
    async editDistribWPlan(req, res) {
        const {id, date, del} = req.body
        try {    
            let exist=await Distributionw.findAll( {
                where: { 
                    uuid: String(id),
                    date: String(date),
                    delivered: false,
                }
            } )
            
            if(!exist){
                res.status(500).json({msg: "distrib not exist"});
                return;
            }

            const newDistrib = await Distributionw.update(
                { del },
                { where: { 
                    uuid: String(id),
                    date: String(date),
                    delivered: false,
                }})
            return res.status(200).json(newDistrib);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    //send message
    async sendDistribW(req, res) {
        const {id} = req.params  
        let arrUsers = []
        let countSuccess = 0

        try {
            let exist=await Distributionw.findOne( {where: {id: id}} )
            
            if(!exist){
                res.status(500).json({msg: "distrib not exist"});
                return;
            }

            const selected = exist.dataValues.users.split(',')
            const valueProject = exist.dataValues.projectId
            const textButton = exist.dataValues.button
            const text = exist.dataValues.text
            const image = exist.dataValues.image
            const editButton = exist.dataValues.editButton

            //console.log("selected: ", selected)

            selected.map(async (user, index) => {      
                setTimeout(async()=> { 
                
                    console.log(index + " Пользователю ID: " + user + " сообщение отправляется!")
                    let  conversation_id  

                    //по-умолчанию пока сообщение не отправлено
                    arrUsers.push({
                        user: user,
                        status: 500,
                    }) 

                    //найти беседу
                    const conversation = await Conversation.findOne({
                        where: {
                            members: {
                                [Op.contains]: [user]
                            }
                        },
                    }) 

                    //если нет беседы, то создать 
                    if (!conversation) {
                        const conv = await Conversation.create(
                        {
                            members: [user, chatAdminId],
                        })
                        console.log("Беседа успешно создана: ", conv) 
                        console.log("conversationId: ", conv.id)
                        
                        conversation_id = conv.id
                    } else {
                        //console.log('Беседа уже создана в БД')  
                        //console.log("conversationId: ", conversation.id)  
                        
                        conversation_id = conversation.id
                    }

                    //Передаем данные боту
                    let keyboard
                    if (editButton) {
                        console.log("textButton: НЕТ")
                        keyboard = JSON.stringify({
                            inline_keyboard: [
                                [
                                    {"text": '', callback_data:'/report'},
                                ],
                            ]
                        });
                    } else {
                        console.log("textButton: ...")
                        keyboard = JSON.stringify({
                            inline_keyboard: [
                                [
                                    {"text": textButton, callback_data:'/report'},
                                ],
                            ]
                        });
                    }


                    let keyboard2

                    // if (onButtonStavka) {
                    //     keyboard2 = JSON.stringify({
                    //     inline_keyboard: [
                    //         [
                    //             {"text": 'Принять', callback_data:'/accept ' + valueProject},
                    //             {"text": 'Отклонить', callback_data:'/cancel ' + valueProject},
                    //         ],
                    //         [
                    //             {"text": "Предложить свою ставку", web_app: {url: webAppAddStavka + '/' + valueProject}},
                    //         ],
                    //     ]
                    //     });
                    // } else {
                        keyboard2 = JSON.stringify({
                        inline_keyboard: [
                            [
                                {"text": 'Принять', callback_data:'/accept ' + valueProject},
                                {"text": 'Отклонить', callback_data:'/cancel ' + valueProject},
                            ],
                        ]
                        });
                    //}
        

                    //отправить в телеграмм
                    let sendTextToTelegram
                    let sendPhotoToTelegram

                    let url_send_photo

                    // const url_send_msg = `https://api.telegram.org/bot${token}/getChat?chat_id=${user}`
                    // sendTextToTelegram = await $host.get(url_send_msg);
                    // const { status } = sendTextToTelegram;
                    // if (status === 200) {
                    //     countSuccess = countSuccess + 1 
                    // }
                    // console.log(countSuccess)

                    
                    
                    if (text !== '') {
                        const url_send_msg = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${user}&parse_mode=html&text=${text.replace(/\n/g, '%0A')}`
                        //const url_send_msg = `https://api.telegram.org/bot${token}/getChat?chat_id=${user}`
                        
                        console.log("Отправка текста...")
                        
                        sendTextToTelegram = await $host.get(url_send_msg);
                        //console.log("sendTextToTelegram: ", sendTextToTelegram)

                        const { status } = sendTextToTelegram;              

                        if (status === 200) {
                            console.log("статус 200 текст")
                            countSuccess = countSuccess + 1 
                            
                            //обновить статус доставки
                            arrUsers[index-1].status = 200  

                            //обновить бд рассылку
                            const newDistrib = await Distributionw.update(
                                { delivered: true,
                                report: JSON.stringify(arrUsers),  
                                success: countSuccess},
                                { where: {id: id} }
                            )
                        }
                        
                    } else {
                        url_send_photo = `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${user}&photo=${image}&reply_markup=${editButton ? keyboard : keyboard2}`
                        // //console.log("url_send_photo2: ", url_send_photo)

                        sendPhotoToTelegram = await $host.get(url_send_photo);
                        //console.log("sendPhotoToTelegram: ", sendPhotoToTelegram)

                        const { status } = sendPhotoToTelegram;

                        if (status === 200 && text === '') {
                            console.log("статус 200 фото")
                            countSuccess = countSuccess + 1  
                                    
                            //обновить статус доставки
                            arrUsers[index-1].status = 200  

                            //обновить бд рассылку
                            const newDistrib = await Distributionw.update(
                                { delivered: true,
                                report: JSON.stringify(arrUsers),  
                                success: countSuccess},
                                { where: {id: id} }
                            )
                        }
                    }
                    
                    
                    //отправить в админку
                    let message = {};
                    if (text !== '') {
                        console.log("no file")
                            message = {
                                senderId: chatAdminId, 
                                receiverId: user,
                                conversationId: conversation_id,
                                type: "text",
                                text: text,
                                isBot: true,
                                messageId: sendTextToTelegram.data.result.message_id,
                                buttons: '',
                            }
                    } else if (image) {
                        console.log("file yes")
                            message = {
                                senderId: chatAdminId, 
                                receiverId: user,
                                conversationId: conversation_id,
                                type: "image",
                                text: image,
                                isBot: true,
                                messageId: sendPhotoToTelegram.data.result.message_id,
                                buttons: textButton,
                            }
                    }
                    //console.log("message send: ", message);

                    //сохранение сообщения в базе данных wmessage
                    await Message.create(message)

                    //сохранить в контексте
                    if(!image) {
                        // Подключаемся к серверу socket
                        let socket = io(socketUrl);
                        socket.emit("addUser", user)
                        
                        //отправить сообщение в админку
                        socket.emit("sendAdminSpec", { 
                            senderId: chatAdminId,
                            receiverId: user,
                            text: text,
                            type: 'text',
                            buttons: textButton,
                            convId: conversation_id,
                            messageId: sendTextToTelegram.data.result.message_id,
                            isBot: true,
                        })
                    } else {
                        // Подключаемся к серверу socket
                        let socket = io(socketUrl);
                        socket.emit("addUser", user)
                        
                        //отправить сообщение в админку
                        socket.emit("sendAdminSpec", { 
                            senderId: chatAdminId,
                            receiverId: user,
                            text: image,
                            type: 'image',
                            buttons: textButton,
                            convId: conversation_id,
                            messageId: sendPhotoToTelegram.data.result.message_id,
                            isBot: true,
                        })
                    }  

                }, 100 * ++index) 

            })

            return res.status(200).json("Distribution has been send successfully");
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = new DistributionController()