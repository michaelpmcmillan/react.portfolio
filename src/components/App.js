import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./home-component/Home";
import Header from "./header-component/Header";
import Footer from "./footer-component/Footer";
import Portfolio from "./portfolio-component/Portfolio";
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/React">
      <div className="app">
        <link 
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" 
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous">
        </link>

        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
