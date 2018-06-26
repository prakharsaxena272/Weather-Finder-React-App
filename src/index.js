import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// it tells to render App to element div root which is there in index.html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
