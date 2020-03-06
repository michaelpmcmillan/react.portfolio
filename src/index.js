import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascript/App';
import * as serviceWorker from './javascript/serviceWorker';
import './styles/index.css'

ReactDOM.render(
    <App />, 
    document.getElementById('root'));

serviceWorker.register();
