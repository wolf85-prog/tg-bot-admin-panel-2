import React, { Suspense, useState, useEffect, useRef } from 'react'
import { CContainer, CSpinner } from '@coreui/react'
import { AppSidebar, AppFooter, AppHeader } from '../components/index'
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
  CFormInput,
  CButton,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCollapse,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPeople, cilX,
} from '@coreui/icons'

import {
  CWidgetStatsA,
} from '@coreui/react'

import avatar2 from 'src/assets/images/avatars/blank-avatar.png'
import arrowDown from 'src/assets/images/arrowDown.svg'

import { useUsersContext } from "./../chat-app-new/context/usersContext";
import { getAllMessages, getMessages } from './../http/chatAPI.js'
import { getAllWMessages, getWorkersCount } from './../http/workerAPI.js'

import WidgetsDropdown from '../views/widgets/WidgetsDropdown'
import WidgetsDropdown2 from '../views/widgets/WidgetsDropdown2'
import WidgetsDropdown3 from '../views/widgets/WidgetsDropdown3'
import WidgetsDropdown4 from '../views/widgets/WidgetsDropdown4'
import WidgetsDropdown5 from '../views/widgets/WidgetsDropdown5'

import InputMask from 'react-input-mask';

import Chart from './../components/Chart'
import ChartBar from './../components/Chart2'
import specData from 'src/data/specData'

