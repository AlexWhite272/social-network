const  UPDATE_NEW_MES_TEXT = 'UPDATE-NEW-MES-TEXT';
const SEND_MES = "SEND-MES";

let initialState = {
    dialogsData: [
        { id: 1, name: 'Leonid', },
        { id: 2, name: 'Maks', },
        { id: 3, name: 'Danya', },
        { id: 4, name: 'Uliyana', },
        { id: 5, name: 'Vano' },
    ],
    messagesData: [
        { id: 1, messages: "Hi" },
        { id: 2, messages: "How are you" },
        { id: 3, messages: "Wow, i am fine. Thank you" },
        { id: 4, messages: "That is good" },
    ],
    newMessagesText : 'Enter your message...',
}

const dialogsReducer = (state=initialState, action) =>{ 
    switch (action.type){
        case  UPDATE_NEW_MES_TEXT:
            state.newMessagesText = action.newText;
            return state;
        case SEND_MES:
            // let lengthIdMes = Object.keys(this._state.dialogs.newMessages).length;
            
            let newMes = {
                id: 5,
                messages: state.newMessagesText,
            }
            state.newMessagesText = ""
            state.messagesData.push(newMes); 
            return state;
        default: 
            return state;
    }
}

export const updateNewMessagesActionCreate = (text) => {
    return{
        type : UPDATE_NEW_MES_TEXT,
        newText : text,
    }
}

export const SendMes = () =>{
    return{
        type: SEND_MES

    }
}

export default  dialogsReducer;