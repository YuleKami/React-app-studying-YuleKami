let store = {
    state: {
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
    rerenderEntireTree() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: state.profilePage.newPostText,
            likecounts: 0,
        };

        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(state);
    },
    updateNewPostText(newText) {
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    },
    addMessage() {
        let newMessage = {
            id: 7,
            message: state.dialogsPage.newMessageText,
        };

        state.dialogsPage.messages.push(newMessage);
        state.dialogsPage.newMessageText = '';
        rerenderEntireTree(state);
    },
    subscribe(observer) {
        rerenderEntireTree = observer;
    },
    updateNewMessageText(newText) {
        state.dialogsPage.newMessageText = newText;
        rerenderEntireTree(state);
    },
}

export default store;
window.store = store;