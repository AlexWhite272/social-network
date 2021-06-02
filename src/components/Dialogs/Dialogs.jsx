import React from 'react';
import './Dialogs.css';
import DialogsItem from './DialogsItem/DialogsItem.jsx';
import Mes from './Messages/Mes';


const Dialogs = (props) => { 
    let messagesElements = props.messagesData.map( message =>  <Mes id={message.id} messages={message.messages} />);  
    let dialogsElements = props.dialogsData.map( dialog => <DialogsItem id={dialog.id} name={dialog.name} />);
 
    {/*[<Mes id={messagesData[0].id} messages={messagesData[0].messages}/>,     <Mes id={messagesData[1].id} messages = {messagesData[1].messages}/>,       <Mes id={messagesData[2].id} messages = {messagesData[2].messages}/>,       <Mes id={messagesData[3].id} messages = {messagesData[3].messages}/>  ];*/ }

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
            <div className="dialogs__messages">
                {messagesElements}
                {/*<Mes id = {messagesData[0].id} messages = {messagesData[0].messages}/>*/}
                {/*<Mes id = {messagesData[1].id} messages = {messagesData[1].messages}/>*/}
                {/*<Mes id = {messagesData[2].id} messages = {messagesData[2].messages}/>*/}
                {/*<Mes id = {messagesData[3].id} messages = {messagesData[3].messages}/>*/}
            </div>
        </div>
    );
};

export default Dialogs;