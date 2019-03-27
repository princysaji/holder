import React from 'react';
import axios from 'axios';
import Post from './Post.js';

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

viewComment=(e)=>{
    let id=e.target.id;
    console.log({id});

}


    render() {

        return (

            <div className="main">
                <button onClick={this.singlepost} className="mypost">My Post</button>
           
            {this.state.pdata.map(item=>
                 <Post detail={item} comment={this.viewComment}/>
         )}
          
          </div>

        );
    }
}
export default Mypost;