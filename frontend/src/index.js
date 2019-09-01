import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './pages/main-page/main-page'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainPage />, document.getElementById('root'));

serviceWorker.unregister();
