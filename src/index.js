import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from "react-device-detect";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let root = document.getElementById('root');
ReactDOM.render(<App />, root);

if (isMobile) {
    root.classList.add('on-mobile');
} else {
    root.classList.add('on-desktop');
}

serviceWorker.unregister();
