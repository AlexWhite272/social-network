import React from 'react';
import { addPostActionCreate, clearActionCreate, updateNewPostActionCreate } from '../../Redux/profile-reducer'
import Profile from './Profile';





const ProfileContainer = (props) => {
    let state = props.store.getState()


    let addPost = (text) =>{
            // let text = newPostElement.current.value;
            // if(text!==""){
                props.store.dispatch(updateNewPostActionCreate(text));
                props.store.dispatch(addPostActionCreate());
                props.store.dispatch(clearActionCreate())
        // }
    }

    let postChange = (text) =>{
        let action = updateNewPostActionCreate(text)
        props.store.dispatch(action)
    }

    return <Profile 
        addPost={addPost} 
        updateNewPostText={postChange} 
        posts={state.profile.posts}
        newPostText={state.profile.newPostText}
    />
    
};
export default ProfileContainer;