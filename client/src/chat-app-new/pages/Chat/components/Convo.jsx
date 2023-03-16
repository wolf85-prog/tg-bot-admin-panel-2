import Icon from "./../../../components/Icon";
import React, { useContext, useState } from "react";
import media from "./../../../assets/images/profile-picture-boy-1.jpeg";
import formatTime from "./../../../utils/formatTime";
import OptionsBtn from "./../../../components/OptionsButton";
import { AccountContext } from './../../../context/AccountProvider';
import { $host } from './../../../../http/index'
import { delMessage } from "src/http/chatAPI";

const Convo = ({ lastMsgRef, messages: allMessages }) => {
	const { person } = useContext(AccountContext);
	const dates = Object.keys(allMessages);  //['01/01/2023', 'Сегодня']
	const chatAdminId = process.env.REACT_APP_CHAT_ADMIN_ID 
	const token = process.env.REACT_APP_TELEGRAM_API_TOKEN
	const [clickContent, setClickContent] = useState(false);

	const optViewRef = React.createRef(null);
	const content = React.createRef(null);

	const onSelected = (index, id) => {
		switch(index) {
			case 0: 
				//alert("Удалить сообщение")
				const url_del_msg = `https://api.telegram.org/bot${token}/deleteMessage?chat_id=${person.id}&message_id=${id}`
				console.log(url_del_msg)
				const delToTelegram = $host.get(url_del_msg);
		
				//Выводим сообщение об успешной отправке
				if (delToTelegram) {
					console.log('Ваше сообщение удалено! ', delToTelegram.result);

					//удалить сообщение в базе данных
					delMessage(id)

					//удалить сообщение через сокет
				}           
				//А здесь сообщение об ошибке при отправке
				else {
					console.log('Что-то пошло не так. Попробуйте ещё раз.');
				}

				break

			default:
				console.log("В разработке")
				break
		  }
	};

	return dates.map((date, dateIndex) => {
		const messages = allMessages[date];
		//console.log("allMessages: ", messages);
		return (
			<div key={dateIndex}>
				<div className="chat__date-wrapper">
					<span className="chat__date"> {date}</span>
				</div>
				{dateIndex === 0 && (
					<p className="chat__encryption-msg">
						<Icon id="lock" className="chat__encryption-icon" />
						Сообщения шифруются сквозным шифрованием. Никто за пределами этого чата не может читать или слушать их
					</p>
				)}
				<div className="chat__msg-group" >
					{messages.map((message, msgIndex) => {
						const assignRef = () =>
							dateIndex === dates.length - 1 && msgIndex === messages.length - 1
								? lastMsgRef
								: undefined;
						return (
							<>
								{message.image ? (
									<div
										className={`chat__msg chat__img-wrapper ${
											message.sender !== chatAdminId ? "chat__msg--rxd" : "chat__msg--sent"
										}`}
										ref={assignRef()}
									>
										<img src={media} alt="" className="chat__img" />
										<span className="chat__msg-footer">
											<span>{formatTime(message.time)}</span>
											{!message.sender && (
												<Icon
													id={
														message?.status === "sent"
															? "singleTick"
															: "doubleTick"
													}
													aria-label={message?.status}
													className={`chat__msg-status-icon ${
														message?.status === "read"
															? "chat__msg-status-icon--blue"
															: ""
													}`}
												/>
											)}
										</span>

										<button
											aria-label="Message options"
											className="chat__msg-options"
										>
											<Icon id="downArrow" className="chat__msg-options-icon" />
										</button>
									</div>
								) : message.sender !== chatAdminId ? (
									<p className="chat__msg chat__msg--rxd" ref={assignRef()}>
										<span>
											{message.content?.includes('https://') 
											? <a className="chat__href" href={message.content} target="_blank" rel="noreferrer">{message.content}</a> 
											: message.content}
										</span>
										<span className="chat__msg-filler"> </span>
										<span className="chat__msg-footer">
											{formatTime(message.time)}
										</span>
										<button
											aria-label="Message options"
											className="chat__msg-options"
										>
											<Icon id="downArrow" className="chat__msg-options-icon" />
										</button>
									</p>
								) : (
									<p className="chat__msg chat__msg--sent" ref={assignRef()}>
										<span>
											{message.content?.includes('https://') 
											? <a className="chat__href" href={message.content} target="_blank" rel="noreferrer">{message.content}</a> 
											: message.content}
										</span>
										<span className="chat__msg-filler"> </span>
										<span className="chat__msg-footer">
											<span> {formatTime(message.time)} </span>
											<Icon
												id={
													message?.status === "sent"
														? "singleTick"
														: "doubleTick"
												}
												aria-label={message?.status}
												className={`chat__msg-status-icon ${
													message?.status === "read"
														? "chat__msg-status-icon--blue"
														: ""
												}`}
											/>
										</span>
										{/* <button
											aria-label="Message options"
											className="chat__msg-options"
										>
											<Icon id="downArrow" className="chat__msg-options-icon" />											
										</button> */}
										
										<OptionsBtn
											msgId={message.id}
											className="chat__msg-options"
											ariaLabel="Menu message options"
											iconId="downArrow"
											iconClassName="chat__msg-options-icon"
											onSelected={onSelected}
											showPressed={false}
											options={[
												"Удалить сообщение",
											]}
										/>
									</p>
								)}
							</>
						);
					})}
				</div>
			</div>
		);
	});
};

export default Convo;
