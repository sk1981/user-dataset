import React from 'react';
import UserDataManager from '../user/data/UserDataManager'

class DataRow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {deleteInitiated: false};
    this.handleDeleteInitiation = () => this.setState({deleteInitiated: true});
    this.handleDeleteCancellation = () => this.setState({deleteInitiated: false});
    this.handleItemUpdate = this.handleItemUpdate.bind(this);
  }

  deleteItem() {
    this.props.deleteItem(this.props.item.id);
  }

  /**
   * Handles update of item data
   *
   * @param clickEvent
   */
  handleItemUpdate(clickEvent) {
    const target = clickEvent.target;
    const value = target.checked;
    const propertyType = target.getAttribute('data-name');
    this.props.updateItem(this.props.item.id, propertyType, value);
  }

  getDeleteInfo() {
    return this.state.deleteInitiated ?
      (
        <span>
          Are you sure (
          <span className="cell__delete-option" onClick={this.deleteItem}>Yes</span> /
          <span className="cell__delete-option" onClick={this.handleDeleteCancellation}>No</span>
          )
        </span>
      ):
      (
        <span className="cell__delete-start hand-pointer" onClick={this.handleDeleteInitiation}>{'❌'}</span>
      );
  }

  /**
   * Generates the trait cells
   *
   * @param item
   * @returns {*}
   */
  getTraitCells(item) {
    return UserDataManager.getTraits().map(trait => {
      return (
        <td key={trait.type} className="grid__cell grid__cell--trait" >
          <input data-name={trait.check} onChange={this.handleItemUpdate} type="checkbox" checked={item[trait.check]} />
        </td>
      );
    });
  }

  render() {
    const {name} = this.props.item;
    return (
      <tr className="grid__row">
        <td className="grid__cell">{name}</td>
        {this.getTraitCells(this.props.item)}
        <td className="grid__cell grid__cell--trait grid__cell--delete">{this.getDeleteInfo()}</td>
      </tr>
    );
  }
}

export default DataRow;