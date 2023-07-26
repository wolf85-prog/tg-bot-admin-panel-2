import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  CContainer, 
  CSpinner, 
  CButton, 
  CTable, 
  CTableRow, 
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormCheck,
  CToast,
  CToastBody,
  CToaster,
  CToastClose
} from '@coreui/react'
import { AppSidebar, AppFooter, AppHeader } from '../components/index'

import { getProjectId, newPlan, getPlan, newDistributionW } from 'src/http/adminAPI';

const DistributionWPlaner = () => {
  const location = useLocation()
  const [distributionsWork, setDistributionsWork]= useState([]);

  const projectId= location.state.project

  const [countCol, setCountCol] = useState(6)
  const [countCol2, setCountCol2] = useState(6)
  const [countCol3, setCountCol3] = useState(6)

  const d = new Date();
  const month = String(d.getMonth()+1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
  const date_str = `${day}.${month}`;
  
  d.setDate(d.getDate() + 1);
  const month2 = String(d.getMonth()+1).padStart(2, "0");
	const day2 = String(d.getDate()).padStart(2, "0");
  const date_str2 = `${day2}.${month2}`;


  const [dates, setDates] = useState([
    {date: date_str, time: '06:00', proj: '', save: false},
    {date: date_str, time: '07:00', proj: '', save: false},
    {date: date_str, time: '08:00', proj: '', save: false},
    {date: date_str, time: '09:00', proj: '', save: false},
    {date: date_str, time: '10:00', proj: '', save: false},
    {date: date_str, time: '11:00', proj: '', save: false},
  ])


  const [dates1, setDates1] = useState([
    {date: date_str, time: '12:00', proj: '', save: false},
    {date: date_str, time: '13:00', proj: '', save: false},
    {date: date_str, time: '14:00', proj: '', save: false},
    {date: date_str, time: '15:00', proj: '', save: false},
    {date: date_str, time: '16:00', proj: '', save: false},
    {date: date_str, time: '17:00', proj: '', save: false},
  ])

  const [dates11, setDates11] = useState([
    {date: date_str, time: '18:00', proj: '', save: false},
    {date: date_str, time: '19:00', proj: '', save: false},
    {date: date_str, time: '20:00', proj: '', save: false},
    {date: date_str, time: '21:00', proj: '', save: false},
    {date: date_str, time: '22:00', proj: '', save: false},
    {date: date_str, time: '23:00', proj: '', save: false},
  ])

//----------------------------------------------------------

  const [projectName, setProjectName] = useState('')
  const [projectView, setProjectView] = useState(false)
  const [value1, setValue1] = useState([false, false, false, false, false, false, false])
  const [value2, setValue2] = useState([false, false, false, false, false, false, false])
  const [value3, setValue3] = useState([false, false, false, false, false, false, false])

  const [showLoader, setShowLoader] = useState(true)

  const [toast, addToast] = useState(0)
  const toaster = useRef()

  let arr = []

  useEffect(() => {
    const fetchData = async () => {
      let project = await getProjectId(projectId);
      console.log('Текущий проект: ', project.properties.Name.title[0]?.plain_text)
      setShowLoader(false)
      setProjectName(project.properties.Name.title[0]?.plain_text)
    }
      fetchData();
  },[])


  useEffect(() => {
    const fetchData = async () => {
      let plan = await getPlan(new Date().toLocaleDateString());
      console.log(plan)

      if (plan !== null) {
        const planTimes = JSON.parse(plan.times)
        console.log("planTimes: ", planTimes)

        const ind1 = planTimes.findIndex(date => date.time === '12:00')
        const ind2 = planTimes.findIndex(date => date.time === '18:00')

        console.log("Индекс 1: ", ind1)
        console.log("Индекс 2: ", ind2)

        const times = planTimes.slice(0, ind1);
        const times2 = planTimes.slice(ind1, ind2);
        const times3 = planTimes.slice(ind2, planTimes.length);


        times.map((time, index)=> {
          if (time.save) {
            value1[index] = true
            setValue1(value1)
          }
        })

        times2.map((time, index)=> {
          if (time.save) {
            value2[index] = true
            setValue2(value2)
          }
        })

        times3.map((time, index)=> {
          if (time.save) {
            value3[index] = true
            setValue3(value3)
          }
        })

        setDates(times)
        setDates1(times2)
        setDates11(times3)

        setCountCol(ind1)
        setCountCol2(ind2 - ind1)
        setCountCol3(planTimes.length - ind2)
      }
      
    }
      fetchData();
  },[])

//поставить галочку Статус
  const changeStatus = (ind, tab) => {
    if (tab === 1) {
      // if (value1[ind]) {
      //   //value1[ind] = false
      //   dates[ind].proj = ''
      //   dates[ind].save = false
      // } else {
      //   //value1[ind] = true
      //   dates[ind].proj = projectName //location.state.project
      //   dates[ind].save = true  
      // }  

      if (dates[ind].save === true) {
        console.log('true')
        value1[ind] = false
        dates[ind].save = false
        dates[ind].proj = ''
      } else {
        console.log('false')
        value1[ind] = true
        dates[ind].proj = projectName //location.state.project
        dates[ind].save = true
      }

      //console.log('true')

      setDates(dates)
      setValue1(value1) 
    }

    if (tab === 2) {
      if (value2[ind]) {
        value2[ind] = false
        dates1[ind].proj = ''
        dates[ind].save = false
      } else {
        value2[ind] = true
        dates1[ind].proj = projectName //location.state.project
        dates1[ind].save = true
      } 

      setDates1(dates1)
      setValue2(value2)
    }

    if (tab === 3) {
      if (value3[ind]) {
        value3[ind] = false
        dates11[ind].proj = ''
        dates11[ind].save = false
      } else {
        value3[ind] = true
        dates11[ind].proj = projectName //location.state.project
        dates11[ind].save = true
      } 

      setDates11(dates11)
      setValue3(value3)
    }
    

    projectView ? setProjectView(false) : setProjectView(true)
  }

  // ---------------------------------------------------------------------

  {/* Показать Добавление времени */}
  const clickShowEditTime = (t, ind, tab) => {

    if (t === '06:00')  {
      if (tab === 1) {
        //обработка нажатия вкл/выкл
        if (dates[ind+1].time === '07:00') {
          setCountCol(countCol+1) //для высоту ячейки с датой
          arr = dates.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '06:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates(arr)

          //изменить чек
          arr.map((item, index)=> {
            value1[index] = item.save
          })
          setValue1(value1)

        } else {
          if (dates[ind+1].proj === ''){
            setCountCol(countCol-1)
            arr = dates.slice(0); 
            arr.splice(ind+1, 1);
            setDates(arr)

            //изменить чек
            arr.map((item, index)=> {
              value1[index] = item.save
            })
            setValue1(value1)           
          }        
        }
      }
    }

    if (t === '07:00')  {
      if (tab === 1) {
        //обработка нажатия вкл/выкл
        if (tab === 1) {
          //обработка нажатия вкл/выкл
          if (dates[ind+1].time === '08:00') {
            setCountCol(countCol+1) //для высоту ячейки с датой
            arr = dates.slice(0); //копируем массив dates
            const newObj = {
              date: date_str,
              time: '07:30',
              proj: '',
              save: false
            }
            arr.splice(ind+1, 0, newObj);
            setDates(arr)
  
            //изменить чек
            arr.map((item, index)=> {
              value1[index] = item.save
            })
            setValue1(value1)
                    
          } else {
            if (dates[ind+1].proj === ''){
              setCountCol(countCol-1)
              arr = dates.slice(0); 
              arr.splice(ind+1, 1);
              setDates(arr)
  
              //изменить чек
              arr.map((item, index)=> {
                value1[index] = item.save
              })
              setValue1(value1)           
            }        
          }
        }
      }
    }


    if (t === '08:00')  {
      if (tab === 1) {
        //обработка нажатия вкл/выкл
        if (tab === 1) {
          //обработка нажатия вкл/выкл
          if (dates[ind+1].time === '09:00') {
            setCountCol(countCol+1) //для высоту ячейки с датой
            arr = dates.slice(0); //копируем массив dates
            const newObj = {
              date: date_str,
              time: '08:30',
              proj: '',
              save: false
            }
            arr.splice(ind+1, 0, newObj);
            setDates(arr)
  
            //изменить чек
            arr.map((item, index)=> {
              value1[index] = item.save
            })
            setValue1(value1)
                    
          } else {
            if (dates[ind+1].proj === ''){
              setCountCol(countCol-1)
              arr = dates.slice(0); 
              arr.splice(ind+1, 1);
              setDates(arr)
  
              //изменить чек
              arr.map((item, index)=> {
                value1[index] = item.save
              })
              setValue1(value1)           
            }        
          }
        }
      }
    }

    if (t === '09:00')  {
      if (tab === 1) {
        //обработка нажатия вкл/выкл
        if (tab === 1) {
          //обработка нажатия вкл/выкл
          if (dates[ind+1].time === '10:00') {
            setCountCol(countCol+1) //для высоту ячейки с датой
            arr = dates.slice(0); //копируем массив dates
            const newObj = {
              date: date_str,
              time: '09:30',
              proj: '',
              save: false
            }
            arr.splice(ind+1, 0, newObj);
            setDates(arr)
  
            //изменить чек
            arr.map((item, index)=> {
              value1[index] = item.save
            })
            setValue1(value1)
                    
          } else {
            if (dates[ind+1].proj === ''){
              setCountCol(countCol-1)
              arr = dates.slice(0); 
              arr.splice(ind+1, 1);
              setDates(arr)
  
              //изменить чек
              arr.map((item, index)=> {
                value1[index] = item.save
              })
              setValue1(value1)           
            }        
          }
        }
      }
    }

    if (t === '10:00')  {
      if (tab === 1) {
        //обработка нажатия вкл/выкл
        if (tab === 1) {
          //обработка нажатия вкл/выкл
          if (dates[ind+1].time === '11:00') {
            setCountCol(countCol+1) //для высоту ячейки с датой
            arr = dates.slice(0); //копируем массив dates
            const newObj = {
              date: date_str,
              time: '10:30',
              proj: '',
              save: false
            }
            arr.splice(ind+1, 0, newObj);
            setDates(arr)
  
            //изменить чек
            arr.map((item, index)=> {
              value1[index] = item.save
            })
            setValue1(value1)
                    
          } else {
            if (dates[ind+1].proj === ''){
              setCountCol(countCol-1)
              arr = dates.slice(0); 
              arr.splice(ind+1, 1);
              setDates(arr)
  
              //изменить чек
              arr.map((item, index)=> {
                value1[index] = item.save
              })
              setValue1(value1)           
            }        
          }
        }
      }
    }

    if (t === '11:00')  {
      if (tab === 1) {
        //обработка нажатия вкл/выкл
          if (dates[ind+1]?.time !== '11:30') {
            setCountCol(countCol+1) //для высоту ячейки с датой
            arr = dates.slice(0); //копируем массив dates
            console.log(arr)
            const newObj = {
              date: date_str,
              time: '11:30',
              proj: '',
              save: false
            }
            arr.splice(ind+1, 0, newObj);
            setDates(arr)
  
            //изменить чек
            arr.map((item, index)=> {
              value1[index] = item.save
            })
            setValue1(value1)          
          } 
          
          if (dates[ind+1]?.time === '11:30') {
            if (dates[ind+1].proj === ''){
              setCountCol(countCol-1)
              arr = dates.slice(0); 
              arr.splice(ind+1, 1);
              setDates(arr)
    
              //изменить чек
              arr.map((item, index)=> {
                value1[index] = item.save
              })
              setValue1(value1)           
            }        
          }
      }
    }

    //12:00 - 17:00

    if (t === '12:00')  {
      if (tab === 2) {
        //обработка нажатия вкл/выкл
        if (dates1[ind+1].time === '13:00') {
          setCountCol2(countCol2+1) //для высоту ячейки с датой
          arr = dates1.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '12:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates1(arr)

          //изменить чек
          arr.map((item, index)=> {
            value2[index] = item.save
          })
          setValue2(value2)

        } else {
          if (dates1[ind+1].proj === ''){
            setCountCol2(countCol2-1)
            arr = dates1.slice(0); 
            arr.splice(ind+1, 1);
            setDates1(arr)

            //изменить чек
            arr.map((item, index)=> {
              value2[index] = item.save
            })
            setValue2(value2)           
          }        
        }
      }
    }

    if (t === '13:00')  {
      if (tab === 2) {
        //обработка нажатия вкл/выкл
        if (dates1[ind+1].time === '14:00') {
          setCountCol2(countCol2+1) //для высоту ячейки с датой
          arr = dates1.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '13:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates1(arr)

          //изменить чек
          arr.map((item, index)=> {
            value2[index] = item.save
          })
          setValue2(value2)

        } else {
          if (dates1[ind+1].proj === ''){
            setCountCol2(countCol2-1)
            arr = dates1.slice(0); 
            arr.splice(ind+1, 1);
            setDates1(arr)

            //изменить чек
            arr.map((item, index)=> {
              value1[index] = item.save
            })
            setValue1(value1)           
          }        
        }
      }
    }

    if (t === '14:00')  {
      if (tab === 2) {
        //обработка нажатия вкл/выкл
        if (dates1[ind+1].time === '15:00') {
          setCountCol2(countCol2+1) //для высоту ячейки с датой
          arr = dates1.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '14:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates1(arr)

          //изменить чек
          arr.map((item, index)=> {
            value2[index] = item.save
          })
          setValue2(value2)

        } else {
          if (dates1[ind+1].proj === ''){
            setCountCol2(countCol2-1)
            arr = dates1.slice(0); 
            arr.splice(ind+1, 1);
            setDates1(arr)

            //изменить чек
            arr.map((item, index)=> {
              value2[index] = item.save
            })
            setValue2(value2)           
          }        
        }
      }
    }

    if (t === '15:00')  {
      if (tab === 2) {
        //обработка нажатия вкл/выкл
        if (dates1[ind+1].time === '16:00') {
          setCountCol2(countCol2+1) //для высоту ячейки с датой
          arr = dates1.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '15:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates1(arr)

          //изменить чек
          arr.map((item, index)=> {
            value2[index] = item.save
          })
          setValue2(value2)

        } else {
          if (dates1[ind+1].proj === ''){
            setCountCol2(countCol2-1)
            arr = dates1.slice(0); 
            arr.splice(ind+1, 1);
            setDates1(arr)

            //изменить чек
            arr.map((item, index)=> {
              value2[index] = item.save
            })
            setValue2(value2)           
          }        
        }
      }
    }

    if (t === '16:00')  {
      if (tab === 2) {
        //обработка нажатия вкл/выкл
        if (dates1[ind+1].time === '17:00') {
          setCountCol2(countCol2+1) //для высоту ячейки с датой
          arr = dates1.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '16:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates1(arr)

          //изменить чек
          arr.map((item, index)=> {
            value2[index] = item.save
          })
          setValue2(value2)

        } else {
          if (dates1[ind+1].proj === ''){
            setCountCol2(countCol2-1)
            arr = dates1.slice(0); 
            arr.splice(ind+1, 1);
            setDates1(arr)

            //изменить чек
            arr.map((item, index)=> {
              value2[index] = item.save
            })
            setValue2(value2)           
          }        
        }
      }
    }

    if (t === '17:00')  {
      if (tab === 2) {
        //обработка нажатия вкл/выкл
        if (dates1[ind+1]?.time !== '17:30') {
          setCountCol2(countCol2+1) //для высоту ячейки с датой
          arr = dates1.slice(0); //копируем массив dates
          console.log(arr)
          const newObj = {
            date: date_str,
            time: '17:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates1(arr)

          //изменить чек
          arr.map((item, index)=> {
            value2[index] = item.save
          })
          setValue2(value2)          
        } 
        
        if (dates1[ind+1]?.time === '17:30') {
          if (dates1[ind+1].proj === ''){
            setCountCol2(countCol2-1)
            arr = dates1.slice(0); 
            arr.splice(ind+1, 1);
            setDates1(arr)
  
            //изменить чек
            arr.map((item, index)=> {
              value2[index] = item.save
            })
            setValue2(value2)           
          }        
        }
      }
    }

//---------------18:00 - 23:00----------------------

    if (t === '18:00')  {
      if (tab === 3) {
        //обработка нажатия вкл/выкл
        if (dates11[ind+1].time === '19:00') {
          setCountCol3(countCol3+1) //для высоту ячейки с датой
          arr = dates11.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '18:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates11(arr)

          //изменить чек
          arr.map((item, index)=> {
            value3[index] = item.save
          })
          setValue3(value3)

        } else {
          if (dates11[ind+1].proj === ''){
            setCountCol3(countCol3-1)
            arr = dates11.slice(0); 
            arr.splice(ind+1, 1);
            setDates11(arr)

            //изменить чек
            arr.map((item, index)=> {
              value3[index] = item.save
            })
            setValue3(value3)           
          }        
        }
      }
    }
    
    if (t === '19:00')  {
      if (tab === 3) {
        //обработка нажатия вкл/выкл
        if (dates11[ind+1].time === '20:00') {
          setCountCol3(countCol3+1) //для высоту ячейки с датой
          arr = dates11.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '19:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates11(arr)

          //изменить чек
          arr.map((item, index)=> {
            value3[index] = item.save
          })
          setValue3(value3)

        } else {
          if (dates11[ind+1].proj === ''){
            setCountCol3(countCol3-1)
            arr = dates11.slice(0); 
            arr.splice(ind+1, 1);
            setDates11(arr)

            //изменить чек
            arr.map((item, index)=> {
              value3[index] = item.save
            })
            setValue3(value3)           
          }        
        }
      }
    }
    
    if (t === '20:00')  {
      if (tab === 3) {
        //обработка нажатия вкл/выкл
        if (dates11[ind+1].time === '21:00') {
          setCountCol3(countCol3+1) //для высоту ячейки с датой
          arr = dates11.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '20:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates11(arr)

          //изменить чек
          arr.map((item, index)=> {
            value3[index] = item.save
          })
          setValue3(value3)

        } else {
          if (dates11[ind+1].proj === ''){
            setCountCol3(countCol3-1)
            arr = dates11.slice(0); 
            arr.splice(ind+1, 1);
            setDates11(arr)

            //изменить чек
            arr.map((item, index)=> {
              value3[index] = item.save
            })
            setValue3(value3)           
          }        
        }
      }
    }
    
    if (t === '21:00')  {
      if (tab === 3) {
        //обработка нажатия вкл/выкл
        if (dates11[ind+1].time === '22:00') {
          setCountCol3(countCol3+1) //для высоту ячейки с датой
          arr = dates11.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '21:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates11(arr)

          //изменить чек
          arr.map((item, index)=> {
            value3[index] = item.save
          })
          setValue3(value3)

        } else {
          if (dates11[ind+1].proj === ''){
            setCountCol3(countCol3-1)
            arr = dates11.slice(0); 
            arr.splice(ind+1, 1);
            setDates11(arr)

            //изменить чек
            arr.map((item, index)=> {
              value3[index] = item.save
            })
            setValue3(value3)           
          }        
        }
      }
    }
    
    if (t === '22:00')  {
      if (tab === 3) {
        //обработка нажатия вкл/выкл
        if (dates11[ind+1].time === '23:00') {
          setCountCol3(countCol3+1) //для высоту ячейки с датой
          arr = dates11.slice(0); //копируем массив dates
          const newObj = {
            date: date_str,
            time: '22:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates11(arr)

          //изменить чек
          arr.map((item, index)=> {
            value3[index] = item.save
          })
          setValue3(value3)

        } else {
          if (dates11[ind+1].proj === ''){
            setCountCol3(countCol3-1)
            arr = dates11.slice(0); 
            arr.splice(ind+1, 1);
            setDates11(arr)

            //изменить чек
            arr.map((item, index)=> {
              value3[index] = item.save
            })
            setValue3(value3)           
          }        
        }
      }
    }
    
    if (t === '23:00')  {
      if (tab === 3) {
        //обработка нажатия вкл/выкл
        if (dates11[ind+1]?.time !== '23:30') {
          setCountCol3(countCol3+1) //для высоту ячейки с датой
          arr = dates11.slice(0); //копируем массив dates
          console.log(arr)
          const newObj = {
            date: date_str,
            time: '23:30',
            proj: '',
            save: false
          }
          arr.splice(ind+1, 0, newObj);
          setDates11(arr)

          //изменить чек
          arr.map((item, index)=> {
            value3[index] = item.save
          })
          setValue3(value3)          
        } 
        
        if (dates11[ind+1]?.time === '23:30') {
          if (dates11[ind+1].proj === ''){
            setCountCol3(countCol3-1)
            arr = dates11.slice(0); 
            arr.splice(ind+1, 1);
            setDates11(arr)
  
            //изменить чек
            arr.map((item, index)=> {
              value3[index] = item.save
            })
            setValue3(value3)           
          }        
        }
      }
    }

  }

  const exampleToast = (
    <CToast autohide={false} visible={true} color="success" className="text-white align-items-center">
      <div className="d-flex">
        <CToastBody>Планирование успешно сохранено!</CToastBody>
        <CToastClose className="me-2 m-auto" white />
      </div>
    </CToast>
  )

  const savePlan = async() => {
    addToast(exampleToast)

    const newArray = [].concat(dates, dates1, dates11);
    const planer_str = JSON.stringify(newArray) 

    const d_str = new Date().toLocaleDateString()
    const newObj = {
      "datestart": d_str,
      "times": planer_str
    }
    await newPlan(newObj);

    //новая рассылка
    const message = {
      //name: 'Рассылка', 
      text: '', 
      image: '', 
      project: projectName, 
      projectId: projectId, 
      receivers: "", 
      datestart: Date.now(), 
      delivered: 'false',        
    }

    //console.log(message)

    //сохранение рассылки в базе данных
    await newDistributionW(message)

    setTimeout(() => backPage(), 1000);
    //backPage()
  }

  const navigate = useNavigate();
  const backPage = () => {
       navigate('/distributionw');
  } 


  return (
    <div className='dark-theme'>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-uley">
        <AppHeader />
        <div className="body flex-grow-1 px-3">

            <CContainer lg>
                <Suspense fallback={<CSpinner color="primary" />}>
                  <>
                    <h2>Планирование рассылок</h2>
                      <br />
                      <CRow>
                        <CCol xs>
                          <CCard className="mb-4">
                            <CCardHeader>График рассылок</CCardHeader>
                            <CCardBody>

                            <p style={{color: '#fff'}}>Текущий проект: &quot;{projectName}&quot;</p>
                            {
                              showLoader ? <div style={{textAlign:'center'}}><CSpinner/></div>
                              :
                              <>
                              <CRow>
                              <CCol xs>                                   
                                <div style={{float: "left", display: 'flex'}}>
                                  <CTable align="middle" className="mb-0 border" hover responsive bordered style={{float: 'left'}}>   
                                    <CTableHead className='table-dark' >
                                      <CTableRow>
                                        <CTableHeaderCell className="text-center" style={{width: '70px'}}>Дата</CTableHeaderCell>
                                      </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                      <CTableRow v-for="item in tableItems">
                                        <CTableDataCell className="text-center" style={{width: '50px', height: `${41*countCol}px`}} >
                                          <div>{date_str}</div> 
                                        </CTableDataCell>
                                      </CTableRow>
                                    </CTableBody>
                                  </CTable>

                                  <CTable align="middle" className="mb-0 border" hover responsive bordered>
                                    <CTableHead className='table-dark' >
                                      <CTableRow>
                                        {/* <CTableHeaderCell className="text-center">Дата</CTableHeaderCell> */}
                                        <CTableHeaderCell className="text-center">Время</CTableHeaderCell>
                                        <CTableHeaderCell className="text-center">Проект</CTableHeaderCell>   
                                        <CTableHeaderCell className="text-center">Статус</CTableHeaderCell>
                                      </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                    {dates.map((item, index) => (
                                        <CTableRow v-for="item in tableItems" key={index}>   
                                          <CTableDataCell className="text-center" style={{width: '50px'}} >
                                            <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                              <div onClick={()=>clickShowEditTime(`${item.time}`, index, 1)} >{item.time}</div>
                                              {/* <div style={{display: showEditTime ? "block" : "none", fontSize: '12px', paddingLeft: '8px'}}>
                                                <div onClick={changeTimePlus}>
                                                  &#9650;
                                                </div>
                                                <div onClick={changeTimeMinus}>          	
                                                  &#9660;
                                                </div>
                                              </div>    */}
                                            </div>
                                          </CTableDataCell>
                                          <CTableDataCell style={{width: '180px'}}>
                                            <div style={{display: item.proj ? "block": "none"}}>{item.proj}</div>
                                          </CTableDataCell>
                                          <CTableDataCell className="text-center" style={{width: '50px'}}>
                                            <CFormCheck 
                                              id="rowCheckTab1"
                                              checked={value1[index]}
                                              onChange={()=>changeStatus(index, 1)}
                                              disabled={(projectName === item.proj || item.proj === '')  ? '' : 'disabled'}
                                            />
                                          </CTableDataCell>
                                        </CTableRow>
                                    ))}
                                    </CTableBody>
                                  </CTable>
                                  </div>
                                </CCol>
{/* -----------------------------12:00----------------------------------------------------------------------------------- */}
                                <CCol xs>                                   
                                <div style={{float: "left", display: 'flex'}}>
                                  <CTable align="middle" className="mb-0 border" hover responsive bordered style={{float: 'left'}}>   
                                    <CTableHead className='table-dark' >
                                      <CTableRow>
                                        <CTableHeaderCell className="text-center" style={{width: '70px'}}>Дата</CTableHeaderCell>
                                      </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                      <CTableRow v-for="item in tableItems">
                                        <CTableDataCell className="text-center" style={{width: '50px', height: `${41*countCol2}px`}} >
                                          <div>{date_str}</div> 
                                        </CTableDataCell>
                                      </CTableRow>
                                    </CTableBody>
                                  </CTable>

                                  <CTable align="middle" className="mb-0 border" hover responsive bordered>
                                    <CTableHead className='table-dark' >
                                      <CTableRow>
                                        {/* <CTableHeaderCell className="text-center">Дата</CTableHeaderCell> */}
                                        <CTableHeaderCell className="text-center">Время</CTableHeaderCell>
                                        <CTableHeaderCell className="text-center">Проект</CTableHeaderCell>   
                                        <CTableHeaderCell className="text-center">Статус</CTableHeaderCell>
                                      </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                    {dates1.map((item, index) => (
                                        <CTableRow v-for="item in tableItems" key={index}>   
                                          <CTableDataCell className="text-center" style={{width: '50px'}} >
                                            <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                              <div onClick={()=>clickShowEditTime(`${item.time}`, index, 2)} >{item.time}</div>
                                              {/* <div style={{display: showEditTime ? "block" : "none", fontSize: '12px', paddingLeft: '8px'}}>
                                                <div onClick={changeTimePlus}>
                                                  &#9650;
                                                </div>
                                                <div onClick={changeTimeMinus}>          	
                                                  &#9660;
                                                </div>
                                              </div>    */}
                                            </div>
                                          </CTableDataCell>
                                          <CTableDataCell style={{width: '180px'}}>
                                            <div style={{display: item.proj ? "block": "none"}}>{item.proj}</div>
                                          </CTableDataCell>
                                          <CTableDataCell className="text-center" style={{width: '50px'}}>
                                            <CFormCheck 
                                              id="rowCheckTab2"
                                              checked={value2[index]}
                                              onChange={()=>changeStatus(index, 2)}
                                              disabled={(projectName === item.proj || item.proj === '')  ? '' : 'disabled'}
                                            />
                                          </CTableDataCell>
                                        </CTableRow>
                                    ))}
                                    </CTableBody>
                                  </CTable>
                                  </div>
                                </CCol>

{/* ----------------------------18:00------------------------------------------------------------------------------------ */}
                                <CCol xs>
                                <div style={{float: "left", display: 'flex'}}>
                                  <CTable align="middle" className="mb-0 border" hover responsive bordered style={{float: 'left'}}>   
                                    <CTableHead className='table-dark' >
                                      <CTableRow>
                                        <CTableHeaderCell className="text-center" style={{width: '70px'}}>Дата</CTableHeaderCell>
                                      </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                      <CTableRow v-for="item in tableItems">
                                        <CTableDataCell className="text-center" style={{width: '70px', height: `${41*countCol3}px`}} >
                                          <div>{date_str}</div> 
                                        </CTableDataCell>
                                      </CTableRow>
                                    </CTableBody>
                                  </CTable>

                                  <CTable align="middle" className="mb-0 border" hover responsive bordered>
                                    <CTableHead className='table-dark' >
                                      <CTableRow>
                                        {/* <CTableHeaderCell className="text-center">Дата</CTableHeaderCell> */}
                                        <CTableHeaderCell className="text-center">Время</CTableHeaderCell>
                                        <CTableHeaderCell className="text-center">Проект</CTableHeaderCell>   
                                        <CTableHeaderCell className="text-center">Статус</CTableHeaderCell>
                                      </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                    {dates11.map((item, index) => (
                                        <CTableRow v-for="item in tableItems" key={index}>   
                                          <CTableDataCell className="text-center" style={{width: '50px'}} >
                                            <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                              <div onClick={()=>clickShowEditTime(`${item.time}`, index, 3)} >{item.time}</div>
                                            </div>
                                          </CTableDataCell>
                                          <CTableDataCell style={{width: '180px'}}>
                                            <div>{item.proj}</div>
                                          </CTableDataCell>
                                          <CTableDataCell className="text-center" style={{width: '50px'}}>
                                            <CFormCheck 
                                              id="rowCheckTab3"
                                              checked={value3[index]}
                                              onChange={()=>changeStatus(index, 3)}
                                              disabled={(projectName === item.proj || item.proj === '')  ? '' : 'disabled'}
                                            />
                                          </CTableDataCell>
                                        </CTableRow>
                                    ))}
                                    </CTableBody>
                                  </CTable>
                                  </div>
                                </CCol>
                              </CRow>

                            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '15px'}}>
                              <div style={{marginRight: '16px'}}>
                                <Link to={'/distributionw_add'}>
                                  <CButton color="secondary" style={{width: '130px'}}>Назад</CButton>
                                </Link>
                              </div>
                              <div>
                                <CButton color="primary" onClick={savePlan} style={{width: '130px'}}>Сохранить</CButton>
                                {/* <CButton onClick={() => addToast(exampleToast)}>Send a toast</CButton> */}
                                <CToaster ref={toaster} push={toast} placement="top-end" />  
                              </div>
                            </div>
                             </>  
                            }                        
                            </CCardBody>
                          </CCard>
                        </CCol>
                      </CRow>
                  </>
                </Suspense>
            </CContainer>

        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DistributionWPlaner
