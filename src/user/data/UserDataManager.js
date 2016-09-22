/**
 * Class to manage simple operations on the user dataset
 */
export default {

  /**
   *  Gets the id for a new user
   *
   *  To get the id , it iterates over the list of all users to
   *  fetch the maximum id and increments it to get the new id.
   *
   * @param users
   * @returns {*}
   */
  getNewUserId(users) {
    const maxId = users.reduce((preMax, user) => {
      return Math.max(preMax, user.id)
    }, 0);
    return maxId + 1;
  },

  /**
   *
   * Removes the user with the given id from the list of user
   *
   * @param users
   * @param userId
   * @returns {*}
   */
  removeUser(users, userId) {
    return users.reduce((previous, user) => {
      if (user.id !== userId) {
        previous.push(user)
      }
      return previous;
    }, []);
  },

  /**
   * 
   * @param users
   * @param userId
   * @returns {*}
   */
  getUserById(users, userId) {
    const matchedUsers = users.filter(user => user.id === userId);
    if(matchedUsers.length === 1) {
      return matchedUsers[0];
    } else {
      throw new Error('Unable to find an unique user for: ' + userId);
    }
  },

  /**
   * Gives the list of user traits
   */
  getTraits() {
    return [
      {type: 'power', check: 'isSuper', display: 'Super Power'},
      {type: 'rich', check: 'isRich', display: 'Rich'},
      {type: 'genius', check: 'isGenius', display: 'Genius'}
    ];
  },

  /**
   * Iterates over user object and counts the number
   * of people with the given trait
   *
   * @param users
   * @returns {{}}
   */
  getTraitCount(users) {
    const traitCountMap = {};
    const traitList = this.getTraits();
    users.forEach(user => {
      traitList.forEach(trait => {
        if(user[trait.check]) {
          traitCountMap[trait.type] = (traitCountMap[trait.type] || 0) + 1;
        }
      });
    });
    return traitCountMap;
  }
}