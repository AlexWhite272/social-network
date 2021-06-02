import React from 'react';
import './Profile.css'
import Post from './MyPost/Post/Post'

const Profile = (props) => {

    let postElements = props.posts.map(txt => <Post id={txt.id} postTxt={txt.postTxt}  />)
    
    let newPostElement = React.createRef();

    let addpost = () =>{
            let text = newPostElement.current.value;
            props.addPost(text);
            newPostElement.current.value = '';
        
    }

    return (
        <div className='profile'>
            <div className="profile__header">
                <div className='profile__img'>
                    <img src={process.env.PUBLIC_URL + '/zkd.png'} alt='images' />
                </div>
                <div className="profile__button">
                    <div className="profile__addPost">
                        <textarea ref={newPostElement} className="profile__fieldAddPost"></textarea>
                        <button onClick={addpost} className="profile__butAddPost">Add post</button>
                    </div>
                    <button className="profile__sendmessage">Send message</button>
                    
                </div>
            </div>
            <div className="profile__body">
                <div className="profile__wall">
                    
                    {postElements}

                </div>

                <div className="profile__info">
                    <div className="profile__skils">
                        Skils and head
                    </div>
                    <div className="profile__newfreind">
                        Profile new freind
                    </div>
                    <div className="profile__statistic">
                        Statistic
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Profile;