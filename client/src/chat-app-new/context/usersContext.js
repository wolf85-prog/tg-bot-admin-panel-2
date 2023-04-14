import React, { createContext, useContext, useEffect, useState } from "react";
import { useSocketContext } from "./socketContext";
import { getContacts, getConversation, getMessages } from '../../http/chatAPI'
import useSound from 'use-sound';
import boopSfx from './../assets/sounds/boop.mp3';

const UsersContext = createContext();

const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
	const socket = useSocketContext();
	const [users, setUsers] = useState([]); //useState(contacts);
	const chatAdminId = process.env.REACT_APP_CHAT_ADMIN_ID
	const [count, setCount] = useState(0)
	const [usersOnline, setUsersOnline] = useState([]);

	//const [play] = useSound(boopSfx);
	const audio = new Audio(boopSfx);

	useEffect(() => {
		const fetchData = async () => {
			let response = await getContacts();
			console.log("response: ", response.length)
	
			const arrayContact = []
	
			response.map(async (user) => {
				
				let conversationId = await getConversation(user.chatId)
				let messages = await getMessages(conversationId)

				//получить последнее сообщение
				const messageDates = Object.keys(messages);
				const recentMessageDate = messageDates[messageDates.length - 1];
				const message = messages[recentMessageDate];

				const dateMessage = message ? messages[recentMessageDate].createdAt : "2000-01-01T00:00:00";
				const lastMessage = message ? messages[recentMessageDate].text : "";			
	
				const arrayMessage = []
				const allDate = []

				messages.map(message => {
					//let time_mess = message.createdAt.split('T')
					
					const d = new Date(message.createdAt);
					const year = d.getFullYear();
					const month = String(d.getMonth()+1).padStart(2, "0");
					const day = String(d.getDate()).padStart(2, "0");
					const chas = d.getHours();
					const minut = String(d.getMinutes()).padStart(2, "0");

					const newDateMessage = `${day}.${month}.${year}`

					const newMessage = {
						date: newDateMessage,
						content: message.text,
						image: message.type === 'image' ? true : false,
						descript: message.buttons ? message.buttons : '',
						sender: message.senderId,
						time: chas + ' : ' + minut,
						status: 'sent',
						id:message.messageId,
					}
					arrayMessage.push(newMessage)
					allDate.push(newDateMessage)

				})

				const sortedDate = [...allDate].sort((a, b) => {
					var dateA = new Date(a), dateB = new Date(b)
					return dateA-dateB //сортировка по возрастающей дате
				})

				const dates = [...allDate].filter((el, ind) => ind === allDate.indexOf(el));

				//console.log("dates: ", dates)

				let obj = {};
				for (let i = 0; i < dates.length; i++) {
					const arrayDateMessage = []
					for (let j = 0; j < arrayMessage.length; j++) {
						if (arrayMessage[j].date === dates[i]) {
							arrayDateMessage.push(arrayMessage[j])							
						}
					}	
					obj[dates[i]] = arrayDateMessage;
				}

				//obj["Сегодня"] = []

				let first_name = user.firstname != null ? user.firstname : ''
				let last_name = user.lastname != null ? user.lastname : ''

				let chatName = user.username ? user.username : first_name + ' ' + last_name

				const newUser = {
					id: user.id,
					name: chatName,
					chatId: user.chatId,
					avatar: user.avatar,
					conversationId: conversationId,
					unread: 0, 
					pinned: false,
					typing: false,
					message:  lastMessage,
					date: dateMessage,
					messages: obj, // { "01/01/2023": arrayMessage,"Сегодня":[] },	
				}

				arrayContact.push(newUser)

			})

			//подгрузка контактов
			setTimeout(() => {
				const sortedClients = [...arrayContact].sort((a, b) => {       
					var dateA = new Date(a.date), dateB = new Date(b.date) 
					return dateB-dateA  //сортировка по убывающей дате  
				})

				setUsers(sortedClients)
				console.log("contacts: ", arrayContact)

			}, "10000")

		}

		fetchData();

	},[])
