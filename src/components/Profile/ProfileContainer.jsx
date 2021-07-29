import React from 'react';
import { addPostActionCreate, clearActionCreate, updateNewPostActionCreate } from '../../Redux/profile-reducer'
import StoreContext from '../../StoreContext';
import Profile from './Profile';





const ProfileContainer = (props) => {
    

    return <StoreContext.Consumer>{
            (store)=>{
                let state = store.getState()

                let addPost = (text) =>{
                    store.dispatch(updateNewPostActionCreate(text));
                    store.dispatch(addPostActionCreate());
                    store.dispatch(clearActionCreate())
                }

                let postChange = (text) =>{
                    let action = updateNewPostActionCreate(text)
                    store.dispatch(action)
                }

                return <Profile 
                    addPost={addPost} 
                    updateNewPostText={postChange} 
                    posts={state.profile.posts}
                    newPostText={state.profile.newPostText}
                    />}
        }</StoreContext.Consumer>
    
};
export default ProfileContainer;