const Admin = () => {

  const grafik = useRef(null);

  const { users: clients } = useUsersContext();
  const { managers: zakazchiki } = useUsersContext();
  const { projects: projs } = useUsersContext();
  const { companys: comps } = useUsersContext();
  const { userWorkers: specusers } = useUsersContext();
  const { workersAll, workers, setWorkers } = useUsersContext();

  const [contacts, setContacts]= useState([]);
  const [projects, setProjects]= useState([]);
  const [newClients, setNewClients]= useState([]);
  const [oldClients, setOldClients]= useState([]);
  const [loading, setLoading]= useState(true);
  const [loading2, setLoading2]= useState(true);
  
  const [sortWorkers, setSortWorkers]= useState([]);
  const [newWorkers, setNewWorkers]= useState([]);
  const [activWorkers, setActivWorkers]= useState([]);
  const [delWorkers, setDelWorkers]= useState([]);

  const [sortWorkers2, setSortWorkers2]= useState([]);
  const [activWorkers2, setActivWorkers2]= useState([]);
  const [delWorkers2, setDelWorkers2]= useState([]);

  const [catCount, setCatCount] = useState([])

  const [dayWorkers, setDayWorkers]= useState([]);
  const [weekWorkers, setWeekWorkers]= useState([]);
  const [monthWorkers, setMonthWorkers]= useState([]);
  const [yearWorkers, setYearWorkers]= useState([]);
  const [periodWorkers, setPeriodWorkers]= useState([]);

  const [showRenthub, setShowRenthub]= useState(false);
  const [showWorkhub, setShowWorkhub]= useState(true);
  const [showDeleted, setShowDeleted]= useState(false);

  const [activeKey, setActiveKey] = useState(2)

  const [showWidget, setShowWidget] = useState(false)
  const [showWidget2, setShowWidget2] = useState(true)
  const [showWidget3, setShowWidget3] = useState(false)
  const [showWidget4, setShowWidget4] = useState(false)
  const [showWidget5, setShowWidget5] = useState(false)
  const [showWidget6, setShowWidget6] = useState(false)

  const [showCharts, setShowCharts]= useState(false);
  const [showCharts2, setShowCharts2]= useState(false);
  const [showCharts3, setShowCharts3]= useState(false);
  const [showCharts4, setShowCharts4]= useState(false);
  const [showCharts5, setShowCharts5]= useState(false);

  const [showCountAll, setShowCountAll] = useState(false);
  const [showNick, setShowNick]= useState(false);

  const [tabhub, setTabhub]= useState('');

  const [periodDate1, setPeriodDate1] = useState("")
  const [periodDate2, setPeriodDate2] = useState("")

  const [startWeek, setStartWeek] = useState("")
  const [timerId, setTimerId] = useState()
  const [widthGrafik, setWdthGrafik] = useState(0);
  const [text, setText]= useState("");
  const [showTable, setShowTable] = useState([])

  const chatAdminId = process.env.REACT_APP_CHAT_ADMIN_ID
  const host = process.env.REACT_APP_API_URL
  
  useEffect(() => {
    //set tab
    setTabhub('Workhub')

    //console.log("specusers: ", specusers)

    setTimeout(()=> {
      setShowNick(!showNick)
    }, 10000)
  })

  useEffect(() => {
    //get width
    setWdthGrafik(grafik.current ? grafik.current.offsetWidth - 100 : 0)
  }, [grafik.current]);
//--------------------------------------------------------------------------------------------------

  //поиск
  useEffect(() => {
		const filteredData = workersAll.filter(user=> (user.userfamily+user.username+user.chatId)?.toLowerCase().includes(text.toLowerCase()));
    setSortWorkers(text === '' ? workersAll : filteredData);     
  }, [text]);


  //get filter workers
  useEffect(() => {
    //setSortWorkers(workers)

    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()

    //массив новых пользователей за текущий месяц
    const arr1 = workersAll.filter(item => new Date(item.createDate).getMonth() === currentMonth)
    setNewWorkers(arr1)

    //массив удаленных пользователей
    const arrDel = workersAll.filter(item => item.deleted === true)
    setDelWorkers(arrDel)

  }, [workersAll])
//--------------------------------------------------------------------------------------------------

//get workers active
useEffect(() => {
  const arrClients = []

  const fetchData = async() => {

    let messages = await getAllWMessages()

    workersAll.map((client, index) => {

      const allMessages = messages ? messages.length : [] //всего сообщений
      const currentMonth = new Date().getMonth()
      const messagesUser = messages.find(el => el.senderId === client.chatId  && new Date(el.createdAt).getMonth() === currentMonth);
      //массив активных пользователей за текущий месяц
      if (messagesUser !== undefined) {
        arrClients.push(messagesUser)
      }  
    })
    setActivWorkers(arrClients)
  }
  
  fetchData();
  
}, [workersAll]);
//---------------------------------------------------------------------------------------------------------

  //get Contacts
  useEffect(() => {
    const arrClients = []

    const fetchData = async() => {

      //console.log("workers (admin): ", workers.length)
      setLoading2(false)

      let messages = await getAllMessages()

      const managers = [...zakazchiki];
      //console.log("zakazchiki: ", zakazchiki)

      clients.map((client, index) => {
        
        let userIndex = zakazchiki?.findIndex((manager) => manager.tgID === client.chatId);  
        const userObject = managers[userIndex];

        let userObject2 = comps.find((company) => company.managers.find(man => man.id ===  userObject?.id)) //company.managers.map((manager) => manager.id === userObject?.id));  

        const companyName = userObject2?.title
        const companyCity = userObject2?.city ? userObject2?.city : ''

        const lastDate = client.date ? client.date.split('T') : ''
        const d = new Date(lastDate[0]);
				const year = d.getFullYear();
				const month = String(d.getMonth()+1).padStart(2, "0");
				const day = String(d.getDate()).padStart(2, "0");
				const newDateActivity = `${day}.${month}.${year}`

        const newClientName = client.name.includes("|") ? client.name.split(" | ")[1] : client.name
         
        const allMessages = messages ? messages.length : [] //всего сообщений
        const fromAdmin = messages ? messages.filter(el => el.senderId === chatAdminId) : [];
        const messagesUsers = messages ? messages.filter(el => el.senderId === client.chatId) : [];

        const arr = clients.filter(el => el.message === '');
        setNewClients(arr)

        const arr2 = clients.filter(el => el.message !== '');
        setOldClients(arr2)
        
        const newObj = {
          avatar: client.avatar,
          user: {
            name: newClientName,
            new: true,
            registered: '01.01.2023',
          },
          TG_ID: client.chatId,
          city: companyCity,
          company: companyName ? companyName : '',
          phone: userObject?.phone,
          usage: {
            value: Math.round(messagesUsers.length * 100 / (allMessages - fromAdmin.length)), 
            period: '01.04.2023 - ' + newDateActivity,
            color: 'success',
          },
          activity: newDateActivity,
        }

        arrClients.push(newObj)
      })

      const filteredClients = [...arrClients].filter((el) => el.TG_ID !== chatAdminId); //без админского пользователя  
      const clientSort = [...filteredClients].sort((a, b) => {       
				return b.usage.value-a.usage.value  //сортировка по убывающей активности  
			}) 
 
      setContacts(clientSort)  
      
      setTimeout(() => {
        setLoading(false)
      }, "6000")
    }
    
    fetchData();
    
  }, [clients, workersAll]);
//---------------------------------------------------------------------------------------------

//get Projects
  useEffect(() => {
    const arrProjects = []

    const fetchData = async () => {
			
      projs.map(async (project) => {
        const newProject = {
					id: project.id,
					name: project.title,
					start: project.time_start,
          created: project.time_created,
          teh: project.teh,
          manager: project.manager,
          company: project.company,
				}
        arrProjects.push(newProject)
      })

      setProjects(arrProjects) 
    }

    fetchData();
    
  },[projs])

//-----------------------------------------------------------------------------------------------

  const openHub = (hub) => {
    if (hub === 'Workhub') { 
      setShowWorkhub(true)
      setShowRenthub(false)
      setShowDeleted(false)
      setActiveKey(2)
      setShowWidget(false)
      setShowWidget2(true)
      setTabhub('Workhub')
    }
    if (hub === 'Renthub') { 
      setShowWorkhub(false)
      setShowRenthub(true)
      setShowDeleted(false)
      setActiveKey(1)
      setShowWidget(true)
      setShowWidget2(false)
      setTabhub('Renthub')
    }
    if (hub === 'Удаленные') { 
      setShowWorkhub(false)
      setShowRenthub(false)
      setShowDeleted(true)
      setActiveKey(3)
      // setShowWidget(true)
      // setShowWidget2(false)
      setTabhub('Удаленные')
    }
  }

  //нажатия на кнопки
  const showBlock = (ind) => {
    setShowCountAll(true)
    switch (ind) {

      //за сутки
      case 1:{
        console.log("Фильтр за сутки: ", ind)
        clearTimeout(timerId);

        //закрыть все плашки
        setShowWidget2(false)
        setShowWidget3(false)
        setShowWidget4(false)
        setShowWidget5(false)
        setShowWidget6(false)

        //открыть стартовые плашки
        setShowWidget6(true)

        let i = 0
        setTimerId(setInterval(() => {
          if ((i) % 4 === 0) {
            setShowWidget3(true) //3
            setShowWidget4(false)
            setShowWidget5(false)
            setShowWidget6(false)
          }
          if ((i+1) % 4 === 0) {
            setShowWidget3(false)
            setShowWidget4(true) //4
            setShowWidget5(false)
            setShowWidget6(false)
          }
          if ((i+2) % 4 === 0) {
            setShowWidget3(false)
            setShowWidget4(false)
            setShowWidget5(true) //5
            setShowWidget6(false)
          }  
          if ((i+3) % 4 === 0) {
            setShowWidget3(false)
            setShowWidget4(false)
            setShowWidget5(false)
            setShowWidget6(true) //6
          }
          i++
        }, 3000));

        setShowCharts(true)
        setShowCharts2(false)
        setShowCharts3(false)
        setShowCharts4(false)
        setShowCharts5(false)

        //установить ширину графика
        setTimeout(() =>setWdthGrafik(grafik.current ? grafik.current.clientWidth - 100 : 0), 2000 )

        //фильтрация таблицы за сутки
        const carrentDate = Date.now()

        //кол-во часов
        const currentChas = new Date().getHours()
        console.log("currentChas: ", currentChas)
        
        //за несколько часов
        const needDate = carrentDate - currentChas*3600000

        let arr = workersAll.filter(item => new Date(item.createDate).getTime() > needDate);

        let categories = []
        let count_cat

        //console.log("arr1: ", arr)

        specData.map((category)=> {
          count_cat = 0;

          arr.map((item)=> {
            if (JSON.parse(item.worklist).find(work => work.cat === category.icon)) { //category.name
              count_cat++
            }
          })

          const obj = {
            cat: category.name,
            count: count_cat
          }
          categories.push(obj)
        })

        //console.log("categories: ", categories)
        setCatCount(categories)

        //всего пользователей
        setSortWorkers(arr)

        //массив удаленных пользователей
        const arrDel = workersAll.filter(item => item.deleted === true && new Date(item.createDate).getTime() > needDate)
        setDelWorkers(arrDel)
        
        let days1 = []
        let countSpec = 0

        //arr.map(item => console.log("arr: ", new Date(item.createDate)));

        for (let i=0; i<=23; i++) {

          const arrSpec = arr.filter(item => i === new Date(item.createDate).getHours() && i <= new Date().getHours());
          countSpec = arrSpec.length
          
          const newObj= {
            name: i<10 ? '0'+ i + ':00' : ''+ i + ':00', 
            value: countSpec,
          }

          days1.push(newObj)
        }       

        setDayWorkers(days1)

        break;
      }

      //за неделю
      case 2:{
        clearTimeout(timerId);
        //закрыть все плашки
        setShowWidget2(false)
        setShowWidget3(false)
        setShowWidget4(false)
        setShowWidget5(false)
        setShowWidget6(false)

         //открыть стартовые плашки
         setShowWidget6(true)

         let i = 0
         setTimerId(setInterval(() => {
            if ((i) % 4 === 0) {
              setShowWidget3(true) //3
              setShowWidget4(false)
              setShowWidget5(false)
              setShowWidget6(false)
            }
            if ((i+1) % 4 === 0) {
              setShowWidget3(false)
              setShowWidget4(true) //4
              setShowWidget5(false)
              setShowWidget6(false)
            }
            if ((i+2) % 4 === 0) {
              setShowWidget3(false)
              setShowWidget4(false)
              setShowWidget5(true) //5
              setShowWidget6(false)
            }  
            if ((i+3) % 4 === 0) {
              setShowWidget3(false)
              setShowWidget4(false)
              setShowWidget5(false)
              setShowWidget6(true) //6
            }
            i++
          }, 3000));

        setShowCharts(false)
        setShowCharts2(true)
        setShowCharts3(false)
        setShowCharts4(false)
        setShowCharts5(false)

        //установить ширину графика
        setTimeout(() =>setWdthGrafik(grafik.current ? grafik.current.clientWidth - 100 : 0), 2000 )

        //фильтрация таблицы за неделю
        const carrentDate = Date.now()
        //console.log("carrentDate: ", carrentDate)

        const dayNumber = [7, 1, 2, 3, 4, 5, 6][new Date().getDay()] -1

        const needDate = carrentDate - 86400000*dayNumber //604800000
        setStartWeek(new Date(needDate).toLocaleDateString())
        //console.log("needDate: ", needDate)
        
        
        let arr = workersAll.filter(item => new Date(item.createDate).getTime() > needDate);
        let categories = []
        let count_cat

        console.log("arr2: ", arr)
        console.log("specData: ", specData)

        specData.map((category)=> {
          count_cat = 0;

          arr.map((item)=> {
            if (JSON.parse(item.worklist).find(work => work.cat === category.icon)) { //category.name
              count_cat++
            }
          })

          const obj = {
            cat: category.name,
            count: count_cat
          }
          categories.push(obj)
        })

        console.log("categories: ", categories)
        setCatCount(categories)

        setSortWorkers(arr)

        //массив удаленных пользователей
        const arrDel = workersAll.filter(item => item.deleted === true && new Date(item.createDate).getTime() > needDate)
        setDelWorkers(arrDel)

        let week2 = []
        let nameDay = ''
        let countSpec = 0
        for (let i=1; i<=7; i++) {
          if (i===1) {
            nameDay = 'Пн'
            //let date = new Date(item.createDate);
            //let dayWeek = [7, 1, 2, 3, 4, 5, 6][date.getDay()];
            const arrSpec = arr.filter(item => i === [7, 1, 2, 3, 4, 5, 6][new Date(item.createDate).getDay()]  && i <= [7, 1, 2, 3, 4, 5, 6][new Date().getDay()]);
            countSpec = arrSpec.length
          }
          if (i===2) {
            nameDay = 'Вт'
            const arrSpec = arr.filter(item => i === [7, 1, 2, 3, 4, 5, 6][new Date(item.createDate).getDay()]  && i <= [7, 1, 2, 3, 4, 5, 6][new Date().getDay()]);
            countSpec = arrSpec.length
          }
          if (i===3) {
            nameDay = 'Ср'
            const arrSpec = arr.filter(item => i === [7, 1, 2, 3, 4, 5, 6][new Date(item.createDate).getDay()]  && i <= [7, 1, 2, 3, 4, 5, 6][new Date().getDay()]);
            countSpec = arrSpec.length
          }
          if (i===4) {
            nameDay = 'Чт'
            const arrSpec = arr.filter(item => i === [7, 1, 2, 3, 4, 5, 6][new Date(item.createDate).getDay()]  && i <= [7, 1, 2, 3, 4, 5, 6][new Date().getDay()]);
            countSpec = arrSpec.length
          }
          if (i===5) {
            nameDay = 'Пт'
            const arrSpec = arr.filter(item => i === [7, 1, 2, 3, 4, 5, 6][new Date(item.createDate).getDay()]  && i <= [7, 1, 2, 3, 4, 5, 6][new Date().getDay()]);
            countSpec = arrSpec.length
          }
          if (i===6) {
            nameDay = 'Сб'
            const arrSpec = arr.filter(item => i === [7, 1, 2, 3, 4, 5, 6][new Date(item.createDate).getDay()]  && i <= [7, 1, 2, 3, 4, 5, 6][new Date().getDay()]);
            countSpec = arrSpec.length
          }
          if (i===7) {
            nameDay = 'Вс'
            const arrSpec = arr.filter(item => i === [7, 1, 2, 3, 4, 5, 6][new Date(item.createDate).getDay()] && i <= [7, 1, 2, 3, 4, 5, 6][new Date().getDay()]);
            countSpec = arrSpec.length
          }

          const newObj= {
                name: nameDay, 
                value: countSpec,
              }
          week2.push(newObj)
        }  
        console.log("week: ", week2)     
        setWeekWorkers(week2)
        break;
      }

      //за месяц
      case 3:{
        clearTimeout(timerId);

        //закрыть все плашки
        setShowWidget2(false)
        setShowWidget3(false)
        setShowWidget4(false)
        setShowWidget5(false)
        setShowWidget6(false)

         //открыть стартовые плашки
         setShowWidget6(true)

         let i = 0
         setTimerId(setInterval(() => {
           if ((i) % 4 === 0) {
             setShowWidget3(true) //3
             setShowWidget4(false)
             setShowWidget5(false)
             setShowWidget6(false)
           }
           if ((i+1) % 4 === 0) {
             setShowWidget3(false)
             setShowWidget4(true) //4
             setShowWidget5(false)
             setShowWidget6(false)
           }
           if ((i+2) % 4 === 0) {
             setShowWidget3(false)
             setShowWidget4(false)
             setShowWidget5(true) //5
             setShowWidget6(false)
           }  
           if ((i+3) % 4 === 0) {
             setShowWidget3(false)
             setShowWidget4(false)
             setShowWidget5(false)
             setShowWidget6(true) //6
           }
           i++
         }, 3000));

        setShowCharts(false)
        setShowCharts2(false)
        setShowCharts3(true)
        setShowCharts4(false)

        //установить ширину графика
        setTimeout(() =>setWdthGrafik(grafik.current ? grafik.current.clientWidth - 100 : 0), 2000 )

        //фильтрация таблицы за месяц
        const carrentDate = Date.now()
        //console.log("carrentDate: ", carrentDate)

        const dayNumber = new Date().getDate() - 1
        
        const needDate = carrentDate - dayNumber*86400000 //2592000000
        //console.log("needDate: ", new Date(needDate))
        
        //кол-во специалистов за период на начало месяца по текущее число
        let arr = workersAll.filter(item => new Date(item.createDate).getTime() > needDate);
        let categories = []
        let count_cat

        console.log("arr3: ", arr)

        specData.map((category)=> {
          count_cat = 0;

          arr.map((item)=> {
            if (JSON.parse(item.worklist).find(work => work.cat === category.icon)) { //category.name
              count_cat++
            }
          })

          const obj = {
            cat: category.name,
            count: count_cat
          }
          categories.push(obj)
        })

        console.log("categories: ", categories)
        setCatCount(categories)

        setSortWorkers(arr)
        //setMonthWorkers(arr)

        //массив удаленных пользователей
        const arrDel = workersAll.filter(item => item.deleted === true && new Date(item.createDate).getTime() > needDate)
        setDelWorkers(arrDel)

        let countSpec = 0
        let month3 = []

        for (let i=1; i<=31; i++) {
          const arrSpec = arr.filter(item => i === new Date(item.createDate).getDate() && new Date().getMonth() === new Date(item.createDate).getMonth());
          countSpec = arrSpec.length
          const newObj= {
            name: i<10 ? '0'+ i : ''+ i, 
            value: countSpec > 0 ? countSpec : '',
          }
          month3.push(newObj)
        }  
        console.log("month3: ", month3)     
        setMonthWorkers(month3)
        break;
      }

      //за год
      case 4:{
        clearTimeout(timerId);

        //закрыть все плашки
        setShowWidget2(false)
        setShowWidget3(false)
        setShowWidget4(false)
        setShowWidget5(false)
        setShowWidget6(false)

         //открыть стартовые плашки
         setShowWidget6(true)

         let i = 0
         setTimerId(setInterval(() => {
           if ((i) % 4 === 0) {
             setShowWidget3(true) //3
             setShowWidget4(false)
             setShowWidget5(false)
             setShowWidget6(false)
           }
           if ((i+1) % 4 === 0) {
             setShowWidget3(false)
             setShowWidget4(true) //4
             setShowWidget5(false)
             setShowWidget6(false)
           }
           if ((i+2) % 4 === 0) {
             setShowWidget3(false)
             setShowWidget4(false)
             setShowWidget5(true) //5
             setShowWidget6(false)
           }  
           if ((i+3) % 4 === 0) {
             setShowWidget3(false)
             setShowWidget4(false)
             setShowWidget5(false)
             setShowWidget6(true) //6
           }
           i++
         }, 3000));

        setShowCharts(false)
        setShowCharts2(false)
        setShowCharts3(false)
        setShowCharts4(true)
        setShowCharts5(false)

        //установить ширину графика
        setTimeout(() =>setWdthGrafik(grafik.current ? grafik.current.clientWidth - 100 : 0), 2000 )

        //фильтрация таблицы за год
        let arr = workersAll.filter(item => item.createDate.split('T')[0].split('-')[0] === '2024');
        let categories = []
        let count_cat

        console.log("arr year: ", arr)

        specData.map((category)=> {
          count_cat = 0;

          arr.map((item)=> {
            if (JSON.parse(item.worklist).find(work => work.cat === category.icon)) { //category.name
              count_cat++
            }
          })

          const obj = {
            cat: category.name,
            count: count_cat
          }
          categories.push(obj)
        })

        console.log("categories: ", categories)
        setCatCount(categories)

        setSortWorkers(arr)

        //массив удаленных пользователей
        const arrDel = workersAll.filter(item => item.deleted === true && item.createDate.split('T')[0].split('-')[0] === '2024')
        setDelWorkers(arrDel)

        arr.map((item)=>console.log("month: ", new Date(item.createDate).getMonth()+1))

        //график
        let year4 = []
        let nameMonth = ''
        let countSpec = 0
        for (let i=1; i<=12; i++) {
          if (i===1) {
            nameMonth = 'Январь'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===2) {
            nameMonth = 'Февраль'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===3) {
            nameMonth = 'Март'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===4) {
            nameMonth = 'Апрель'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===5) {
            nameMonth = 'Май'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===6) {
            nameMonth = 'Июнь'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===7) {
            nameMonth = 'Июль'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===8) {
            nameMonth = 'Август'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===9) {
            nameMonth = 'Сентябрь'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===10) {
            nameMonth = 'Октябрь'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===11) {
            nameMonth = 'Ноябрь'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          if (i===12) {
            nameMonth = 'Декабрь'
            const arrSpec = arr.filter(item => i === new Date(item.createDate).getMonth()+1);
            countSpec = arrSpec.length
          }
          
          const newObj= {
                name: nameMonth, 
                value: countSpec > 0 ? countSpec : '',
              }
              year4.push(newObj)
        }  
        console.log("year4: ", year4)     
        setYearWorkers(year4)
        break;
      }

      //за период
      case 5:{
        console.log("за период", periodDate1, periodDate2)

        clearTimeout(timerId);

        //закрыть все плашки
        setShowWidget2(false)
        setShowWidget3(false)
        setShowWidget4(false)
        setShowWidget5(false)
        setShowWidget6(false)

        //открыть стартовые плашки
        setShowWidget6(true)

         let i = 0
        setTimerId(setInterval(() => {
           if ((i) % 4 === 0) {
             setShowWidget3(true) //3
             setShowWidget4(false)
             setShowWidget5(false)
             setShowWidget6(false)
           }
           if ((i+1) % 4 === 0) {
             setShowWidget3(false)
             setShowWidget4(true) //4
             setShowWidget5(false)
             setShowWidget6(false)
           }
           if ((i+2) % 4 === 0) {
             setShowWidget3(false)
             setShowWidget4(false)
             setShowWidget5(true) //5
             setShowWidget6(false)
           }  
           if ((i+3) % 4 === 0) {
             setShowWidget3(false)
             setShowWidget4(false)
             setShowWidget5(false)
             setShowWidget6(true) //6
           }
           i++
        }, 3000));

        setShowCharts(false)
        setShowCharts2(false)
        setShowCharts3(false)
        setShowCharts4(false)
        setShowCharts5(true)

        //установить ширину графика
        setTimeout(() =>setWdthGrafik(grafik.current ? grafik.current.clientWidth - 100 : 0), 2000 )

        let nextDay = new Date(periodDate1.split('.')[2], periodDate1.split('.')[1]-1, periodDate1.split('.')[0])
        let endDay = new Date(periodDate2.split('.')[2], periodDate2.split('.')[1]-1, periodDate2.split('.')[0])

        //фильтрация таблицы за период
        let arr5 = workersAll.filter(item => new Date(item.createDate) > nextDay && new Date(item.createDate) < endDay);
        setSortWorkers(arr5)

        let categories = []
        let count_cat

        console.log("arr5 period: ", arr5)

        specData.map((category)=> {
          count_cat = 0;

          arr5.map((item)=> {
            if (JSON.parse(item.worklist).find(work => work.cat === category.icon)) { //category.name
              count_cat++
            }
          })

          const obj = {
            cat: category.name,
            count: count_cat
          }
          categories.push(obj)
        })

        console.log("categories: ", categories)
        setCatCount(categories)
        setSortWorkers(arr5)

        //arr5.map((item)=>console.log("period: ", item))

        //график
        let period5 = []
        let countSpec = 0

        while (nextDay.getTime() < endDay.getTime()) { // выводит 0, затем 1, затем 2
          const arrSpec = arr5.filter(item => nextDay.toLocaleDateString() === new Date(item.createDate).toLocaleDateString());
          countSpec = arrSpec.length
          const newObj= {
            name: nextDay.getDate().toString().length < 2 ? '0'+nextDay.getDate() : nextDay.getDate().toString(), 
            value: countSpec > 0 ? countSpec : '',
          }
          period5.push(newObj)
          //nextDay = nextDay + j
          nextDay.setDate(nextDay.getDate() + 1);
        }
        
        console.log("period5: ", period5)     
        setPeriodWorkers(period5)

        break;
      }
    }
  }

  const changeDate1 = (e) => {
    setPeriodDate1(e.target.value)
  }

  const changeDate2 = (e) => {
    setPeriodDate2(e.target.value)
  }


  const hideCharts = () => {
    setShowCharts(false)
    setShowCharts2(false)
    setShowCharts3(false)
    setShowCharts4(false)
    
    clearTimeout(timerId);

    setShowWidget2(true) //всего
    setShowWidget3(false) //категория 1
    setShowWidget4(false) //категория 2
    setShowWidget5(false) //категория 3
    
  }

  const handleClick = (ind) => {
    console.log(ind, showTable[ind])

    setShowTable(prevShownTable => ({
        ...prevShownTable,
        [ind]: !prevShownTable[ind]
      }));
  }

  const clickNext = async() => {

    //1 все специалисты
		let response = await getWorkersCount(100, workers.length);
    console.log("workers size: ", workers.length)

    const arrayWorker = []
		
			response.reverse().map(async (user) => {
				const newWorker = {
				  id: user.id,
				  userfamily: user.userfamily,
				  username: user.username,
				  phone: user.phone,
				  dateborn: user.dateborn,
				  city: user.city, 
				  companys: user.companys,
				  stag: user.stag,
				  worklist:  user.worklist,
				  chatId: user.chatId,
				  createDate: user.createdAt,
				  avatar: user.avatar,
				  from: user.from,
				  promoId: user.promoId,
				  block: user.block,
				  deleted: user.deleted,
				}
		
				arrayWorker.push(newWorker)
			})    

      console.log("Всего сейчас: ", arrayWorker.length)
			
      setWorkers(arrayWorker)	
      console.log("Ещё: ", arrayWorker.length)
  }
  
  return (
    <div className='dark-theme'>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-uley">
        <AppHeader tabs={tabhub}/>
        <div className="body flex-grow-1 px-3">

            <CContainer lg>
              <Suspense fallback={<CSpinner color="primary" />}>

                <>
                {showWidget 
                ?<WidgetsDropdown
                  users={clients.length-1} 
                  projects={projects.length} 
                  companys={comps.length} 
                />
                :""}

                {showWidget2 
                ?<WidgetsDropdown2
                  users={sortWorkers}
                  newUsers={newWorkers} 
                  activeUsers={activWorkers.length} 
                  delUsers={delWorkers.length}
                />
                :""}

                {showWidget3 
                ?<WidgetsDropdown3
                  soundUsers={catCount[0].count}
                  lightUsers={catCount[1].count}
                  videoUsers={catCount[2].count}
                  photoUsers={catCount[3].count}
                />
                :""}

                {showWidget4 
                ?<WidgetsDropdown4                
                  promoUsers={catCount[4].count}
                  cateringUsers={catCount[5].count}
                  stagehandsUsers={catCount[6].count}
                  riggerUsers={catCount[7].count}
                />
                : ""}

                {showWidget5 
                ?<WidgetsDropdown5
                  trucksUsers={catCount[8].count}
                  partyUsers={catCount[9].count}
                  gamesUsers={catCount[10].count}
                  productionUsers={catCount[11].count}
                />
                : ""}

                {showWidget6 
                ?<WidgetsDropdown2
                  users={sortWorkers}
                  newUsers={newWorkers} 
                  activeUsers={activWorkers.length} 
                  delUsers={delWorkers2.length}
                />
                :""}
                

{/* График Сутки */}
 {showCharts ?  <CWidgetStatsA
                  ref={grafik}
                  className="mb-4 box"
                  color="dark"
                  value={<></>}
                  title={new Date().toLocaleDateString()}
                  action={<><CIcon icon={cilX} onClick={hideCharts} className="text-high-emphasis-inverse" style={{cursor: 'pointer'}} /></>}
                  chart={            
                    <ChartBar
                      range={8}
                      data={dayWorkers} 
                      data2={[]}
                      // data2={
                      //   [
                      //     { name: '0:00', value: 1 },
                      //     { name: '01:00', value: 0 },
                      //     { name: '02:00', value: 0 },
                      //     { name: '03:00', value: 0 },
                      //     { name: '04:00', value: 0 },
                      //     { name: '05:00', value: 0 },
                      //     { name: '06:00', value: 0 },
                      //     { name: '07:00', value: 1 },
                      //     { name: '08:00', value: 0 },
                      //     { name: '09:00', value: 0 },
                      //     { name: '10:00', value: 0 },
                      //     { name: '11:00', value: 0 },
                      //     { name: '12:00', value: 0 },
                      //     { name: '13:00', value: 0 },
                      //     { name: '14:00', value: 0 },
                      //     { name: '15:00', value: 0 },
                      //     { name: '16:00', value: 0 },
                      //     { name: '17:00', value: 2 },
                      //     { name: '18:00', value: 1 },
                      //     { name: '19:00', value: 0 },
                      //     { name: '20:00', value: 0 },
                      //     { name: '21:00', value: 0 },
                      //     { name: '22:00', value: 0 },
                      //     { name: '23:00', value: 0 },
                      //   ]
                      // }
                      width={widthGrafik} height={350} 
                    />

                  }
                />
: ""
}

{/* График Неделя */}
{showCharts2 ?  <CWidgetStatsA
                  ref={grafik}
                  className="mb-4 box"
                  color="dark"
                  value={<></>}
                  title={startWeek + ' - ' + new Date(new Date(startWeek.split('.')[2], startWeek.split('.')[1]-1, startWeek.split('.')[0]).setDate(new Date(startWeek.split('.')[2], startWeek.split('.')[1]-1, startWeek.split('.')[0]).getDate() + 6)).toLocaleDateString()}
                  action={<><CIcon icon={cilX} onClick={hideCharts} className="text-high-emphasis-inverse" style={{cursor: 'pointer'}}/></>}
                  chart={
                    <ChartBar 
                      range={40}
                      data={weekWorkers} 
                      data2={[]} //удаленные пользователи
                      // data2={
                      //   [
                      //     { name: 'Пн', value: 0 },
                      //     { name: 'Вт', value: 0 },
                      //     { name: 'Ср', value: 0 },
                      //     { name: 'Чт', value: 0 },
                      //     { name: 'Пт', value: 0 },
                      //     { name: 'Сб', value: 0 },
                      //     { name: 'Вс', value: 0 },
                      //   ]
                      // }
                      width={widthGrafik} height={350} 
                    />
                  }
                />
: ""
}

{/* График Месяц */}
{showCharts3 ?  <CWidgetStatsA
                  ref={grafik}
                  className="mb-4 box"
                  color="dark"
                  value={<></>}
                  title={new Date().toLocaleString('default', { month: 'long' })}
                  action={<><CIcon icon={cilX} onClick={hideCharts} className="text-high-emphasis-inverse" style={{cursor: 'pointer'}}/></>}
                  chart={
                    <Chart 
                      range={20}
                      data={monthWorkers} 
                      // data={
                      //   [
                      //     { name: '01', value: 1 },
                      //     { name: '02', value: 0 },
                      //     { name: '03', value: 0 },
                      //     { name: '04', value: 0 },
                      //     { name: '05', value: 0 },
                      //     { name: '06', value: 0 },
                      //     { name: '07', value: 0 },
                      //     { name: '08', value: 0 },
                      //     { name: '09', value: 0 },
                      //     { name: '10', value: 0 },
                      //     { name: '11', value: 0 },
                      //     { name: '12', value: 1 },
                      //     { name: '13', value: 1 },
                      //     { name: '14', value: 0 },
                      //     { name: '15', value: 0 },
                      //     { name: '16', value: 0 },
                      //     { name: '17', value: 0 },
                      //     { name: '18', value: 0 },
                      //     { name: '19', value: 0 },
                      //     { name: '20', value: 0 },
                      //     { name: '21', value: 0 },
                      //     { name: '22', value: 0 },
                      //     { name: '23', value: 0 },
                      //     { name: '24', value: 1 },
                      //     { name: '25', value: 1 },
                      //     { name: '26', value: 0 },
                      //     { name: '27', value: 0 },
                      //     { name: '28', value: 0 },
                      //     { name: '29', value: 0 },
                      //     { name: '30', value: 0 },
                      //   ]
                      // }
                      data2={[]} //удаленные пользователи
                      width={widthGrafik} height={350} />
                  }
                />
: ""
}

{/* График Год */}
{showCharts4 ?  <CWidgetStatsA
                  ref={grafik}
                  className="mb-4 box"
                  color="dark"
                  value={<></>}
                  title={new Date().getFullYear()}
                  action={<><CIcon icon={cilX} onClick={hideCharts} className="text-high-emphasis-inverse" style={{cursor: 'pointer'}} /></>}
                  chart={
                    <Chart 
                      range={800}
                      data={yearWorkers}
                      data2={[]} 
                      // data2={
                      //   [
                      //     { name: 'Январь', value: 0 },
                      //     { name: 'Февраль', value: 0 },
                      //     { name: 'Март', value: 0 },
                      //     { name: 'Апрель', value: 0 },
                      //     { name: 'Май', value: 1 },
                      //     { name: 'Июнь', value: 0 },
                      //     { name: 'Июль', value: 0 },
                      //     { name: 'Август', value: 2 },
                      //     { name: 'Сентябрь', value: 2 },
                      //     { name: 'Октябрь', value: 0 },
                      //     { name: 'Ноябрь', value: 0 },
                      //     { name: 'Декабрь', value: 0 },
                      //   ]
                      // }
                      width={widthGrafik} height={350} 
                    />             
                  }
                />
: ""
}

{/* График Период */}
{showCharts5 ?  <CWidgetStatsA
                  ref={grafik}
                  className="mb-4 box"
                  color="dark"
                  value={<></>}
                  title={periodDate1 + ' - ' + periodDate2}
                  action={<><CIcon icon={cilX} onClick={hideCharts} className="text-high-emphasis-inverse" style={{cursor: 'pointer'}} /></>}
                  chart={
                    <Chart 
                      range={800}
                      data={periodWorkers} 
                      data2={[]}                  
                      width={widthGrafik} 
                      height={350} 
                    />             
                  }
                />
: ""
}

                <CRow className="mb-12">
                  {/* Вкладки */}
                  <CCol sm={6}>
                    {/* Renthub Workhub */} 
                    <CNav variant="tabs" className='dark-theme'>
                          <CNavItem>
                            <CNavLink 
                              style={{background: activeKey !== 2 ? '#08080869' : '', cursor: 'pointer'}} 
                              onClick={() => openHub('Workhub')} 
                              active={activeKey === 2}>
                                Workhub
                            </CNavLink>
                          </CNavItem>
                          <CNavItem>
                            <CNavLink 
                              style={{background: activeKey !== 1 ? '#08080869' : '', cursor: 'pointer'}} 
                              onClick={() => openHub('Renthub')} 
                              active={activeKey === 1}>
                                Renthub
                            </CNavLink>
                          </CNavItem>
                    </CNav>
                  </CCol>

                  <CCol sm={6}>
                    {/* Удаленные */} 
                    <CNav variant="tabs" className='dark-theme' style={{justifyContent: 'flex-end'}}>
                          <CNavItem>
                            <CNavLink 
                              style={{background: activeKey !== 3 ? '#08080869' : '', cursor: 'pointer'}} 
                              onClick={() => openHub('Удаленные')} 
                              active={activeKey === 3}>
                                Удаленные
                            </CNavLink>
                          </CNavItem>
                    </CNav>
                  </CCol> 
                </CRow>
                
{/*---------------------------------------- Renthub ------------------------------------  */} 
                <CCard className='rounded-bottom' style={{borderRadius: '0px', borderColor: '#131c21', borderTopRightRadius: '0.375rem'}}>
                  <CCardBody id="Renthub" style={{display: showRenthub ? 'block' : 'none'}}>
                    <CRow>
                      <CCol xs>
                        <CCard className="mb-4">
                          <CCardHeader style={{textAlign: 'left'}}>Пользователи бота ({clients.length - 1})</CCardHeader>
                          <CCardBody>
                            <CRow>
                              <CCol xs={12} md={6} xl={6}>
                                <CRow>
                                  <CCol sm={6}>
                                    <div className="border-start border-start-4 border-start-info py-1 px-3">
                                      <div className="text-medium-emphasis small">Новые клиенты</div>
                                      <div className="fs-5 fw-semibold">{newClients.length}</div>
                                    </div>
                                  </CCol>
                                  <CCol sm={6}>
                                    <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                                      <div className="text-medium-emphasis small">Постоянные клиенты</div>
                                      <div className="fs-5 fw-semibold">{oldClients.length-1}</div>
                                    </div>
                                  </CCol>
                                </CRow>
                              </CCol>

                              <CCol xs={12} md={6} xl={6}>
                                <CRow>
                                  <CCol sm={6}>
                                    <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                                      <div className="text-medium-emphasis small">Просмотры</div>
                                      <div className="fs-5 fw-semibold">-</div>
                                    </div>
                                  </CCol>
                                  <CCol sm={6}>
                                    <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                                      <div className="text-medium-emphasis small">Другое</div>
                                      <div className="fs-5 fw-semibold">-</div>
                                    </div>
                                  </CCol>
                                </CRow>

                                <div className="mb-5"></div>

                              </CCol>
                            </CRow>

                          {loading ? 
                                      
                            <CSpinner/> :

                            <CTable align="middle" className="mb-0 border" hover responsive>
                              <CTableHead className='table-dark'>
                                <CTableRow>
                                  <CTableHeaderCell style={{width: '30px'}}>№</CTableHeaderCell>
                                  <CTableHeaderCell className="text-center" style={{width: '100px'}}>
                                    <CIcon icon={cilPeople} />
                                  </CTableHeaderCell>
                                  <CTableHeaderCell style={{width: '160px'}}>Пользователь</CTableHeaderCell>                             
                                  <CTableHeaderCell className="text-center" style={{width: '160px'}}>Организация</CTableHeaderCell>
                                  <CTableHeaderCell className="text-center" style={{width: '160px'}}>Телефон</CTableHeaderCell>
                                  <CTableHeaderCell className="text-center" style={{width: '80px'}}>Город</CTableHeaderCell>
                                  <CTableHeaderCell className="text-center" style={{width: '100px'}}>TG ID</CTableHeaderCell>
                                  <CTableHeaderCell style={{width: '100px'}}>Использование</CTableHeaderCell>
                                  <CTableHeaderCell style={{width: '100px'}}>Активность</CTableHeaderCell>
                                </CTableRow>
                              </CTableHead>
                              <CTableBody>
                                {contacts.map((item, index) => (
                                  <CTableRow v-for="item in tableItems" key={index}>
                                    <CTableDataCell className="text-center">
                                      {index+1}
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <CAvatar size="md" src={item.avatar ? host + item.avatar : avatar2} alt='' />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                      <div>{item.user.name}</div>
                                      <div className="small text-medium-emphasis">
                                      </div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                      {item.company ? <div>{item.company}</div> : ''}
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                      <div>{item.phone}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                      <div>{item.city}</div>
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                      <div>{item.TG_ID}</div>
                                    </CTableDataCell>
                                    <CTableDataCell>
                                      <div className="clearfix">
                                        <div className="float-start">
                                          <strong>{item.usage.value}%</strong>
                                        </div>
                                        <div className="float-end">
                                          <small className="text-medium-emphasis">{item.usage.period}</small>
                                        </div>
                                      </div>
                                      <CProgress thin color={item.usage.color} value={item.usage.value} />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                      <div className="small text-medium-emphasis">Последний вход</div>
                                      <strong>{item.activity}</strong>
                                    </CTableDataCell>
                                  </CTableRow>
                                ))}
                              </CTableBody>
                            </CTable>
                          }
                          </CCardBody>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CCardBody>

{/*----------------------------------------- Workhub ----------------------------------------  */}
     
                  <CCardBody id="Workhub" style={{display: showWorkhub ? 'block' : 'none'}}>
                    <CRow>
                      <CCol xs>
                            <CRow>
                              <CCol md={6} style={{textAlign: 'left'}}>
                                <CButton color="dark" onClick={()=>showBlock(1)} style={{marginRight: '20px', width: '100px'}}>Сутки</CButton>
                                <CButton color="dark" onClick={()=>showBlock(2)} style={{marginRight: '20px', width: '100px'}}>Неделя</CButton>
                                <CButton color="dark" onClick={()=>showBlock(3)} style={{marginRight: '20px', width: '100px'}}>Месяц</CButton>
                                <CButton color="dark" onClick={()=>showBlock(4)} style={{marginRight: '20px', width: '100px'}}>Год</CButton>
                              </CCol>
                              <CCol md={6} style={{textAlign: 'center', display: 'flex'}}>
                                <InputMask 
                                  mask="99.99.9999"
                                  value={periodDate1}
                                  onChange={changeDate1}>
                                  {(inputProps) => <CFormInput 
                                                    {...inputProps} 
                                                    placeholder="01.01.2024" 
                                                    disableUnderline
                                                    aria-label="sm input example"
                                                    style={{marginLeft: '10px'}}    
                                                  />}
                                </InputMask>

                                <InputMask 
                                  mask="99.99.9999"
                                  value={periodDate2}
                                  onChange={changeDate2}>
                                  {(inputProps) => <CFormInput 
                                                    {...inputProps} 
                                                    placeholder="31.12.2024" 
                                                    disableUnderline
                                                    aria-label="sm input example"
                                                    style={{marginLeft: '10px'}} 
                                                  />}
                                </InputMask>                             
                                            
                                <CButton color="dark" onClick={()=>showBlock(5)} style={{marginLeft: '10px'}}>Применить</CButton>
                              </CCol>      
                            </CRow>
                            
                            <br/>
                            <CRow className="mb-3">
                              <CCol sm={3} >
                                <CFormInput placeholder="Поиск специалиста..." onChange={(e)=>setText(e.target.value)} aria-label="workers"/>
                              </CCol>
                              <CCol sm={6}></CCol>

                              <CCol sm={3} style={{textAlign: 'right', position: 'absolute', top: '-538px', right: '0', marginRight: '35px'}}>
                                {/* {showCountAll ? sortWorkers.length : ''} */}
                              </CCol>
                            </CRow>
                            
                            <CRow>
                              <CCol style={{textAlign: 'center'}}>
                              {loading2 ? 
                                      
                                <CSpinner/> :

                                <CTable align="middle" className="mb-0 border" hover responsive style={{fontSize: '14px'}}>
                                  <CTableHead className='table-light'>
                                    <CTableRow>
                                      <CTableHeaderCell className="text-center" style={{width: '90px'}}>Дата</CTableHeaderCell> 
                                      <CTableHeaderCell className="text-center" style={{width: '70px'}}>Время</CTableHeaderCell>  
                                      <CTableHeaderCell className="text-center" style={{minWidth: '240px'}}>ФИО</CTableHeaderCell> 
                                      <CTableHeaderCell className="text-center" style={{width: '130px'}}>Город</CTableHeaderCell> 
                                      <CTableHeaderCell className="text-center" >Специальность</CTableHeaderCell>  
                                      <CTableHeaderCell className="text-center" style={{minWidth: '90px'}}>Дата</CTableHeaderCell>
                                      <CTableHeaderCell className="text-center" style={{minWidth: '160px'}}>Телефон</CTableHeaderCell>                         
                                      <CTableHeaderCell className="text-center" style={{minWidth: '200px'}}>{ showNick ? 'Ник' : 'Телеграм ID' }</CTableHeaderCell>
                                    </CTableRow>
                                  </CTableHead>
                                  <CTableBody>                                  
                                    {workers.map((item, index) => (
                                      <CTableRow v-for="item in tableItems" key={index}>
                                        <CTableDataCell className="text-center">
                                          {String(new Date(item.createDate).getDate()).padStart(2, "0")+ "."+ String(new Date(item.createDate).getMonth()+1).padStart(2, "0") + "." +new Date(item.createDate).getFullYear()}
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                          {new Date(item.createDate).getHours() + ' : '+ String(new Date(item.createDate).getMinutes()).padStart(2, "0")}
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center" style={{color: item.dateborn >= 2005 || item.userfamily === 'Неизвестный' ? 'red' : ''}}>
                                            {item.userfamily ? item.userfamily : ''} {item.username ? item.username : ''} {specusers.find((user) => user.chatId === item.chatId)?.block ? "[U]" : ''}
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                          {item.city ? item.city : ''}
                                        </CTableDataCell>
                                        <CTableDataCell style={{textAlign: 'left'}}>
                                          <div onClick={()=>handleClick(index)} style={{cursor: 'pointer', textAlign: 'center'}}>{!showTable[index] ? 'Посмотреть' : <br/>}</div>
                                          <CCollapse visible={showTable[index]}>
                                            <table>
                                              <tbody>
                                                {item.worklist !== '' ? (JSON.parse(item.worklist)).map((spec, index)=>( 
                                                    <tr key={index}>
                                                      <td>{spec.spec !== '' ? "- " + spec.spec : ''}</td>
                                                    </tr>          
                                                )) : ""}
                                              </tbody> 
                                            </table>
                                          </CCollapse>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center" style={{color: item.dateborn >= 2005 ? 'red' : ''}}>
                                          {item.dateborn ? item.dateborn : ''}
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                          <div>{item.phone ? item.phone : ''}</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                          <div style={{fontSize: showNick ? '12px' : '14px'}}>{showNick ? specusers.find((user) => user.chatId === item.chatId)?.username : item.chatId}</div>
                                        </CTableDataCell> 
                                      </CTableRow>
                                      ))
                                    }
                                    {/* <CTableRow>
                                      <CTableDataCell className="text-center">
                                        <CButton color="dark" onClick={()=>clickNext()} style={{width: '100px'}}>Ещё</CButton>
                                      </CTableDataCell>
                                    </CTableRow> */}
                                </CTableBody>                   
                              </CTable>
                              
                            }
                            
                              </CCol>
                            </CRow>
                            <div style={{display: 'flex', justifyContent: 'center' }}>
                              {/* <CCol>
                                Всего: {sortWorkers.length}
                              </CCol> */}
                              <img src={arrowDown} alt='' onClick={()=>clickNext()} style={{width: '50px', marginTop: '15px'}}></img>
                              {/* <CButton color="dark" onClick={()=>clickNext()} style={{width: '100px', marginTop: '15px'}}>Ещё</CButton> */}
                            </div>
                      </CCol>
                    </CRow>
                  </CCardBody>

{/*----------------------------------------- Удаленные -----------------------------------------  */}
     
                  <CCardBody id="Deleted" style={{display: showDeleted ? 'block' : 'none'}}>
                    <CRow>
                      <CCol xs>
                            <CRow>
                              <CCol md={6} style={{textAlign: 'left'}}>
                                <CButton color="dark" onClick={()=>showBlock(1)} style={{marginRight: '20px', width: '100px'}}>Сутки</CButton>
                                <CButton color="dark" onClick={()=>showBlock(2)} style={{marginRight: '20px', width: '100px'}}>Неделя</CButton>
                                <CButton color="dark" onClick={()=>showBlock(3)} style={{marginRight: '20px', width: '100px'}}>Месяц</CButton>
                                <CButton color="dark" onClick={()=>showBlock(4)} style={{marginRight: '20px', width: '100px'}}>Год</CButton>
                              </CCol>
                              <CCol md={6} style={{textAlign: 'center', display: 'flex'}}>
                                <InputMask 
                                  mask="99.99.9999"
                                  value={periodDate1}
                                  onChange={changeDate1}>
                                  {(inputProps) => <CFormInput 
                                                    {...inputProps} 
                                                    placeholder="01.01.2024" 
                                                    disableUnderline
                                                    aria-label="sm input example"
                                                    style={{marginLeft: '10px'}}    
                                                  />}
                                </InputMask>

                                <InputMask 
                                  mask="99.99.9999"
                                  value={periodDate2}
                                  onChange={changeDate2}>
                                  {(inputProps) => <CFormInput 
                                                    {...inputProps} 
                                                    placeholder="31.12.2024" 
                                                    disableUnderline
                                                    aria-label="sm input example"
                                                    style={{marginLeft: '10px'}} 
                                                  />}
                                </InputMask>                             
                                            
                                <CButton color="dark" onClick={()=>showBlock(5)} style={{marginLeft: '10px'}}>Применить</CButton>
                              </CCol>      
                            </CRow>
                            
                            <br/>
                            <CRow className="mb-3">
                              <CCol sm={3} >
                                <CFormInput placeholder="Поиск специалиста..." onChange={(e)=>setText(e.target.value)} aria-label="workers"/>
                              </CCol>
                              <CCol sm={6}></CCol>

                              <CCol sm={3} style={{textAlign: 'right', position: 'absolute', top: '-538px', right: '0', marginRight: '35px'}}>
                                {showCountAll ? sortWorkers.length : ''}
                              </CCol>
                            </CRow>
                            
                            <CRow>
                              <CCol style={{textAlign: 'center'}}>
                              {loading2 ? 
                                      
                                <CSpinner/> :

                                <CTable align="middle" className="mb-0 border" hover responsive style={{fontSize: '14px'}}>
                                  <CTableHead className='table-light'>
                                    <CTableRow>
                                      <CTableHeaderCell className="text-center" style={{width: '90px'}}>Дата</CTableHeaderCell> 
                                      <CTableHeaderCell className="text-center" style={{width: '70px'}}>Время</CTableHeaderCell>  
                                      <CTableHeaderCell className="text-center" style={{minWidth: '240px'}}>ФИО</CTableHeaderCell> 
                                      <CTableHeaderCell className="text-center" style={{width: '130px'}}>Город</CTableHeaderCell> 
                                      <CTableHeaderCell className="text-center" >Специальность</CTableHeaderCell>  
                                      <CTableHeaderCell className="text-center" style={{minWidth: '90px'}}>Дата</CTableHeaderCell>
                                      <CTableHeaderCell className="text-center" style={{minWidth: '160px'}}>Телефон</CTableHeaderCell>                         
                                      <CTableHeaderCell className="text-center" style={{minWidth: '200px'}}>{ showNick ? 'Ник' : 'Телеграм ID' }</CTableHeaderCell>
                                    </CTableRow>
                                  </CTableHead>
                                  <CTableBody>                                  
                                    {delWorkers.map((item, index) => (
                                      <CTableRow v-for="item in tableItems" key={index}>
                                        <CTableDataCell className="text-center">
                                          {String(new Date(item.createDate).getDate()).padStart(2, "0")+ "."+ String(new Date(item.createDate).getMonth()+1).padStart(2, "0") + "." +new Date(item.createDate).getFullYear()}
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                          {new Date(item.createDate).getHours() + ' : '+ String(new Date(item.createDate).getMinutes()).padStart(2, "0")}
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center" style={{color: item.dateborn >= 2005 || item.userfamily === 'Неизвестный' ? 'red' : ''}}>
                                            {item.userfamily ? item.userfamily : ''} {item.username ? item.username : ''} {specusers.find((user) => user.chatId === item.chatId)?.block ? "[U]" : ''}
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                          {item.city ? item.city : ''}
                                        </CTableDataCell>
                                        <CTableDataCell style={{textAlign: 'left'}}>
                                          <div onClick={()=>handleClick(index)} style={{cursor: 'pointer', textAlign: 'center'}}>{!showTable[index] ? 'Посмотреть' : <br/>}</div>
                                          <CCollapse visible={showTable[index]}>
                                            <table>
                                              <tbody>
                                                {item.worklist !== '' ? (JSON.parse(item.worklist)).map((spec, index)=>( 
                                                    <tr key={index}>
                                                      <td>{spec.spec !== '' ? "- " + spec.spec : ''}</td>
                                                    </tr>          
                                                )) : ""}
                                              </tbody> 
                                            </table>
                                          </CCollapse>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center" style={{color: item.dateborn >= 2005 ? 'red' : ''}}>
                                          {item.dateborn ? item.dateborn : ''}
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                          <div>{item.phone ? item.phone : ''}</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                          <div style={{fontSize: showNick ? '12px' : '14px'}}>{showNick ? specusers.find((user) => user.chatId === item.chatId)?.username : item.chatId}</div>
                                        </CTableDataCell> 
                                      </CTableRow>
                                      ))
                                    }
                                </CTableBody>                   
                              </CTable>
                              
                            }
                            
                              </CCol>
                            </CRow>
                            <CRow>
                              {/* <CCol>
                                Всего: {sortWorkers.length}
                              </CCol> */}
                            </CRow>
                      </CCol>
                    </CRow>
                  </CCardBody>

                </CCard>

                </>

                </Suspense>
            </CContainer>

        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default Admin
