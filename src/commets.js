import React from 'react';
import axios from 'axios';
import Mypost from './Mypost.js'
import Post from './Post.js';
import './holder.css';

class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cdata: []
        };
    }
 componentDidMount() {
                axios.get("https://jsonplaceholder.typicode.com/comments?postId="+this.props.match.params.id)

            .then(hit => {
                this.setState({ cdata:hit.data }); 
            })  .catch(error => console.log("error", error));     
    }
    render() {
        
        return (
            <div>
                <h1>Comments</h1>
                {this.state.cdata.map(comments=>
                    <div>
                    <div className="comment"> 
                   <h2> Name :{comments.name}</h2>
                   <p> Mailid  :{comments.email}</p>
                   <p> Comments :{comments.body}</p>
                    </div>
                </div>
                    
                    )       
                }
              </div>

        );
    }
}
export default Comments;