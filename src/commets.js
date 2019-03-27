import React from 'react';
import axios from 'axios';
import Mypost from './Mypost.js'
import Post from './Post.js';
import './holder.css';

class Comments extends React.Component {
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
    render() {

        return (

            <div className="main">
                <button onClick={this.singlepost} className="mypost">My Post</button>
           
            {this.state.pdata.map(item=>
                 <Post detail={item}/>
         )}
          
          </div>

        );
    }
}
export default Comments;