//------------------------------------------------------------------------------------------

	//подключение админа к сокету и вывод всех подключенных
	useEffect(()=>{
		socket.emit("addUser", chatAdminId)
		socket.on("getUsers", users => {
			console.log("users socket: ", users);
			setUsersOnline(users)
		})
		
	},[chatAdminId])
	
	const _updateUserProp = (userId, prop, value) => {
		setUsers((users) => {
			const usersCopy = [...users];
			let userIndex = users.findIndex((user) => user.chatId === userId);
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, [prop]: value };
			return usersCopy;
		});
	};

	const setUserAsTyping = (data) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", true);
	};

	const setUserAsNotTyping = (data) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", false);
	};


	//получить сообщение из телеграмма
	const fetchMessageResponse = (data) => {
		audio.play();
		console.log("date: ", data)
		console.log("Пришло новое сообщение: ", count+1)
		setCount(count+1);

		setUsers((users) => {
			const { senderId, text, messageId } = data;
			//console.log("users: ", users)
			let userIndex = users.findIndex((user) => user.chatId === senderId.toString());
			const usersCopy = JSON.parse(JSON.stringify(users));
			const newMsgObject = {
				date: new Date().toLocaleDateString(),
				content: text,
				sender: senderId,
				time: new Date().toLocaleTimeString(),
				status: null,
				id: messageId,
			};

			const currentDate = new Date().toLocaleDateString()

			if (usersCopy[userIndex].messages[currentDate]) {
				usersCopy[userIndex].messages[currentDate].push(newMsgObject);
			} else {
				usersCopy[userIndex].messages[currentDate] = [];
				usersCopy[userIndex].messages[currentDate].push(newMsgObject);
			}
			
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, ['unread']: count + 1, ['date']: new Date(), ['message']: newMsgObject.content};

			//сортировка
			const userSort = [...usersCopy].sort((a, b) => {       
				var dateA = new Date(a.date), dateB = new Date(b.date) 
				return dateB-dateA  //сортировка по убывающей дате  
			})

			return userSort;
		});

		//_updateUserProp(data.senderId, "uread", value +1);
	};


	//получить исходящее сообщение в админку
	const fetchAdmin = (data) => {
		console.log("Пришло сообщение в Админку: ", data)

		setUsers((users) => {
			const { senderId, receiverId, text, messageId } = data;

			let userIndex = users.findIndex((user) => user.chatId === receiverId.toString());
			const usersCopy = JSON.parse(JSON.stringify(users));
			const newMsgObject = {
				date: new Date().toLocaleDateString(),
				content: text,
				sender: senderId,
				time: new Date().toLocaleTimeString(),
				status: 'delivered',
				id: messageId,
			};

			const currentDate = new Date().toLocaleDateString()

			if (usersCopy[userIndex].messages[currentDate]) {
				usersCopy[userIndex].messages[currentDate].push(newMsgObject);
			} else {
				usersCopy[userIndex].messages[currentDate] = [];
				usersCopy[userIndex].messages[currentDate].push(newMsgObject);
			}
			
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, ['date']: new Date(), ['message']: newMsgObject.content};

			//сортировка
			const userSort = [...usersCopy].sort((a, b) => {       
				var dateA = new Date(a.date), dateB = new Date(b.date) 
				return dateB-dateA  //сортировка по убывающей дате  
			})

			console.log(userSort)

			return userSort;
		});
	}

	//получить исходящее сообщение в админку
	const fetchDelAdmin = (data) => {
		console.log("Удаление сообщение в Админке: ", data)

		setUsers((users) => {
			const { messageId, messageDate, chatId } = data;

			let userIndex = users.findIndex((user) => user.chatId === chatId);
			const usersCopy = JSON.parse(JSON.stringify(users));

			const messageIndex = usersCopy[userIndex].messages[messageDate].map(el => el.id).lastIndexOf(messageId);

			usersCopy[userIndex].messages[messageDate].splice(messageIndex, 1); 

			const userObject = usersCopy[userIndex];

			const userSort = [...usersCopy]

			return userSort;
		});
	}

	useEffect(() => {
		socket.on("getMessage", fetchMessageResponse);
		socket.on("getAdmin", fetchAdmin);	
		socket.on("getDelAdmin", fetchDelAdmin);			
		//socket.on("start_typing", setUserAsTyping);
		//socket.on("stop_typing", setUserAsNotTyping);
		
	}, [socket]);

	const setUserAsUnread = (userId) => {
		_updateUserProp(userId, "unread", 0);
	};


	//отправить сообщение из админки 
	const addNewMessage = (userId, message, convId, messageId) => {

		socket.emit("sendAdmin", { 
			senderId: chatAdminId,
			receiverId: userId,
			text: message,
			convId: convId,
			messageId,
		})

		// socket.emit("sendMessage", { 
		// 	senderId: userId,
		// 	receiverId: chatAdminId,
		// 	text: message,
		// 	convId: convId,
		// });
	};

	const delMessageContext = (messageId, messageDate, chatId) => {
		socket.emit("delAdmin", { 
			messageId,
			messageDate,
			chatId,
		})
	}

	//сохранить новое имя пользователя
	const addNewName = (userId, name) => {
		let userIndex = users.findIndex((user) => user.chatId === userId);
		const usersCopy = [...users];
		usersCopy[userIndex].name = name;
		setUsers(usersCopy);
	}

	//сохранить новое имя пользователя
	const addNewAvatar = (userId, avatar) => {
		let userIndex = users.findIndex((user) => user.chatId === userId);
		const usersCopy = [...users];
		usersCopy[userIndex].avatar = avatar;
		setUsers(usersCopy);
	}


	return (
		<UsersContext.Provider value={{ 
			users, 
			setUsers,
			setUserAsUnread, 
			addNewMessage,
			delMessageContext,
			addNewName,
			addNewAvatar,
			usersOnline 
		}}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersContext, UsersProvider };
