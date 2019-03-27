import React from 'react';
import axios from 'axios';
import Mypost from './Mypost.js'
import Post from './Post'
import './holder.css';

class App extends React.Component {
    render() {
        return (
            <div>
            <Mypost/>
          </div>
        );
    }
}
export default App;