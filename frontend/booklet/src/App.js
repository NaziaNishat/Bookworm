import React, { Component } from 'react';
import "./App.css";

import Home from "./pages/Home";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar"
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Share from "./pages/Share";
import Sell from "./pages/Sell"
import BooksDescription from "./pages/BooksDescription"
import MyBooks from "./pages/MyBooks";
import profile from "./pages/profile";
class App extends Component {
  render() {
    return (
      <div>

      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/books/" component={Books} />
        {/*<Route exact path="/books/:slug" component={SingleBook} />*/}
        <Route exact path="/books/:id" component={BooksDescription}/>
        <Route exact path="/signUp/" component={SignUp} />
        <Route exact path="/signIn/" component={SignIn} />
        <Route exact path="/share/" component={Share} />
        <Route exact path="/sell/" component={Sell} />
        <Route exact path="/mybooks/" component={MyBooks} />
        <Route exact path="/profile/" component={profile} />
        <Route component={Error}/>
      </Switch>
      </div>
     );
  }
}

export default App;
