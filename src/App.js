import React from 'react';
import Home from "./Home";
import Portfolio from "./Portfolio";
import logo from './assets/logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <i class="fa fa-home fa-fw" aria-hidden="true"></i> Home
        </Link>
        <Link to="/portfolio">
          <i class="fa fa-book fa-fw" aria-hidden="true"></i> Portfolio
        </Link>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio/" component={Portfolio} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
