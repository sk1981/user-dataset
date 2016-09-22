import React from 'react';
import DataGrid from '../DataGrid';
import SortService from './SortService';

//TODO : change to class
/**
 * Higher order component which enables sorting functionality within the grid
 * 
 * @type {*|Function}
 */
const SortableDataGrid = React.createClass({

  getInitialState() {
    return {
      sortField: undefined,
      sortDirection: undefined
    }
  },

  /**
   * Handles change in sort data
   *
   * @param sortField field to which we should sort by
   */
  handleSortChange(sortField) {
    const sortDirection = SortService.getSortDirection(sortField, this.state.sortField, this.state.sortDirection);
    this.setState({sortDirection, sortField});
  },

  render() {
    const {sortField, sortDirection} = this.state;
    const items = sortDirection !== undefined ?
      SortService.sortItems([...this.props.items], sortField, sortDirection):
      this.props.items;

    return (
      <DataGrid {...this.props} items={items} sortField={sortField} sortDirection={sortDirection} handleSortChange={this.handleSortChange}/>
    );
  }
});

export default SortableDataGrid;