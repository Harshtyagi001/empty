import React from "react";

export default function TheirMessageForm({lastMessage,message}){
  const isFirstMessagebyUser=!lastMessage||lastMessage.sender.username!==message.sender.username;

  return (
    <div className="mesage-row">
      {isFirstMessagebyUser&&(
        <div 
          className="message-avatar"
          style={{backgroundImage:`url(${message?.sender?.avatar})`}}
        />
      )}
        {message?.attachments?.length>0?
      (
      <img src={message.attachments[0].file}
        alt='message-attachment'
        className="message-image"
        style={{marginLeft:isFirstMessagebyUser?'4px':'48px'}}
      />
    ):(
      <div className="message" style={{float:'left',marginRight:'18px',color:'white',background:'#CABCDC'}}>
      {message.text}
    </div>
    )
      }
    </div>
  )
}
