import React from 'react';
import axios from 'axios';
import './holder.css';
const Post = (props)=>{
 return (
                    <div className="part" onClick={props.comment} id={props.detail.postId}>
                        <ul className="title">
                            <li><h5>{props.detail.title}</h5></li>
                            <li>{props.detail.body}</li>
                        </ul>
                    </div>
             );

}
    
export default Post;