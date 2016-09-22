const ASCENDING_SORT = 'asc';
const DESCENDING_SORT = 'desc';

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
   * @param items
   * @param field
   * @param sortDirection
   * @returns {*}
   */
  sortItems(items, field, sortDirection) {
    items.sort(function(itemA, itemB) {
      //TODO : Simplify, handle undefined
      return sortDirection === DESCENDING_SORT ? itemA[field] > itemB[field]: itemA[field] < itemB[field];
    });
    return items;
  }
}