const ASCENDING_SORT = 'ASC';
const DESCENDING_SORT = 'DESC';

export default {


  /**
   *
   * @param sortField
   * @param previousSortField
   * @param currentSortDirection
   */
  getSortDirection(sortField, previousSortField, currentSortDirection) {
    let newSortDirection;
    // If new field reset to default sort
    if(sortField !== previousSortField) {
      newSortDirection = ASCENDING_SORT;
    } else {
      if(currentSortDirection === ASCENDING_SORT) {
        newSortDirection =  DESCENDING_SORT;
      } else if(currentSortDirection === DESCENDING_SORT) {
        newSortDirection = undefined
      } else {
        newSortDirection = ASCENDING_SORT
      }
    }
    return newSortDirection;
  },

  /**
   * 
   * @param users
   * @param field
   * @param sortDirection
   * @returns {*}
   */
  sortUsers(users, field, sortDirection) {
    console.log(sortDirection === DESCENDING_SORT);
    users.sort(function(userA, userB) {
      //TODO : Simplify, handle undefined
      return sortDirection === DESCENDING_SORT ? userA[field] > userB[field]: userA[field] < userB[field];
    });
    return users;
  }
}