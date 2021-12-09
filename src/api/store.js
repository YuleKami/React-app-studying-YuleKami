import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
    },
}

export default store;

window.store = store;