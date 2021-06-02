import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { addPost } from './Redux/state';




export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App posts={state.profile.posts}
                messagesData={state.dialogs.messagesData}
                dialogsData={state.dialogs.dialogsData}
                addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};



