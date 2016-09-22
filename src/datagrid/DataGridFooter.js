import React from 'react';
import UserDataManager from '../user/data/UserDataManager'

class DataGridFooter extends React.Component {

  /**
   * Gets the trait based filters for the footer
   *
   * @returns {*}
   */
  static getFooterFilters() {
    return UserDataManager.getTraits().map(trait => {
      return <a key={trait.type} className="grid-footer__filter" href={`#${trait.type}`}>{trait.display}</a>
    });
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="grid-footer">
        {DataGridFooter.getFooterFilters()}
      </footer>
    );
  }
}

export default DataGridFooter;