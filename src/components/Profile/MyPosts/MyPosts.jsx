import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: '1', message: 'Hi, how are you?', likecounts: 10,},
        {id: '1', message: "Kyk", likecounts: 20},
        {id: '1', message: "Kek", likecounts: 30},
        {id: '1', message: "It's my first post!", likecounts: 40},
    ]
    let postsElements = posts.map(p => <Post likecounts={p.likecounts} message={p.message}/>);
    return (
        <div>
            <div className={s.postsBlock}>
                my posts
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}
export default MyPosts