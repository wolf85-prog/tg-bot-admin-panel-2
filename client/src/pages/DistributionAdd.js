import React, { Suspense, useState, useEffect } from 'react'
import { CContainer, CSpinner } from '@coreui/react'
import { AppSidebar, AppFooter, AppHeader } from '../components/index'
import { 
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CButton,
  CAlert,
} from '@coreui/react'

import { MultiSelect } from "react-multi-select-component";
import { useUsersContext } from "./../chat-app-new/context/usersContext";
import { $host } from './../http/index'

const DistributionAdd = () => {

  const token = process.env.REACT_APP_TELEGRAM_API_TOKEN
	const host = process.env.REACT_APP_API_URL
  const admin_user = process.env.REACT_APP_CHAT_ADMIN_ID

  const { users: clients } = useUsersContext();
  const [contacts, setContacts]= useState([]);

  const [selected, setSelected] = useState([]);
  const [text, setText] = useState('');
  const [countChar, setCountChar] = useState(0);
  const [visible, setVisible] = useState(false);
  const [showEditButtonAdd, setShowEditButtonAdd] = useState(false);
  const [textButton, setTextButton] = useState('');

  useEffect(() => {
    const arrClients = []
    
    clients.map((client) => {
      const newObj = {
        label: client.name, 
        value: client.chatId,
      }
      arrClients.push(newObj)
    })
    setContacts(arrClients)      
  }, [clients]);

  const onChangeText = (e) => {
    setText(e.target.value)
    setCountChar(e.target.value.length)
  }

  const onChangeTextButton = (e) => {
    setTextButton(e.target.value)
  }

  {/* Отправить рассылку */}
  const onSendText = () => {
    console.log(selected)
    
    selected.map(async (user) => {
      console.log("Пользователю ID: " + user.value + " сообщение " + text + " отправлено! Кнопка " + textButton + " отправлена!")

      const text_send_chat = 'Пользователь нажал на кнопку в рассылке!'
      
      //Передаем данные боту
      const keyboard = JSON.stringify({
        inline_keyboard: [
            [
                {"text": textButton, callback_data:'/report'},
            ],
        ]
      });

      const url_send_msg = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${user.value}&parse_mode=html&text=${text.replace(/\n/g, '%0A')}&reply_markup=${keyboard}`
      console.log(url_send_msg)
      const sendToTelegram = await $host.get(url_send_msg);
    })

    setSelected([])
    setText('')
    setShowEditButtonAdd(false)
    setTextButton('')
    setVisible(true)
  }

  {/* Показать Добавление текста кнопки */}
  const clickShowEditButton = (e) => {
    e.preventDefault();

    showEditButtonAdd ? setShowEditButtonAdd (false) : setShowEditButtonAdd (true)
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
                    <h2>Новая рассылка</h2>

                    <CRow>
                        <CCol xs>
                          <CCard className="mb-4">
                            {/* <CCardHeader>Рассылки</CCardHeader> */}
                            <CCardBody>
                            <CAlert color="success" dismissible visible={visible} onClose={() => setVisible(false)}>
                              Сообщение успешно отправлено!
                            </CAlert>
                              <CForm>
                                <div className="mb-3" style={{color: '#8f8888'}}>
                                  <CFormLabel htmlFor="exampleFormControlInput1">Выберите получателей:</CFormLabel>
                                  <MultiSelect
                                    options={contacts}
                                    value={selected}
                                    onChange={setSelected}
                                    style={{color: '#1e1919'}}
                                    overrideStrings={{
                                      "allItemsAreSelected": "Все поля выбраны",
                                      "clearSearch": "Очистить поиск",
                                      "clearSelected": "Очистить выбор",
                                      "noOptions": "Ничего не найдено",
                                      "search": "Поиск",
                                      "selectAll": "Выбрать всё",
                                      "selectAllFiltered": "Выбрать всё (Найденных)",
                                      "selectSomeItems": "Выбрать...",
                                      "create": "Создать",
                                    }}   
                                  />
                                  <h6>Получателей: <span>{selected.length}</span></h6>
                                </div>
                                <div className="mb-3">
                                  {/* <CFormLabel htmlFor="exampleFormControlTextarea1">Текст сообщения</CFormLabel> */}
                                  <CFormTextarea 
                                    id="exampleFormControlTextarea1" 
                                    rows={3} 
                                    placeholder='Введите текст сообщения'
                                    onChange={onChangeText}
                                    value={text}
                                    // helperText = {`${countChar}/500`}
                                  >           
                                  </CFormTextarea>
                                </div>
                                <div className="mb-3 text-center">
                                  <p onClick={clickShowEditButton} > {showEditButtonAdd ? '- Убрать кнопку' : '+ Добавить кнопку'}</p>
                                </div>

                                <CForm className="row g-3" style={{color: '#8f8888', display: showEditButtonAdd ? "block" : "none" }}>
                                  <CCol md={6}>
                                    <CFormInput 
                                      type="text" 
                                      id="inputTextButton" 
                                      label="Название кнопки" 
                                      placeholder="Введите текст"
                                      onChange={onChangeTextButton}
                                      value={textButton}
                                    />
                                  </CCol>
                                </CForm>
                                
                                <br/>

                                <div className="mb-6" style={{color: '#8f8888'}}>
                                  <CFormInput type="file" id="formFile" label="Добавить картинку" />
                                </div>

                                <div className="mb-3"></div>
                                
                                <div className="mb-3" style={{textAlign: 'right'}}>
                                  <CButton color="primary" onClick={onSendText}>Отправить рассылку</CButton>
                                </div>
                              </CForm>

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

export default DistributionAdd
