import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        <div className="post__postBlock">
            <div className="content__post">
                <img className="content__post-img" src={process.env.PUBLIC_URL + '/zkd.png'} />
                <p className="content__post-txt">{props.postTxt}</p>
            </div>
        </div>
    )
};

export default Post;