import React from 'react';
import AddUserPanel from './AddUserPanel';
import SortableDataGrid from '../datagrid/sort/SortableDataGrid';
import SideBar from '../sidebar/SideBar';

import UserDataService from './data/UserDataService';


const LoginForm = React.createClass({

  getInitialState() {
    return {
      users: []
    };
  },

  /**
   * Deletes the user
   * 
   * @param userId
   */
  deleteUser(userId) {
    UserDataService.deleteUser(userId).then((users)=> {
      this.setState({users})
    });
  },

  /**
   * Updates the list of user by adding a new user
   * @param newUser
   */
  updateUserList(newUser) {
    UserDataService.addUser(newUser).then((users)=> {
      this.setState({users});
    });
  },

  /**
   * Updates the given trait
   *
   * @param userId
   * @param traitName
   * @param traitValue
   */
  updateUserTrait(userId, traitName, traitValue) {
    UserDataService.updateUserTrait(userId, traitName, traitValue).then((users)=> {
      this.setState({users});
    });
  },

  componentDidMount() {
    UserDataService.fetchUsers().then((users) => {
      this.setState({users});
    });
  },

  render() {
    return (
      <div>
        <AddUserPanel updateUserList={this.updateUserList}/>
        <SortableDataGrid updateItem={this.updateUserTrait} deleteItem={this.deleteUser} items={this.state.users}/>
        <SideBar users={this.state.users}/>
      </div>
    );
  }
});

export default LoginForm;
