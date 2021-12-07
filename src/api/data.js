const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', likecounts: 10,},
                {id: '1', message: "Kyk", likecounts: 20},
                {id: '1', message: "Kek", likecounts: 30},
                {id: '1', message: "It's my first post!", likecounts: 40},
            ],
            newPostText: 'NewPost',
        },
        dialogsPage: {
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How about play doto?'},
                {id: '3', message: 'Haha react is good)'},
                {id: '4', message: 'Oh no, that not good('},
                {id: '5', message: 'Kek'},
                {id: '6', message: 'Kyk'},
            ],
            newMessageText: 'NewMessage',
            dialogs: [
                {id: '1', name: 'YuleKami'},
                {id: '2', name: 'Portunis'},
                {id: '3', name: 'Vasily'},
                {id: '4', name: 'Dthv'},
                {id: '5', name: 'Vertuass'},
                {id: '6', name: 'Gremna'},
            ],
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likecounts: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text,}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text,}
}

export default store;

window.store = store;