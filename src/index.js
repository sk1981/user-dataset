import React from "react";
import {render} from 'react-dom';
import UserDataGrid from './user/UserDataPage'
require('../style/main.scss');

const App = (
  <UserDataGrid/>
);

render(App, document.getElementsByTagName('main')[0]);