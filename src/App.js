import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { AddPost } from './Redux/state';


function App(props) {
    return (<BrowserRouter >
        <div className="App" >
            <Header />
            <div className="appBody">
                <div className="appBody__nav">
                    <Nav/>
                </div>
                <div className="content" >
                    <Route path='/profile' render={() => <Profile   posts={props.posts} 
                                                                    addPost={props.addPost}/>} />
                    <Route path='/dialogs' render={() => <Dialogs   messagesData={props.messagesData} 
                                                                    dialogsData={props.dialogsData}
                                                                    
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