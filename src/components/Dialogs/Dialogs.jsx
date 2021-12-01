import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsData, messagesData} from "../../api/data";

const Dialogs = (props) => {

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}
export default Dialogs