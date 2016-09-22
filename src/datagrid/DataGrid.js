import React from 'react';
import DataRow from './DataRow';
import DataGridFooter from './DataGridFooter';
import UserDataManager from '../user/data/UserDataManager'
import "../../style/02-Components/grid/_grid.scss";

class DataGrid extends React.Component {

  // TODO : move to sort service
  /**
   *
   * @param props
   * @returns {*}
   */
  static getSortIndicator(props) {
    const {sortDirection} = props;
    return sortDirection ? <span className={`sort-indicator`}>{sortDirection === 'asc'? '▲': '▼'}</span>: undefined;
  }

  constructor(props) {
    super(props);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  /**
   * Handles header click by firing off sortting events.
   * @param handleEvent
   */
  handleHeaderClick(handleEvent) {
    const fieldName = handleEvent.target.getAttribute('data-name');
    this.props.handleSortChange(fieldName);
  }

  /**
   * Gets the header for name fields
   *
   * @param sortField
   * @param sortIndicator
   * @returns {XML}
   */
  getNameHeader(sortField, sortIndicator) {
    const fieldName = "name";
    return (
      <td  data-name={fieldName}
           onClick={this.handleHeaderClick}
           className="grid__header-cell" >
        Name {fieldName === sortField ? sortIndicator: ''}
      </td>
    )
  }

  /**
   * Gets the trait header data
   *
   * @param sortField
   * @param sortIndicator
   * @returns {*}
   */
  getTraitHeader(sortField, sortIndicator) {
    return UserDataManager.getTraits().map(trait => {
      return (<td className="grid__header-cell grid__header-cell--trait"
                  key={trait.check}
                  onClick={this.handleHeaderClick}
                  data-name={trait.check}>
        {trait.display} {trait.check === sortField ? sortIndicator: ''}
      </td>);
    });
  }

  render() {
    const sortIndicator = DataGrid.getSortIndicator(this.props);
    return (
      <div>
        <table className="grid">
          <thead>
          <tr className="grid__header">
            {this.getNameHeader(this.props.sortField, sortIndicator)}
            {this.getTraitHeader(this.props.sortField, sortIndicator)}
            <td className="grid__header-cell grid__header-cell--trait">Delete</td>
          </tr>
          </thead>
          <tbody>
          {this.props.items.map((item) => <DataRow updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} key={item.id} item={item}/>)}
          </tbody>
        </table>
        <DataGridFooter/>
      </div>
    );
  }
}

export default DataGrid;