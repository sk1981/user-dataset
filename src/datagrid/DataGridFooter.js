import React from 'react';
import UserDataManager from '../user/data/UserDataManager'

class DataGridFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Gets the trait based filters for the footer
   *
   * For applied filter it generates links to remove them
   *
   * For non applied filters it generates link to apply them
   *
   * @returns {*}
   */  
  getFooterFilters() {
    return UserDataManager.getTraits().map(trait => {
      const isActive = trait.type === this.props.filterTrait;
      const link = isActive ? "#": `#/traits/${trait.type}`;
      const removeFilterText = isActive ? ' (Clear)' : '';
      return <a key={trait.type} className="grid-footer__filter" href={link}>{`${trait.display}${removeFilterText}`}</a>
    });
  }

  getHiddenMessage() {
    if(this.props.isNewItemHidden === true) {
      return <div className="hidden-user">&#9888;{`Warning: Newly added user ${this.props.newItem.name} is hidden, please clear the filters to view him`}</div>;
    }
  }


  render() {
    return (
      <footer className="grid-footer">
        {this.getFooterFilters()}
        {this.getHiddenMessage()}
      </footer>
    );
  }
}

export default DataGridFooter;