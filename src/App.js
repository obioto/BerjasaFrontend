import React, { Component } from 'react';
import AboutUs from "../js/view/AboutUs";
import {Route,Redirect,Router} from "react-router-dom";
import Header from 'view/Header';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
      </div>
    );
  }
}

export default App;
