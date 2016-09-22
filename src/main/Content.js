import React from "react";
import Router from 'react-router-component';
const Locations = Router.Locations;
const Location = Router.Location;
import UserDataPage from '../user/UserDataPage'

const Content = React.createClass({
  render() {
    return (
      <Locations className="content-data" hash>
        <Location path="/" {...this.props} handler={UserDataPage} />
        <Location path="/traits/:trait"  {...this.props} handler={UserDataPage} />
      </Locations>
    );
  }
});


export default Content;