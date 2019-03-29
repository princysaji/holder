import React, { Component } from 'react';
import axios from 'axios';
import './holder.css';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom';
class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    //new post add=> set uerid 1 and 
    addpost = () => {

        var title = this.refs.title.value;
        var body = this.refs.body.value;

        axios.post('https://jsonplaceholder.typicode.com/posts', {
                    userId: '1',
                    title: title,
                    body: body,
            })

            .then(function(response) {
                alert("Sucessfully created");
    
                if (response.data.message) { 
                	alert(response.data.message); 
                }
                if (response.data.errorMsg) { 
                	alert(response.data.errorMsg); 
                }

            }).catch(function(error) {console.log(error);});

    }

render() {
{/*add new post page*/}
        return (
            <div>
                <div className="postform">
                 	<table>
        	         	<tbody>
        	         		<tr>
        	         			<td>Title</td>
        	         			<td><input type="text" ref="title" /></td>
        	         		</tr>
        	         		<tr>
        	         			<td>Post content</td>
        	         			<td><input type="text" ref="body" /></td>
        	         		</tr>
        	         		<tr>      			
        	         			<td><button onClick={this.addpost}>Add</button></td>
        	         		</tr>
        	         	</tbody>	
                 	</table>
                </div>
            </div>
        );
    }
}

export default AddPost;