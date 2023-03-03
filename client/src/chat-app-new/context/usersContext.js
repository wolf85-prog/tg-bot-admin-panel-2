import React, { createContext, useContext, useEffect, useState } from "react";
import { useSocketContext } from "./socketContext";
import { getContacts, getConversation, getMessages } from '../../http/chatAPI'

const UsersContext = createContext();

const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
	const socket = useSocketContext();
	const [users, setUsers] = useState([]); //useState(contacts);
	const chatAdminId = process.env.REACT_APP_CHAT_ADMIN_ID
	const [count, setCount] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			let response = await getContacts();
	
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
					let time_mess = message.createdAt.split('T')
					const newMessage = {
						date: time_mess[0],
						content: message.text,
						sender: message.senderId,
						time: time_mess[1],
						status: 'sent',
					}
					arrayMessage.push(newMessage)
					allDate.push(time_mess[0])

				})

				const dates = [...allDate].filter((el, ind) => ind === allDate.indexOf(el));

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

				const newUser = {
					id: user.id,
					name: first_name + ' ' + last_name,
					chatId: user.chatId,
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


			setTimeout(() => {
				const sortedClients = [...arrayContact].sort((a, b) => {       
					var dateA = new Date(a.date), dateB = new Date(b.date) 
					return dateB-dateA  //сортировка по убывающей дате  
				})

				setUsers(sortedClients)

			}, "10000")

		}

		fetchData();

	},[])


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

	const fetchMessageResponse = (data) => {
		console.log("Пришло сообщение: ", count+1)
		setCount(count+1);

		setUsers((users) => {
			const { senderId, text } = data;
			//console.log("users: ", users)
			let userIndex = users.findIndex((user) => user.chatId === senderId.toString());
			const usersCopy = JSON.parse(JSON.stringify(users));
			const newMsgObject = {
				date: new Date().toLocaleDateString(),
				content: text,
				sender: senderId,
				time: new Date().toLocaleTimeString(),
				status: null,
			};

			const currentDate = new Date().toLocaleDateString()
			console.log(currentDate)

			usersCopy[userIndex].messages['2023-03-03'].push(newMsgObject);
			
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, ['unread']: count + 1, ['date']: new Date(), ['message']: newMsgObject.content};

			//сортировка
			const userSort = [...usersCopy].sort((a, b) => {       
				var dateA = new Date(a.date), dateB = new Date(b.date) 
				return dateB-dateA  //сортировка по убывающей дате  
			})

			console.log("userSort: ", userSort)
			return userSort;
		});

		//_updateUserProp(data.senderId, "uread", value +1);
	};

	//подключение админа к сокету и вывод всех подключенных
	useEffect(()=>{
        socket.emit("addUser", chatAdminId)
        socket.on("getUsers", users => {
            console.log("users socket: ", users);
        })
    },[chatAdminId])

	useEffect(() => {
		socket.on("getMessage", fetchMessageResponse);		
		//socket.on("start_typing", setUserAsTyping);
		//socket.on("stop_typing", setUserAsNotTyping);
		
	}, [socket]);

	const setUserAsUnread = (userId) => {
		_updateUserProp(userId, "unread", 0);
	};

	const addNewMessage = (userId, message) => {
		let userIndex = users.findIndex((user) => user.chatId === userId);
		const usersCopy = [...users];
		const newMsgObject = {
			content: message,
			sender: chatAdminId,
			time: new Date().toLocaleTimeString(),
			status: "delivered",
		};

		usersCopy[userIndex].messages['2023-03-03'].push(newMsgObject);
		setUsers(usersCopy);

		//socket.emit("fetch_response", { userId });
	};


	return (
		<UsersContext.Provider value={{ 
			users, 
			setUsers,
			setUserAsUnread, 
			addNewMessage 
		}}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersContext, UsersProvider };
