import React, { useContext, Suspense, useState, useRef, useEffect } from 'react'
import "./messenger.css"
import { CContainer, CSpinner } from '@coreui/react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../components/index'
import Conversation from '../../components/chat/conversations/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import {Context} from "../../index";

import { $authHost, $host } from './../../http/index'

export default function Messenger() {
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const scrollRef = useRef();
    const chatAdminId = process.env.REACT_APP_CHAT_ADMIN_ID

    const {user} = useContext(Context)

    let friendId 

    useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await $host.get("api/conversations/" + chatAdminId);
            setConversations(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();

        //friendId = conversations.members.find(m=>m !== chatAdminId)

    }, [chatAdminId]);

    useEffect(() => {
        const getMessages = async () => {
          try {
            const res = await $host.get("api/messages/" + currentChat?.id);
            setMessages(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            from: chatAdminId, //user.id,
            to: "",
            text: newMessage,
            conversationId: currentChat.id,
            is_bot: false
        };

        try {
            const res = await $host.post("api/messages", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);


    //console.log("friendId ", friendId)
 
    return (
        <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
            <Suspense fallback={<CSpinner color="primary" />}>
                <div className='messenger'>
                    <div className='chatMenu'>
                        <div className='chatMenuWrapper'>
                            <input placeholder="Поиск пользователей" className="chatMenuInput" />

                            {conversations.map((c, index) => (
                            <div className='userchat' key={`${c}+${index}`} onClick={() => setCurrentChat(c)}>
                                <Conversation conversation={c} currentUser={chatAdminId}/>
                            </div>
                            ))}

                        </div> 
                    </div>

                    <div className='chatBox'>
                        <div className='chatBoxWrapper'>
                            {
                                currentChat ?
                            <>
                            <div className="chatBoxTop">
                                {messages.map((m, index) => (
                                    <div ref={scrollRef} key={`${m}+${index}`}>
                                    <Message message={m} own={m.from === chatAdminId} />
                                    </div>
                                ))}
                            </div>
                            <div className="chatBoxBottom">
                                <textarea
                                    className="chatMessageInput"
                                    placeholder="Напишите что-нибудь..."
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    value={newMessage}
                                ></textarea>
                                <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                            </div></> : <span className='noConversationText'>Чтобы начать беседу, нажмите на чат.</span>}
                        </div>
                    </div>
                    <div className='chatOnline'>
                        <div className='chatOnlineWrapper'>
                            <ChatOnline />
                            <ChatOnline />
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
        <AppFooter />
      </div>
    </div>
        
    )
}