import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../api/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);

    let addMessage = () => {
        props.addMessage()
    }
    let onDialogChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageTextActionCreator(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.enterMessages}>
                    <div>
                        <textarea onChange={onDialogChange}
                                  value={props.dialogsPage.newMessageText}
                                  placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs