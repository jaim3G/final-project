import React, {useState} from 'react'
import {connect} from "react-redux"

import {userMessage, sendMessage} from '../../actions/watson'

const Chat = ({chat, userMessage, sendMessage }) => {
const [message, setMessage] = useState("")

const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if(code===13){
        console.log(message)
        userMessage(message)
        sendMessage(message)
        setMessage("")
    }
}


    return (
        
        <div className="chat">
            <h1>Lets chat!</h1>
            <div className="historyContainer">
            {chat.length === 0 ? "" : chat.map((msg) => <div className={msg.type}>{msg.message}</div>)}
            </div>
            <input id="chatBox" onChange={(e) => setMessage(e.target.value)} onKeyPress={handleClick} value={message}></input>

        </div>
    )
};
const mapStateToProps = (state) => ({
    chat: state.watson.messages,
})
export default connect( mapStateToProps, {userMessage, sendMessage})(Chat)