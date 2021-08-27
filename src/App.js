import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar category="general" />
              <News key="general" pageSize={9} category="general" />
            </Route>
            <Route exact path="/business">
              <Navbar category="business" />
              <News key="business" pageSize={9} category="business" />
            </Route>
            <Route exact path="/entertainment">
              <Navbar category="entertainment" />
              <News key="entertainment" pageSize={9} category="entertainment" />
            </Route>
            <Route exact path="/health">
              <Navbar category="health" />
              <News key="health" pageSize={9} category="health" />
            </Route>
            <Route exact path="/science">
              <Navbar category="science" />
              <News key="science" pageSize={9} category="science" />
            </Route>
            <Route exact path="/sports">
              <Navbar category="sports" />
              <News key="sports" pageSize={9} category="sports" />
            </Route>
            <Route exact path="/technology">
              <Navbar category="technology" />
              <News key="technology" pageSize={9} category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}