import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png '/>
            {props.message}
            <div>
                <span>like </span> {props.likecounts}
            </div>
        </div>
    );
}
export default Post