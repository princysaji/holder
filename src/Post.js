import React from 'react';
import axios from 'axios';
import './holder.css';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom';
const Post = (props)=>{
 return (

                

                    <div className="part" >
                        <Link to={'/commets/'+props.detail.id}>   
                        <ul className="title">
                            <li><h5>{props.detail.title}</h5></li>
                            <li>{props.detail.body}</li>
                        </ul>
                        </Link>
                        <button onClick={props.delprocess}>Delete</button>
                    </div>
                
             );

}
    
export default Post;