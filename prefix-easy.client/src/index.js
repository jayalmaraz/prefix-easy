import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css/dist/css/materialize.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
