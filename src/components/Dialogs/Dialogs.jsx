import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogPage.messages.map(m => <Message message={m.message}/>);
    let newMessageElement = React.createRef()
    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }
    let onDialogChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.enterMessages}>
                <textarea onChange={onDialogChange} ref={newMessageElement} value={props.dialogPage.newMessageText}/>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    );
}
export default Dialogs