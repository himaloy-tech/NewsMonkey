import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  let api_key = process.env.REACT_APP_API_KEY; /* enviroment variable coming from .env.local file "create react app environment variables"*/
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar category="general" />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
            <News api_key={api_key} setProgress={setProgress} key="general" pageSize={9} category="general" />
          </Route>
          <Route exact path="/business">
            <Navbar category="business" />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
            <News api_key={api_key} setProgress={setProgress} key="business" pageSize={9} category="business" />
          </Route>
          <Route exact path="/entertainment">
            <Navbar category="entertainment" />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
            <News api_key={api_key} setProgress={setProgress} key="entertainment" pageSize={9} category="entertainment" />
          </Route>
          <Route exact path="/health">
            <Navbar category="health" />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
            <News api_key={api_key} setProgress={setProgress} key="health" pageSize={9} category="health" />
          </Route>
          <Route exact path="/science">
            <Navbar category="science" />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
            <News api_key={api_key} setProgress={setProgress} key="science" pageSize={9} category="science" />
          </Route>
          <Route exact path="/sports">
            <Navbar category="sports" />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
            <News api_key={api_key} setProgress={setProgress} key="sports" pageSize={9} category="sports" />
          </Route>
          <Route exact path="/technology">
            <Navbar category="technology" />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
            <News api_key={api_key} setProgress={setProgress} key="technology" pageSize={9} category="technology" />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App