const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}
export default dialogsReducer
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text,}
}