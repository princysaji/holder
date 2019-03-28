import React from 'react';
import Mypost from './Mypost.js';
import Comments from './commets';
import AddPost from './addpost';
import './holder.css';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom';
class App extends React.Component {
    render() {
        return (
            <Router>
                <div  className="main">
                <nav className="navs">
                            <Link to="/newpost">Newpost</Link>
                        </nav>  
                         
                    <Route path="/" exact component={Mypost}/>
                    <Route path="/newpost" exact component={AddPost}/>
                    <Route path="/commets/:id" exact component={Comments}/>
              </div>
          </Router>
        );
    }
}
export default App;