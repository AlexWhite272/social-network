import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom'





function App(props) {
    
    return (<BrowserRouter >
        <div className="App" >
            <Header />
            <div className="appBody">
                <div className="appBody__nav">
                    <Nav/>
                </div>
                <div className="content" >
                    <Route path='/profile' render={() => <Profile 
                        posts={props.state.profile.posts} 
                        newPostText={props.state.profile.newPostText}
                        dispatch = {props.dispatch}
                    />} />
                    <Route path='/dialogs' render={() => <Dialogs   
                        messagesData={props.state.dialogs.messagesData} 
                        dialogsData={props.state.dialogs.dialogsData}
                        newMessagesText={props.state.dialogs.newMessagesText}  
                        dispatch = {props.dispatch}                                          
                    />}/>
                    <Route path='/music' component={Music} />
                    <Route path='/news' component={News} />
                    <Route path='/settings' component={Settings} />
                </div >
            </div>
        </div>
    </BrowserRouter>
    );
};



export default App;