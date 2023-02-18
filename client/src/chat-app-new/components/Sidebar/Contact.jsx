import React, { useContext,useState, useEffect } from "react";
import Icon from "./../../components/Icon";
import { Link } from "react-router-dom";
import formatTime from "./../../utils/formatTime";
import { useUsersContext } from "./../../context/usersContext";
import { getConversation } from './../../../http/chatAPI'
import { AccountContext } from '../../../chat-app/context/AccountProvider'
import Avatar from "./../../../assets/images/avatars/blank-avatar.png"

const Contact = ({ contact }) => {
	const { setPerson, account, newMessageFlag } = useContext(AccountContext);
	const [lastMessage, setLastMessage] = useState({});
	// const { setUserAsUnread } = useUsersContext();
	
	// const getLastMessage = () => {
	// 	const messageDates = Object.keys(contact.messages);
	// 	const recentMessageDate = messageDates[messageDates.length - 1];
	// 	const messages = [...contact.messages[recentMessageDate]];
	// 	const lastMessage = messages.pop();
	// 	return lastMessage;
	// };

	// const lastMessage = getLastMessage(contact);


	useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation(contact.chatId)
            setLastMessage({ text: data?.message, updatedAt: data?.updatedAt })
        }
        getConversationDetails();
    }, [newMessageFlag])


    const getUser = async () => {
        setPerson({
            name: contact.firstname  + ' ' + contact.lastname, 
            id: contact.chatId
        });
        console.log("person: ", contact) 
    }

	return (
		<Link
			className="sidebar-contact"
			onClick={() => getUser()}
		>
			<div className="sidebar-contact__avatar-wrapper">
				<img
					src={Avatar}//{contact.profile_picture}
					alt="avatar_default"//{contact.profile_picture}
					className="avatar"
				/>
			</div>
			<div className="sidebar-contact__content">
				<div className="sidebar-contact__top-content">
					<h2 className="sidebar-contact__name"> {contact.firstname} {contact.lastname}</h2>
					<span className="sidebar-contact__time">
						{/* {formatTime(lastMessage.time)} */}
					</span>
				</div>
				{/* <div className="sidebar-contact__bottom-content">
					<p className="sidebar-contact__message-wrapper">
						{lastMessage.status && (
							<Icon
								id={
									lastMessage?.status === "sent" ? "singleTick" : "doubleTick"
								}
								aria-label={lastMessage?.status}
								className={`sidebar-contact__message-icon ${
									lastMessage?.status === "read"
										? "sidebar-contact__message-icon--blue"
										: ""
								}`}
							/>
						)}
						<span
							className={`sidebar-contact__message ${
								!!contact.unread ? "sidebar-contact__message--unread" : ""
							}`}
						>
							{contact.typing ? <i> typing...</i> : lastMessage?.content}
						</span>
					</p>
					<div className="sidebar-contact__icons">
						{contact.pinned && (
							<Icon id="pinned" className="sidebar-contact__icon" />
						)}
						{!!contact.unread && (
							<span className="sidebar-contact__unread">{contact.unread}</span>
						)}
						<button aria-label="sidebar-contact__btn">
							<Icon
								id="downArrow"
								className="sidebar-contact__icon sidebar-contact__icon--dropdown"
							/>
						</button>
					</div>
				</div> */}
			</div>
		</Link>
	);
};

export default Contact;
