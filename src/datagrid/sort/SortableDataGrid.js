import React from 'react';
import DataGrid from '../DataGrid';
import SortService from './SortService';

/**
 * Higher order component which enables sorting functionality within the grid
 * 
 * @type {*|Function}
 */
class SortableDataGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortField: undefined,
      sortDirection: undefined
    };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  /**
   * Handles change in sort data
   *
   * @param sortField field to which we should sort by
   */
  handleSortChange(sortField) {
    const sortDirection = SortService.getSortDirection(sortField, this.state.sortField, this.state.sortDirection);
    this.setState({sortDirection, sortField});
  }

  render() {
    const {sortField, sortDirection} = this.state;
    const items = sortDirection !== undefined ?
                  SortService.sortItems([...this.props.items], sortField, sortDirection):
                  this.props.items;

    const sortIndicator = SortService.getSortIndicator(sortDirection);
    return (
      <DataGrid {...this.props}
        sortIndicator={sortIndicator}
        items={items}
        sortField={sortField}
        sortDirection={sortDirection}
        handleSortChange={this.handleSortChange}
      />
    );
  }
}

export default SortableDataGrid;