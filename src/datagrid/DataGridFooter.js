import React from 'react';
import UserDataManager from '../user/data/UserDataManager'
import UserDataService from '../user/data/UserDataManager';

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
  getFooterFilters(traitCountMap) {
    return UserDataManager.getTraits().map(trait => {
      const isActive = trait.type === this.props.filterTrait;
      const link = isActive ? "#": `#/traits/${trait.type}`;
      const removeFilterText = isActive ? ' (Clear)' : '';
      const traitCount = traitCountMap[trait.type] || 0;
      return traitCount ===0 ? <span className="grid-footer__filter">{trait.display}</span>:
              <a key={trait.type} className="grid-footer__filter grid-footer__filter--active" href={link}>{`${trait.display}${removeFilterText}`}</a>
    });
  }

  getHiddenMessage() {
    if(this.props.isNewItemHidden === true) {
      return <div className="hidden-user">&#9888;{`Warning: Newly added user '${this.props.newItem.name}' is filtered, please clear the filters to view him`}</div>;
    }
  }

  getAllUsersFilteredMessage(allItemsFiltered) {
    if(allItemsFiltered) {
      return <div className="hidden-user">&#9888;{`Warning: There is no user matching the given filter, please clear the filters to view him`}</div>;
    }
  }


  render() {
    const traitCountMap = UserDataService.getTraitCount(this.props.items);
    const allItemsFiltered = traitCountMap[this.props.filterTrait] === undefined;

    return (
      <footer className="grid-footer">
        {this.getFooterFilters(traitCountMap)}
        {this.getHiddenMessage()}
        {this.getAllUsersFilteredMessage(allItemsFiltered)}
      </footer>
    );
  }
}

export default DataGridFooter;