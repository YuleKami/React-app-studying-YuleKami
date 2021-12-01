import s from './Dialogs.module.css'

const Dialogs = (props) => {

    let dialogsData = [
        {id: '1', name: 'YuleKami'},
        {id: '2', name: 'Portunis'},
        {id: '3', name: 'Vasily'},
        {id: '4', name: 'Dthv'},
        {id: '5', name: 'Vertuass'},
        {id: '6', name: 'Gremna'},
    ]

    let messagesData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How about play doto?'},
        {id: '3', message: 'Haha react is good)'},
        {id: '4', message: 'Oh no, that not good('},
        {id: '5', message: 'Kek'},
        {id: '6', message: 'Kyk'},
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}
export default Dialogs