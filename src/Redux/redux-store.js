import { combineReducers, createStore } from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

let reducerBlock = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
});

let store = createStore(reducerBlock);

export default store;