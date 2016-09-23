import React from 'react';
import DataRow from './DataRow';
import DataGridFooter from './DataGridFooter';
import DataGridHeader from './DataGridHeader';
import "../../style/03-Components/grid/_grid.scss";

class DataGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {clickedDeleteCell: -1};
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleDocumentClicks = this.handleDocumentClicks.bind(this);
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
   * Event to listens to clicks on the document.
   *
   * We use this event to close the delete prompt.
   *
   * Instead of attaching click events on each cell we will attach to the top grid element and
   * propagate the details down
   *
   * @param clickEvent
   */
  handleDocumentClicks(clickEvent) {
    const target = clickEvent.target;
    let clickedDeleteCell = -1;
    this.props.items.forEach((item) => {
      const childRow = this[`row-${item.id}`];
      if (childRow != undefined) {
        const deleteCell = childRow.deleteCell;
        // As long as click is not inside, cancel the delete confirmation
        if (!deleteCell.contains(target)) {
          // Not ideal that we are calling properties/methods on children,
          // but definitely the cleanest approach
          childRow.handleDeleteCancellation();
        }
      }
    });
    if (clickedDeleteCell !== -1) {
      this.setState({clickedDeleteCell});
    }
  }

  /**
   * Gets the gird rows by iterating over the list of items
   *
   * @param items
   * @returns {*}
   */
  getGridRows(items) {
    return items.map((item) => {
      // // We should dismiss the delete confirmation if click is outside
      // const dismissCancel = this.state.clickedDeleteCell !== item.id;
      return (
        <DataRow ref={(ref) => this[`row-${item.id}`] = ref }
                 updateItem={this.props.updateItem}
                 deleteItem={this.props.deleteItem}
                 key={item.id}
                 item={item}
        />
      );
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClicks);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClicks);
  }

  render() {
    const {sortField, sortIndicator, filterTrait, newItem, items} = this.props;
    const finalItems = filterTrait ? items.filter((item) => item[filterTrait] === true) : items;
    // See if the newest item is hidden or not
    const isNewItemHidden = newItem && finalItems.filter((item) => item.id === newItem.id).length === 0;
    return (
      <div>
        <table className="grid">
          <DataGridHeader handleHeaderClick={this.handleHeaderClick} sortField={sortField}
                          sortIndicator={sortIndicator}/>
          <tbody>
          {this.getGridRows(finalItems)}
          </tbody>
        </table>
        <DataGridFooter items={items} newItem={newItem} isNewItemHidden={isNewItemHidden} filterTrait={filterTrait}/>
      </div>
    );
  }
}

export default DataGrid;