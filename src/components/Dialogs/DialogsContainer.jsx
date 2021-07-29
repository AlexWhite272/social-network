import React from 'react';
import {  SendMes, updateNewMessagesActionCreate } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
;



const DialogsContainer = (props) => {
    let state = props.store.getState()

    const updateNewMessages = (text)=>{ 
        props.store.dispatch(updateNewMessagesActionCreate(text))
    }
    const sendMes = (event)=>{
        
        props.store.dispatch(SendMes(event))
    }

    return  <Dialogs 
        updateNewMessages = {updateNewMessages}
        sendMes={sendMes}
        messagesData={state.dialogs.messagesData}
        dialogsData={state.dialogs.dialogsData}
        newMessagesText={state.dialogs.newMessagesText}
    />
    
};

export default DialogsContainer;