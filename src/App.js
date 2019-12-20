import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Header from "./Header";
import Portfolio from "./Portfolio";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app page">
        
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio/" component={Portfolio} />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
