import React from 'react';
import Mypost from './Mypost.js';
import Comments from './commets';
import AddPost from './addpost';
import Postupdate from './postupdate';
import './holder.css';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom';
class App extends React.Component {
    render() {
        return (
            <Router>  {/*routing to different pages using link and route*/}
                <div  className="main">
                        <nav className="navs">
                            <Link to="/newpost" className="posthead">Newpost</Link>
                        </nav>  
                         
                    <Route path="/" exact component={Mypost}/>
                    <Route path="/newpost" exact component={AddPost}/>
                    <Route path="/commets/:id" exact component={Comments}/>
                    <Route path="/update/:id" exact component={Postupdate}/>
              </div>
          </Router>
        );
    }
}
export default App;