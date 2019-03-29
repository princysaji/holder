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
//all post view data will get from api
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')

            .then(hit => {
                this.setState({ pdata: hit.data });
            }).catch(error => console.log("error", error));
    }
    
    //single post will view using userid, default userid set
    singlepost = () => {
        axios.get('http://jsonplaceholder.typicode.com/posts?userId=3')

            .then(hit => {
                this.setState({ pdata: hit.data });
            })
            .catch(error => console.log("error", error));
    }

    //delete the content , it's temperory, data will hide
   delete = (id) =>{
             axios.get('http://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)

            .then(hit => {
                this.setState({ pdata: hit.data });
                 var ddata = this.state.pdata;
                 console.log(ddata);
            }).catch(error => console.log("error", error));
    }
   
    render() {

        return (
            <div>
                <div >
                    <h2 >Posts</h2>  
                {/*single post view using button*/}
                        <button onClick={this.singlepost} className="mypost">My Post</button>
                  {/*delete button and my post view using map */}
                    {this.state.pdata.map(item=>
                         <Post detail={item} delprocess={this.delete} />
                    )}
              </div>
          </div>

        );
    }
}
export default Mypost;