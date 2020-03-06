import React from 'react';
import { 
  BrowserRouter, 
  Switch, 
  Route
} from 'react-router-dom';
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Portfolio from "./portfolio/Portfolio";
import '../styles/App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <link 
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" 
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous">
        </link>

        <Header />

        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
 );
}
