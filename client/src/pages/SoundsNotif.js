import React, { Suspense, useEffect, useState, useContext } from 'react'
import { AppSidebar, AppFooter, AppHeader } from '../components/index'

import { useUsersContext } from "./../chat-app-new/context/usersContext";
import { delSoundNotif, getSoundNotif, startSoundNotif } from './../http/adminAPI.js'

import {
  CContainer, 
  CSpinner,
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCardText,
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
} from '@coreui/react'

// routes config
import routes from '../routes'

const SoundsNotif = () => {  

  const { soundsNotif } = useUsersContext();

  const [soundNotif, setSoundNotif] = useState([]); 
  const [activeKey, setActiveKey] = useState(2)
  const [tabhub, setTabhub]= useState('');

    //get Contacts
    useEffect(() => {
      //const arrClients = []
  
      const fetchData = async() => {

        console.log("Открываю страницу Звуковые уведомления")

        let notifs = await getSoundNotif()
        console.log("notifs: ", notifs) 

        const sortedNotif = [...notifs].sort((a, b) => {       
					var dateA = a.date, dateB = b.date 
					return dateB-dateA  //сортировка по убывающей дате  
				})

        setSoundNotif(sortedNotif)  

      }
      
      //fetchData();
      
    }, []);

  const clickUpdate = async() => {
    console.log("Начинаю обновление уведомлений через бота заказчиков...")
    await startSoundNotif()
  }

  const openHub = (hub) => {
    if (hub === 'Static') { 
      // setShowWorkhub(true)
      // setShowRenthub(false)
      // setShowDeleted(false)
      // setActiveKey(2)
      // setShowWidget(false)
      // setShowWidget2(true)
      setTabhub('Static')
    }
    if (hub === 'Process') { 
      // setShowWorkhub(false)
      // setShowRenthub(true)
      // setShowDeleted(false)
      // setActiveKey(1)
      // setShowWidget(true)
      // setShowWidget2(false)
      setTabhub('Process')
    }
  }

  return (
    <div className='dark-theme'>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-uley">
        <AppHeader />
        <div className="body flex-grow-1 px-3">

            <CContainer lg>
                <Suspense fallback={<CSpinner color="primary" />}>

                  <CRow className="justify-content-between">
                    <CCol xs={6}><h2>Мониторинг</h2></CCol>
                  </CRow>

                  <CRow className="mb-12">
                    {/* Вкладки */}
                    <CCol sm={6}>
                      {/* Renthub Workhub */} 
                      <CNav variant="tabs" className='dark-theme'>
                            <CNavItem>
                              <CNavLink 
                                style={{background: activeKey !== 2 ? '#08080869' : '', cursor: 'pointer'}} 
                                onClick={() => openHub('Static')} 
                                active={activeKey === 2}>
                                  Производительность
                              </CNavLink>
                            </CNavItem>
                            <CNavItem>
                              <CNavLink 
                                style={{background: activeKey !== 1 ? '#08080869' : '', cursor: 'pointer'}} 
                                onClick={() => openHub('Process')} 
                                active={activeKey === 1}>
                                  Процессы
                              </CNavLink>
                            </CNavItem>
                      </CNav>
                    </CCol>
                  </CRow>    
 
                  <CCard>
                    {/* <CCardHeader>Производительность</CCardHeader> */}
                    <CCardBody>
                      {/* <CCardTitle>Special title treatment</CCardTitle> */}
                      {/* <CTable>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">№</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Дата</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Проект</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Оповещение</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Статус</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                        {soundNotif.map((item, index) => (
                          <CTableRow key={index}>
                            <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                            <CTableDataCell>{new Date(parseInt(item.date)).toLocaleDateString()} {new Date(parseInt(item.date)).toLocaleTimeString().split(':')[0]}:{new Date(parseInt(item.date)).toLocaleTimeString().split(':')[1]}</CTableDataCell>
                            <CTableDataCell>{item.name}</CTableDataCell>
                            <CTableDataCell>{item.text}</CTableDataCell>
                            <CTableDataCell>{item.delivered ? "Получено" : "Запланировано"}</CTableDataCell>
                          </CTableRow>
                         ))
                        } 
                        </CTableBody>
                      </CTable> */}

                    <CRow>
                      <CCol xs={6}><iframe width="600" height="600" src="https://proj.uley.team:8000/status" title="description"></iframe></CCol>
                      <CCol xs={6}><iframe width="600" height="600" src="https://proj.uley.team:8001/status" title="description"></iframe></CCol>
                    </CRow>
                    <hr></hr>
                    <br/>
                    <CRow>
                      <CCol xs={6}><iframe width="600" height="600" src="https://proj.uley.team:8080/status" title="description"></iframe></CCol>
                      <CCol xs={6}><iframe width="600" height="600" src="https://proj.uley.team:5000/status" title="description"></iframe></CCol>
                    </CRow>
                      
                      
                    </CCardBody>
                  </CCard>
                  
                  {/* {soundsNotif.map((item, index) => (
                      <p key={index}>- {item}</p>
                    ))
                  } */}
                  
                </Suspense>
            </CContainer>

        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default SoundsNotif
