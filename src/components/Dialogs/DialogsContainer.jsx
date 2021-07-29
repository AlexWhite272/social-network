import React from 'react';
import {  SendMes, updateNewMessagesActionCreate } from '../../Redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';
;



const DialogsContainer = (props) => {
    
    return  (
        <StoreContext.Consumer>{
            (store)=>{
                let state = store.getState()

                const updateNewMessages = (text)=>{ 
                    store.dispatch(updateNewMessagesActionCreate(text))
                }
                const sendMes = (event)=>{
                    store.dispatch(SendMes(event))
                }

                return  <Dialogs 
                        updateNewMessages = {updateNewMessages}
                        sendMes={sendMes}
                        messagesData={state.dialogs.messagesData}
                        dialogsData={state.dialogs.dialogsData}
                        newMessagesText={state.dialogs.newMessagesText}
                    />}
            }</StoreContext.Consumer>
            
    )
    
};

export default DialogsContainer;