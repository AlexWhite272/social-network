const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const CLEAR_ACTION_CREATE = 'CLEARE-ACTIO-CREATE';

let initialState = {
    posts: [
        { id: 0, postTxt: "123" },
        { id: 1, postTxt: "456" },
        { id: 2, postTxt: "788" },
        { id: 3, postTxt: "999" },
    ],
    newPostText: 'Введите текст...'
}

const profileReducer = (state = initialState, action) =>{ 
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                postTxt: state.newPostText,
            }
            state.posts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case CLEAR_ACTION_CREATE:
            state.newPostText = '';
            return state;
        default: 
            return state;        
    };  
}
 
export const updateNewPostActionCreate = (text) =>{
    return{
        type : UPDATE_NEW_POST_TEXT,
        newText : text,
    }
}

export const addPostActionCreate  = () =>  {
    return {type:ADD_POST}
};

export const clearActionCreate = () => {
return{
    type:CLEAR_ACTION_CREATE,
}
}

export default  profileReducer;