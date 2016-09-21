import React from "react";
import {render} from 'react-dom';
import UserDataGrid from './user/UserDataPage'
const App = (
  <UserDataGrid/>
);

render(App, document.getElementsByTagName('main')[0]);