import React from 'react';
import AddUserPanel from './AddUserPanel'
import SortService from './service/SortService'

import DataGrid from '../datagrid/DataGrid'

const LoginForm = React.createClass({

  getInitialState() {
    return {
      users: [],
      sortField: undefined,
      sortDirection: undefined
    };
  },

  deleteUser(userId) {
    console.log(userId);
    const users = this.state.users.reduce((previous, user) => {
      if(user.id !== userId) {
        previous.push(user)
      }
      return previous;
    }, []);
    console.log(users);
    this.setState({users})
  },

  sortUsers(sortField) {
    const sortDirection = SortService.getSortDirection(sortField, this.state.sortField, this.state.sortDirection);
    const users = SortService.sortUsers(this.state.users, sortField, sortDirection);
    this.setState({users, sortDirection, sortField});
  },

  updateUserList(newUser) {
    console.log(newUser);
    // Based on deletion etc, id may not be unique, so ideally we should get max key and then increment
    newUser.id = this.state.users.length;
    this.state.users.push(newUser);
    this.setState({users: this.state.users});
  },

  render() {
    return (
      <div>
        <AddUserPanel updateUserList={this.updateUserList}/>
        <DataGrid sortUsers={this.sortUsers} deleteUser={this.deleteUser} users={this.state.users}/>
      </div>
    );
  }
});

export default LoginForm;
