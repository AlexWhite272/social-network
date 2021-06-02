import { rerenderEntireTree } from "../render";


let state = {
    profile: {
        posts: [
            { id: 0, postTxt: "123" },
            { id: 1, postTxt: "456" },
            { id: 2, postTxt: "788" },
            { id: 3, postTxt: "999" },
        ],
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
    }
}

export let addPost = (postMessages) => {
        let newPost = {
            id: 4,
            postTxt: postMessages,
        }
        state.profile.posts.push(newPost);
        rerenderEntireTree(state);
    }

export default state;