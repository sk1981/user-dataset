import React from 'react';
const ASCENDING_SORT = 'asc';
const DESCENDING_SORT = 'desc';

/**
 * Functions related to sorting
 */
export default {


  /**
   * Figures out new sort direction based on previous
   *
   * It's a state transition:-
   * None => Asc => Desc => None
   * As a state machine code would be too complex, we
   * are just using simple if checks
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
   * Sorts item based on the provided direction
   *
   * @param items
   * @param field
   * @param sortDirection
   * @returns {*}
   */
  sortItems(items, field, sortDirection) {
    items.sort(function(itemA, itemB) {
      const isFirstBigger = itemA[field] > itemB[field];
      return sortDirection === DESCENDING_SORT ? !isFirstBigger: isFirstBigger;
    });
    return items;
  },

  /**
   * Generates the sort indicat
   * @param sortDirection
   * @returns {*}
   */
  getSortIndicator(sortDirection) {
  return sortDirection ? <span className={`sort-indicator`}>{sortDirection === 'asc'? '▲': '▼'}</span>: undefined;
}


}