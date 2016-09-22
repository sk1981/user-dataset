const localForage = require("localforage/dist/localforage");
import UserDataManager from './UserDataManager';
// TODO : Add error handling

export default {

  /**
   * Fetch all users from local storage
   *
   * @returns {*}
   */
  fetchUsers() {
    return localForage.getItem('users');
  },


  /**
   * Delete a user by removing it's entry from local storage
   *
   * @param userId
   * @returns {Promise.<User>}
   */
  deleteUser(userId) {
    return this.fetchUsers().then((users) => {
      return UserDataManager.removeUser(users, userId);
    }).then((users) => {
      return localForage.setItem('users', users);
    })
  },

  /**
   * Adds a new user
   *
   * @param newUser
   * @returns {Promise.<User>}
   */
  addUser(newUser) {
    return this.fetchUsers().then((users) => {
      users = users || [];
      newUser.id = UserDataManager.getNewUserId(users);
      users.push(newUser);
      return users;
      }
    ).then((users) => {
      return localForage.setItem('users', users);
    });
  },

  /**
   *
   * @param userId
   * @param traitName
   * @param traitValue
   */
  updateUserTrait(userId, traitName, traitValue) {
    return this.fetchUsers().then((users) => {
      const user = UserDataManager.getUserById(users, userId);
      user[traitName] = traitValue; // Mutable change, should not matter for our case
      return users;
    }).then((users) => {
      return localForage.setItem('users', users);
    });
  }  

}