import React from 'react';

import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem.jsx';
import Mes from './Messages/Mes';


const Dialogs = (props) => {
    let messagesElements = props.messagesData.map(message => <Mes id={message.id} messages={message.messages} />);
    let dialogsElements = props.dialogsData.map(dialog => <DialogsItem id={dialog.id} name={dialog.name} />);
    let newMessagesText = props.newMessagesText;



    const onNewMessageChange = (event)=>{
        let text = event.target.value;
        props.updateNewMessages(text)
    }
    const onSendMes = (event)=>{
     
        if(newMessagesText!=""){
            props.sendMes(event.target.value);
        }
    }

    return (
        <div className='dialogs'>
            <div className="dialogs__people">
                {dialogsElements}
              
            </div>
            <div className="dialogs__mesWindow">
                <div className="dialogs__messages">
                    {messagesElements}
                  

                </div>
                <div className='dialogs__input'>
                     <textarea className="dialogs__textarea"  onChange={onNewMessageChange}
                        value={props.newMessagesText} />
                    <button className="dialogs__sendMessage" onClick={onSendMes}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;