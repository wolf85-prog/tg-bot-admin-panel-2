import React, { Suspense, useState, useEffect } from 'react'
import { CContainer, CSpinner } from '@coreui/react'
import { AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Link } from 'react-router-dom'
import { 
  CRow,
  CCol,
  CCard,
  CCardBody,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CButton,
  CAlert,
  CFormCheck,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownDivider,
  CDropdownItem
} from '@coreui/react'

import { MultiSelect } from "react-multi-select-component";
import { useUsersContext } from "../chat-app-new/context/usersContext";
import { $host } from '../http/index'
import { useNavigate } from 'react-router-dom';
import { newDistribution, getDistributions } from '../http/adminAPI';
import { newMessage, uploadFile } from '../http/chatAPI';
import sendSound from './../chat-app-new/assets/sounds/distribution_sound.mp3';
import phone_image from './../assets/images/phone.png';

const DistributionAdd = () => {

  const token = process.env.REACT_APP_TELEGRAM_API_TOKEN
	const host = process.env.REACT_APP_API_URL
  const chatAdminId = process.env.REACT_APP_CHAT_ADMIN_ID

  const { users: clients } = useUsersContext();
  const { addNewMessage, setDistributions } = useUsersContext();
  const [contacts, setContacts]= useState([]);
  const [projects, setProjects]= useState([]);

  const [selected, setSelected] = useState([]);
  const [text, setText] = useState('');
  const [countChar, setCountChar] = useState(0);
  const [visible, setVisible] = useState(false);
  const [showEditButtonAdd, setShowEditButtonAdd] = useState(false);
  const [sendToAdmin, setSendToAdmin] = useState(false);
  const [textButton, setTextButton] = useState('');
  const [file, setFile] = useState();
  const [value, setValue] = useState("");
  const [image, setImage]= useState("");

  const audio = new Audio(sendSound);

  const navigate = useNavigate();

  const backPage = () => {
       navigate('/distributionw');
  } 

  const categories = [ 
    {
      name: '1.1 Звук',
      chatId: '',
    },
    {
      name: '1.2 Свет',
      chatId: '',
    },
    {
      name: '1.3 Видео',
      chatId: '',
    },
    {
      name: '1.4 Риггеры',
      chatId: '',
    },
    {
      name: '1.5 Помощники / Грузчики',
      chatId: '',
    },
    {
      name: '1.6 Граунд',
      chatId: '',
    },
    {
      name: '1.7 Водители',
      chatId: '',
    },
    {
      name: '1.8 Технический продакшн',
      chatId: '',
    },
    {
      name: '1.9 Фото',
      chatId: '',
    },
    {
      name: '2.0 Кейтеринг',
      chatId: '',
    },
    {
      name: '2.1 Артисты',
      chatId: '',
    },
    {
      name: '2.2 Игромания',
      chatId: '',
    },   
  ]

  const projects_number = [ 
    {
      name: '1',
      chatId: '',
    },
    {
      name: '2',
      chatId: '',
    },
    {
      name: '3',
      chatId: '',
    }, 
  ]

  const projects_name = [ 
    {
      name: 'Проект 1',
      chatId: '',
    },
    {
      name: 'Проект 2',
      chatId: '',
    },
    {
      name: 'Проект 3',
      chatId: '',
    }, 
  ]

  //категории
  useEffect(() => {
    const arrClients = []   
    categories.map((category) => {
      const newObj = {
        label: category.name, 
        value: category.chatId,
      }
      arrClients.push(newObj)
    })
    setContacts(arrClients)      
  }, []);


  //проекты
  useEffect(() => {
    const arrProjects = []
    projects_name.map((project) => {
      const newObj = {
        label: project.name, 
        value: project.chatId,
      }
      arrProjects.push(newObj)
    })
    setProjects(arrProjects)      
  }, []);

  //проекты 2
  // useEffect(() => {
  //   const arrProjects = []
  //   projects_number.map((project) => {
  //     const newObj = {
  //       label: project.name, 
  //       value: project.chatId,
  //     }
  //     arrProjects.push(newObj)
  //   })
  //   setProjects(arrProjects)      
  // }, [projects_number]);

  const onChangeText = (e) => {
    setText(e.target.value)
    setCountChar(e.target.value.length)
  }

  useEffect(() => {
    const getImage = async () => {
        if (file) {
          console.log("file:", file)
          const data = new FormData();
          data.append("name", file.name);
          data.append("photo", file);
          
          let response = await uploadFile(data);
          console.log("response: ", response.data.path)

          setImage(response.data.path);
          //сообщение с ссылкой на файл
          //console.log(host + response.data.path)
          //setValue(host + response.data.path)
        }
    }
    getImage();
  }, [file])

  {/* Добавление файла */}
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.value)
  }

  {/* Показать Добавление текста кнопки */}
  const clickShowEditButton = (e) => {
    e.preventDefault();
    showEditButtonAdd ? setShowEditButtonAdd (false) : setShowEditButtonAdd (true)
  }

  const onChangeTextButton = (e) => {
    setTextButton(e.target.value)
  }

  const onChangeCheck = (e) => {
    setSendToAdmin(e.target.value)
  }

  const onChangeAddButton = () => {
   setShowEditButtonAdd (true)
   //console.log("dsfsdf")
  }

  const onChangeAddButton2 = () => {
    setShowEditButtonAdd (false)
   }

  {/* Отправка рассылки */}
  const onSendText = async() => {
    console.log(selected)

    audio.play();

    //новая рассылка
    const message = {
      name: 'Рассылка', 
      text: text, 
      image: host + image, 
      button: textButton, 
      receivers: JSON.stringify(selected), 
      datestart: Date.now(), 
      delivered: 'true',        
    }
    console.log("message send button: ", message);

    //сохранение рассылки в базе данных
    await newDistribution(message)
    
    selected.map(async (user, index) => {
      console.log("Пользователю ID: " + user.value + " сообщение " + text + " отправлено! Кнопка " + textButton + " отправлена!")

      let client = clients.filter((client) => client.chatId === user.value.toString())[0];
      
      //Передаем данные боту
      const keyboard = JSON.stringify({
        inline_keyboard: [
            [
                {"text": textButton, callback_data:'/report'},
            ],
        ]
      });

      //отправить в телеграмм
      let sendToTelegram
      if (text !== '') {
        const url_send_msg = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${user.value}&parse_mode=html&text=${text.replace(/\n/g, '%0A')}`
        console.log("url_send_msg: ", url_send_msg)
        sendToTelegram = await $host.get(url_send_msg);
        console.log('sendToTelegram: ', sendToTelegram)
      }  

      const url_send_photo = `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${user.value}&reply_markup=${keyboard}`
      console.log("url_send_photo: ", url_send_photo)
      
      let sendPhotoToTelegram
      if (file) {
        const form = new FormData();
        form.append("photo", file);

        sendPhotoToTelegram = await $host.post(url_send_photo, form);
        console.log('sendPhotoToTelegram: ', sendPhotoToTelegram)
      } 

      //отправить в админку
      if (sendToAdmin) {
        let message = {};
        if(!file) {
            message = {
                senderId: chatAdminId, 
                receiverId: user.value,
                conversationId: client.conversationId,
                type: "text",
                text: text,
                is_bot: true,
				        messageId: sendToTelegram.data.result.message_id,
                buttons: '',
            }
        } else {
            message = {
                senderId: chatAdminId, 
                receiverId: user.value,
                conversationId: client.conversationId,
                type: "image",
                text: host + image,
                is_bot: true,
				        messageId: sendPhotoToTelegram.data.result.message_id,
                buttons: textButton,
            }
        }
        console.log("message send: ", message);

        //сохранение сообщения в базе данных
		    await newMessage(message)

		    //сохранить в контексте
        if(!file) {
          addNewMessage(user.value, text, 'text', '', client.conversationId, sendToTelegram.data.result.message_id);
        } else {
          addNewMessage(user.value, host + image, 'image', textButton, client.conversationId, sendPhotoToTelegram.data.result.message_id);
        }
  
      }  

      //обновить список рассылок
      let response = await getDistributions();
      console.log("distribution new add: ", response.length)
			setDistributions(response)

    })

    setSelected([])
    setSendToAdmin(false)
    setText('')
    setShowEditButtonAdd(false)
    setTextButton('')
    setVisible(true)
    setValue('')

    navigate('/distribution');
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
                                <div style={{color: '#f3f3f3'}}>
                                  <CRow className="mb-3">
                                    <CCol sm={3} >                                
                                      <CFormLabel htmlFor="exampleFormControlInput1">Выбери категорию:</CFormLabel>
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
                                      <p style={{color: '#767676'}}>Получателей: <span>{selected.length}</span></p>

                                      <p style={{color: '#f3f3f3'}}>Рассылка по проекту</p>

                                      <CRow className="mb-3">
                                        <CCol sm={6} > 
                                          <CFormCheck 
                                            type="radio"
                                            id="flexRadioDefault1" 
                                            name="flexRadioDefault"
                                            label="Название"
                                            onChange={onChangeCheck}
                                            defaultChecked
                                          />
                                        </CCol>
                                        <CCol sm={6} > 
                                          <CFormCheck 
                                            type="radio"
                                            id="flexRadioDefault2" 
                                            name="flexRadioDefault"
                                            label="Номер"
                                            onChange={onChangeCheck}
                                          />
                                        </CCol>
                                      </CRow>

                                      <MultiSelect
                                        options={projects}
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

                                    </CCol>

                                    {/* <CCol sm={2}></CCol> */}

                                    {/* Правый блок */}
                                    <CCol sm={6}>
                                        <CFormLabel htmlFor="exampleFormControlInput1">Текст рассылки</CFormLabel>
                                        <CFormTextarea 
                                          id="exampleFormControlTextarea1" 
                                          rows={5} 
                                          placeholder='Введите текст сообщения'
                                          onChange={onChangeText}
                                          value={text}
                                          // helperText = {`${countChar}/500`}
                                        >           
                                        </CFormTextarea>

                                        <br/>

                                      <CRow className="mb-6">
                                          <CCol sm={3} > 
                                            <CDropdown dark>
                                              <CDropdownToggle color="secondary">Добавить...</CDropdownToggle>
                                              <CDropdownMenu>
                                                <CDropdownItem href="#">Картинка</CDropdownItem>
                                                <CDropdownItem href="#">Файл</CDropdownItem>
                                                <CDropdownItem href="#">Аудио</CDropdownItem>
                                                <CDropdownItem href="#">Видео</CDropdownItem>
                                              </CDropdownMenu>
                                            </CDropdown>
                                          </CCol>

                                          <CCol sm={9} > 
                                            {/* Добавление картинки */}
                                            <div style={{color: '#8f8888'}}>
                                              <CFormInput 
                                                type="file" 
                                                id="formFile" 
                                                // label="Добавить картинку" 
                                                name="photo"
                                                onChange={(e) => onFileChange(e)}
                                                value={value}
                                              />
                                            </div>
                                          </CCol>

                                        </CRow>

                                        <div className="mb-3"></div>

                                        {/* Ряд кнопок */}
                                        <CRow className="mb-6">
                                          <CCol sm={6} > 
                                            <CFormCheck 
                                              type="radio"
                                              id="addButtonRadio" 
                                              name="groupRadioButton"
                                              label="Добавить кнопку"
                                              checked={showEditButtonAdd}
                                              onChange={onChangeAddButton}
                                            />
                                            {/* <div className="mb-3 text-left">
                                              <p style={{color: '#fff', cursor: 'pointer'}} onClick={clickShowEditButton} > {showEditButtonAdd ? '- Убрать кнопку' : '+ Добавить кнопку'}</p>
                                            </div> */}

                                          </CCol>

                                        <CCol sm={6} > 
                                          <CFormCheck 
                                            type="radio"
                                            id="appleButtonRadio" 
                                            name="groupRadioButton"
                                            label="Принять / Отклонить"
                                            checked={!showEditButtonAdd}
                                            onChange={onChangeAddButton2}
                                            //defaultChecked
                                          />
                                        </CCol>
                                      </CRow>

                                      <br/>
                                      <div style={{color: '#8f8888', display: showEditButtonAdd ? "block" : "none" }}>
                                      <CRow className="mb-6" >
                                        
                                        {/* Раскрывающийся ряд */}
                                        {/* Добавление кнопки */}
                                        <CCol sm={6} > 
                                          {/* <CForm className="row g-3" style={{color: '#8f8888', display: showEditButtonAdd ? "block" : "none" }}>                                              */}
                                            <CFormInput 
                                              type="text" 
                                              id="inputTextButton" 
                                              label="Название кнопки" 
                                              placeholder="Введите текст"
                                              onChange={onChangeTextButton}
                                              value={textButton}
                                            />
                                          {/* </CForm> */}
                                        </CCol>
                                      </CRow>

                                        <CRow>
                                          <br/>
                                        </CRow>

                                        <CRow className="mb-6">
                                          <CCol sm={6} >         
                                            {/* Цепь */}
                                            <CFormCheck 
                                              type="radio"
                                              id="addTargetRadio" 
                                              name="groupRadioTarget"
                                              label="Цепь №"
                                              // checked={showEditButtonAdd}
                                              // onChange={onChangeAddButton}
                                            />
                                            
                                            <MultiSelect
                                              options={projects}
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
                                          </CCol>

                                          <CCol sm={6} > 
                                            {/* Ссылка */}
                                            <CFormCheck 
                                              type="radio"
                                              id="addURLRadio" 
                                              name="groupRadioTarget"
                                              label="Ссылка"
                                              // checked={showEditButtonAdd}
                                              // onChange={onChangeAddButton}
                                            />

                                            <CFormInput 
                                              type="text" 
                                              id="inputTextButton" 
                                              placeholder="https://"
                                              onChange={onChangeTextButton}
                                              value={textButton}
                                            />
                                          </CCol>
                                          
                                        </CRow>
                                      </div>
                                    </CCol>

                                    {/* Телефон */}
                                    <CCol sm={3}>
                                      <img src={phone_image} width='250' alt='phone' />
                                      <div style={{position: 'absolute', top: '80px', right: '230px'}}>Привет!</div>
                                    </CCol>


                                  
                                  </CRow>

                                </div>

                                <br/>

                                <div className="mb-3" style={{textAlign: 'center'}}>
                                  {/* <CButton color="secondary" style={{marginRight: '15px'}} onClick={backPage}>Отмена</CButton> */}
                                  <CButton color="primary" style={{marginRight: '15px'}} onClick={onSendText}>Разослать сейчас</CButton>
                                  <Link to={'/distributionw_planer'}><CButton color="secondary">Запланировать</CButton></Link>
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