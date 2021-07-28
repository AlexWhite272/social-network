import React from 'react';
import {  SendMes, updateNewMessagesActionCreate } from '../../Redux/dialogs-reducer';
import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem.jsx';
import Mes from './Messages/Mes';


const Dialogs = (props) => {
    let messagesElements = props.messagesData.map(message => <Mes id={message.id} messages={message.messages} />);
    let dialogsElements = props.dialogsData.map(dialog => <DialogsItem id={dialog.id} name={dialog.name} />);
    let newMessagesText = props.newMessagesText;

    {/*[<Mes id={messagesData[0].id} messages={messagesData[0].messages}/>,     <Mes id={messagesData[1].id} messages = {messagesData[1].messages}/>,       <Mes id={messagesData[2].id} messages = {messagesData[2].messages}/>,       <Mes id={messagesData[3].id} messages = {messagesData[3].messages}/>  ];*/ }

    // let newMessagesElement = React.createRef();

//     let addMessages = () =>{
//         let text = newPostElement.current.value;
//         if(text!==""){
//             props.dispatch(addPostActionCreate());
//             props.dispatch(updateNewPostActionCreate(text));
//             props.dispatch(clearActionCreate())
//     }
// }

// let onMessagesChange = ()=>{
//     let text = newMessagesElement.current.value;
//     props.dispatch(updateNewMessagesActionCreate(text));
    
// }


    const onNewMessageChange = (event)=>{
        let text = event.target.value;
        props.dispatch(updateNewMessagesActionCreate(text))
    }
    const onSendMes = (event)=>{
     
        // if(text!==""){
            props.dispatch(SendMes(event.target.value))
          
          
        // }
    }

    return (
        <div className='dialogs'>
            <div className="dialogs__people">
                {dialogsElements}
                {/*<DialogsItem id={dialogsData[0].id} name={dialogsData[0].name}/>*/}
                {/*<DialogsItem id={dialogsData[1].id} name={dialogsData[1].name}/> */}
                {/*<DialogsItem id={dialogsData[2].id} name={dialogsData[2].name}/> */}
                {/*<DialogsItem id={dialogsData[3].id} name={dialogsData[3].name}/>  */}
                {/*<DialogsItem id={dialogsData[4].id} name={dialogsData[4].name}/> */}
            </div>
            <div className="dialogs__mesWindow">
                <div className="dialogs__messages">
                    {messagesElements}
                    {/*<Mes id = {messagesData[0].id} messages = {messagesData[0].messages}/>*/}
                    {/*<Mes id = {messagesData[1].id} messages = {messagesData[1].messages}/>*/}
                    {/*<Mes id = {messagesData[2].id} messages = {messagesData[2].messages}/>*/}
                    {/*<Mes id = {messagesData[3].id} messages = {messagesData[3].messages}/>*/}

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