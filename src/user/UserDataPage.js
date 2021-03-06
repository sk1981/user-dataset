import React from 'react';
import AddUserPanel from './AddUserPanel';
import SortableDataGrid from '../datagrid/sort/SortableDataGrid';
import ErrorPanel from '../common/ErrorPanel';

import UserDataService from './data/UserDataService';

/**
 *
 * @type {*|Function}
 */
const UserDataPage = React.createClass({

  getInitialState() {
    return {
      clickedDataId: -1,
      errorMessage: undefined
    };
  },

  /**
   * Deletes the user
   *
   * @param userId
   */
  deleteUser(userId) {
    UserDataService.deleteUser(userId).then((users)=> {
      this.props.updateUsers(users);
    }, this.handleServiceError);
  },

  /**
   * Sets the error message
   *
   * @param errorMessage
   */
  toggleErrorMessage(errorMessage) {
    this.setState({
      errorMessage: errorMessage
    })
  },

  handleServiceError(error) {
    this.toggleErrorMessage("This operation failed, please try again later : " + error);
  },

  /**
   * Updates the list of user by adding a new user
   * @param newUser
   */
  updateUserList(newUser) {
    if(newUser.name === undefined || newUser.name.trim().length == 0) {
      this.toggleErrorMessage('Please enter a valid user name');
    } else {
      this.toggleErrorMessage();
      UserDataService.addUser(newUser).then((users)=> {
        // Pass users and last user
        this.props.updateUsers(users, users[users.length -1]);
      }, this.handleServiceError);
    }
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
      this.props.updateUsers(users);
    }, this.handleServiceError);
  },

  componentDidMount() {
    UserDataService.fetchUsers().then((users) => {
      this.props.updateUsers(users);
    });
  },

  componentWillReceiveProps(nextProps) {
    //If change in filtering update
    if(this.props.trait !== nextProps.trait) {
      UserDataService.fetchUsers().then((users) => {
        this.props.updateUsers(users);
      });
    }
  },

  render() {
    const filterTrait = this.props.trait;
    const hasUsers = this.props.users.length > 0;
    return (
      <div>
        <AddUserPanel updateUserList={this.updateUserList}/>
        <ErrorPanel cancelMessage={this.toggleErrorMessage} errorMessage={this.state.errorMessage} />
        {hasUsers? (<SortableDataGrid clickedDataId={this.state.clickedDataId}
                          updateItem={this.updateUserTrait}
                          filterTrait={filterTrait}
                          newItem={this.props.newUser}
                          deleteItem={this.deleteUser}
                          items={this.props.users}/>):
                    undefined}
      </div>
    );
  }
});

export default UserDataPage;
