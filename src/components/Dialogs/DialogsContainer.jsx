import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../api/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        let action = addMessageActionCreator()
        props.store.dispatch(action);
    }
    let onDialogChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action);
    }
    return <Dialogs updateNewMessageTextActionCreator={onDialogChange} addMessage={addMessage} dialogsPage={state}/>
}
export default DialogsContainer