import React from 'react';
import ReactDOM from 'react-dom';
//react-router
import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
//importing pages 
import User from "./User"
import notFound from './notFound';
import visit from './visit';

//make a component for route
//Making Route for each pages <Route path="/" component={App} />
//exact helps in routing to find excat url
//Switch if no route found it will display default route
//Link as for routing - directly navigate to the directory
//we can separate the div of link in separate file and access route comp from another file
 
const routing = (
  <Router>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/user">User</Link></li>
      <li><Link to="/visit">Visit</Link></li>

    </ul>
  </div>
  <Switch>
  <Route exact path="/" component={App} />
  <Route path="/user" component={User} />
  <Route path="/notfound" component={notFound} />
  <Route path="/visit" component={visit} />
  <Route  component={notFound} />
  </Switch>
  </Router>
);


ReactDOM.render(
  routing,
  document.getElementById('root')
);
