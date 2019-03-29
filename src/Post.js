//single post view
import React from 'react';
import axios from 'axios';
import './holder.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
const Post = (props) => {
    return (
        <div className="part" >
            {/*new comments page link => when post will click then view their comments*/}
                <Link to={'/commets/'+props.detail.id}>   
                        <ul className="title textdeco">
                            <li><h5>{props.detail.title}</h5></li>
                            <li>{props.detail.body}</li>
                        </ul>
                </Link>
                    {/*delete button, the id will pass to mypost page using delprocess variable*/}
                    <button onClick={()=>props.delprocess(props.detail.id)}>Delete</button>
                {/*update button, id will pass postupdate page*/}
                    <button  title={props.detail.title} body={props.detail.body}>
                        <Link to={'/update/'+props.detail.id} >Update
                        </Link>
                    </button>
        </div>
    );
}

export default Post;