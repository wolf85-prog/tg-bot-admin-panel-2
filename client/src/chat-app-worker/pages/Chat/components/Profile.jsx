import React, { useState, useContext, useEffect } from "react";
import media from "./../../../../chat-app-new/assets/images/placeholder.jpeg";
import Checkbox from "./../../../components/Checkbox";
import Icon from "./../../../components/Icon";
import { editContact, uploadFile, editContactAvatar } from './../../../../http/chatAPI';
import { getWorkerNotionId, getWorkerChildrenId} from './../../../../http/workerAPI';
import { useUsersContext } from "../../../../chat-app-new/context/usersContext";
import { AccountContext } from './../../../../chat-app-new/context/AccountProvider';
import defaultAvatar from "./../../../../chat-app-new/assets/images/no-avatar.png";
import CIcon from '@coreui/icons-react'
import {
  cilPen,
  cilMediaPlay
} from '@coreui/icons'
import { 
	CFormSelect,
  } from '@coreui/react'
import { getWorkerId } from "src/http/adminAPI";

const Profile = ({ user }) => {
	const [username, setUsername] = useState("")
	const [worker, setWorker] = useState("")
	const [avatar, setAvatar] = useState("")
	const [form, setForm] = useState(false)
	const { addNewName, addNewAvatar } = useUsersContext();
	const { setPersonW } = useContext(AccountContext);
	const [img, setImg] = useState(null)
	const [showEdit, setShowEdit] = useState(false)
	const input = React.useRef();

	const [phone, setPhone] = useState("")

	const host = process.env.REACT_APP_API_URL

	useEffect(() => {
		setImg(`${host}${user.avatar}`)

		//получить данные из ноушена по телеграм id
		const fetchData = async () => {
			const fio_notion = await getWorkerNotionId(user.chatId)
			console.log("worker: ", fio_notion[0])
			setWorker(fio_notion[0])

			const avatars = await getWorkerChildrenId(fio_notion[0].id)
			setAvatar(avatars[0]?.image)
		}

		fetchData();
	}, [user]);

	useEffect(() => {
		console.log(user)
		
		if (user.phone.includes('-')) {
			setPhone(user.phone)
		} else {
			let str = user.phone
			setPhone(`+7 (${str.slice(1, 4)}) ${str.slice(4, 7)}-${str.slice(7, 9)}-${str.slice(9, 11)}`)
		}
		
	}, [user])

	// const getUser = async () => {
    //     setPersonW({
    //         name: user.name, 
    //         id: user.chatId, 
	// 		avatar: user.avatar
    //     });
    // }
	

	return (
		<div className="profile">
			<div className="profile__sectionW profile__sectionW--personal">
				<div className="profile__avatar-wrapper upload">
					{
						user?.avatar
							? <img src={user?.avatar} alt={user?.name} style={{width: '290px', height: '290px', objectFit: 'cover'}} />//<img src={`${host}${user.avatar}`} alt={user?.name} className="avatar-adm" />
							: <img src={defaultAvatar} alt={user?.name} style={{width: '290px', height: '290px', objectFit: 'cover'}} />
					}
				</div>
				<h2 className="profile__name">{user.name}</h2>
				<h5 style={{fontSize: '16px', color: '#656565'}}>@{user.username}</h5>
			</div>

			<ul className="profile__sectionW profile__section--actions">	
				<li className="profile__actionW">
					{/* <p className="profile__actionW-left">
						<span className="profile__action-text profile__action-text--top">
							селект
						</span>
					</p> */}
					<CFormSelect 
						style={{marginTop: '10px', marginBottom: '10px',  display: "block"}}
                        aria-label="Default select example"
                        options={["Выберите цепочку", "Цепочка №1", "Цепочка №2"]}    
                    />
					<button className="profile__action-right" style={{padding: '6px'}} onClick={()=>console.log('sdfsdfsd')}>
						{/* <Icon id="rightArrow" className="profile__heading-icon" />{" "} */}
						<CIcon icon={cilMediaPlay} style={{color: 'white'}}/>{" "}
					</button>
				</li>

				<li className="profile__actionW">
					<p className="profile__actionW-left">
						<span className="profile__action-text profile__action-text--bottom">
							Телефон
						</span>
						<span className="profile__action-text profile__action-text--top profile__notion">
							{phone}
						</span>
					</p>
				</li>			

				<li className="profile__actionW">
					<p className="profile__actionW-left">
						<span className="profile__action-text profile__action-text--bottom">
							Город
						</span>
						<span className="profile__action-text profile__action-text--top profile__notion">
							{user.city ? user.city : "-"}
						</span>	
					</p>
				</li>			

				<li className="profile__actionW">
					<p className="profile__actionW-left">
						<span className="profile__action-text profile__action-text--bottom">
							Дата рождения
						</span>
						<span className="profile__action-text profile__action-text--top profile__notion">
							{user.age?.start ? 
							`${user.age?.start.split('-')[2]}.${user.age?.start.split('-')[1]}.${user.age?.start.split('-')[0]}`
							: "-"}
						</span>
					</p>
				</li>

				<li className="profile__actionW">
					<p className="profile__actionW-left">
						<span className="profile__action-text profile__action-text--bottom">
							Telegram ID
						</span>
						<span className="profile__action-text profile__action-text--top profile__notion">
							{user.chatId}
						</span>
					</p>
				</li>

				<li className="profile__actionW">
					<p className="profile__actionW-left">
						<span className="profile__action-text profile__action-text--bottom">
							Специальность
						</span>
						<span className="profile__action-text profile__action-text--top">
							{/* {worker.spec?.map((item)=>item.name).join('')} */}
							<table className="table-noborder">{worker.spec?.map((worker, index) => <tr key={index}><td>{worker.name}</td></tr> )}</table>
						</span>	
					</p>
				</li>

				
			</ul>

			{/* <div className="profile__section profile__section--about">
				<div className="sb profile__heading-wrapper">
					<h2 className="profile__heading"> О компании и номер телефона </h2>
				</div>
				<ul>
					<li className="profile__about-item">
						Несколько слов о компании...
					</li>
					<li className="profile__about-item">+7 123-12-12</li>
				</ul>
			</div> */}


			<div className="profile__sectionW profile__section--danger">
				<Icon id="block" className="profile__danger-icon" />
				<p className="profile__danger-text profile__worker"> Заблокировать </p>
			</div>

			<div className="profile__sectionW profile__section--danger">
				<Icon id="delete" className="profile__danger-icon" />
				<p className="profile__danger-text profile__worker"> Удалить чат </p>
			</div>
		</div>
	);
};

export default Profile;
