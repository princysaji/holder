import React from 'react';
import axios from 'axios';
import Post from './Post.js';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom';
class Mypost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pdata: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')

            .then(hit => {
                this.setState({ pdata: hit.data });
            }).catch(error => console.log("error", error));
    }
    
    singlepost = () => {
        axios.get('http://jsonplaceholder.typicode.com/posts?userId=3')

            .then(hit => {
                this.setState({ pdata: hit.data });
            })
            .catch(error => console.log("error", error));

    }
   delete = (props) =>{
    axios.get('http://jsonplaceholder.typicode.com/posts')

            .then(hit => {
                this.setState({ pdata: hit.data });
            }).catch(error => console.log("error", error));
           
    }

    render() {

        return (
            <div>
            <div >
                <h2>Posts</h2>  
                <button onClick={this.singlepost} className="mypost">My Post</button>
              
            {this.state.pdata.map(item=>
                 <Post detail={item} delprocess={this.delete}/>
         )}

          </div>
          </div>

        );
    }
}
export default Mypost;