import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


   

let store = {
    _state : {
        profile: {
            posts: [
                { id: 0, postTxt: "123" },
                { id: 1, postTxt: "456" },
                { id: 2, postTxt: "788" },
                { id: 3, postTxt: "999" },
            ],
            newPostText: 'Введите текст...'
        },
        dialogs: {
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
    },
    _callSubscriber  () {
        console.log('state changed')
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._callScriber(this._state)
       
    }
}








export default store;