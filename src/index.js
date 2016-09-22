import React from "react";
import {render} from 'react-dom';
require('../style/main.scss');
import App from './main/App';


render(React.createElement(App), document.getElementsByTagName('main')[0]);