import React from 'react';
import axios from 'axios';
import './holder.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')

            .then(hit => {
                const data = hit.data;
                this.setState({ data });
            })
    }
    singlepost = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')

            .then(hit => {
                const data = hit.data;
                this.setState({ data });
            })
            
    }

    render() {

        return (

            <div className="main">
           <button onClick={this.singlepost}>CLICK ME</button>
           
              {this.state.data.map(item=>
                <div className="part">
                <ul className="title">
                <li><h5>{item.title}</h5></li>
                <li>{item.body}</li>
                </ul>
                </div>

             )}
          
          
          </div>

        );
    }


}
export default App;