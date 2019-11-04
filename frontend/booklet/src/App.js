import React, { Component } from 'react';
import "./App.css";

import Home from "./pages/Home";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/books/" component={Books} />
        <Route exact path="/books/:slug" component={SingleBook} />
        <Route component={Error}/>
      </Switch>
      </div>
     );
  }
}

export default App;
