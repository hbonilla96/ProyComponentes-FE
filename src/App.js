import React from 'react';
// import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './containers/Login';
import Home from './containers/Main';
import NotFound from './containers/NotFound';
import Profile from './containers/Profile';
import SignUp from './containers/SignUp';
import Boards from './containers/Boards';
import './App.css';

// const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/boards" exact component={Boards} />
          <Route path="/home" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/signup" exact component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
