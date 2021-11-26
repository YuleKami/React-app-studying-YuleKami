import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='YuleKami' id='1'/>
                <DialogItem name='Portunis' id='2'/>
                <DialogItem name='Vasily' id='3'/>
                <DialogItem name='Dthv' id='4'/>
                <DialogItem name='Vertuass' id='5'/>
                <DialogItem name='Gremna' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How about play doto?'/>
                <Message message='Haha, really?'/>
            </div>
        </div>
    );
}
export default Dialogs