import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
                    <Post likecounts='15' message='Hi, how are you?'/>
                    <Post likecounts='20' message='It is my first post'/>
                </div>
            </div>
        </div>
    );
}
export default MyPosts