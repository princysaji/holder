import React from 'react';
import Mypost from './Mypost.js';
import AddPost from './addpost';
import axios from 'axios';
import Post from './Post.js';
import './holder.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
{/*home pages of post*/}
class Postupdate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            udata: []
        };
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
    {/*all post view using componentdidmount*/}
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)

            .then(hit => {
                    this.setState({ udata: hit.data });
                    this.refs.title.value = this.state.udata.title;
                    this.refs.body.value = this.state.udata.body;
            }).catch(error => console.log("error", error));

    }
      //update each post
    update = () => {
        axios.put("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id, {
                title: this.refs.title.value,
                body: this.refs.body.value,
                userId: 3
            })
            .then(response => {
                alert("updated");
                if (response.data.message) {
                    alert(response.data.message);
                }
                if (response.data.errorMsg) {
                    alert(response.data.errorMsg);
                }

            }).catch(function(error) {console.log(error);})

    }
    render() {
        //update the post form 
        return (
            <div>
                <div className="postform">
                    <table>
                        <tbody>
                            <tr>
                                <td>Title</td>
                                <td>
                                    <input type="text" ref="title" />
                                </td>
                            </tr>
                            <tr>
                                <td>Post content</td>
                                <td>
                                    <textarea ref="body" ></textarea>
                                </td>
                            </tr>
                            <tr>                
                                <td><button onClick={this.update}>Update</button></td>
                            </tr>
                        </tbody>   
                    </table>
                </div>
            </div>

        );
    }
}
export default Postupdate;