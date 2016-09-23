import React from 'react';
import UserDataService from '../user/data/UserDataManager';
require('../../style/03-Components/_sidebar.scss');
/**
 * Gets the list for trait count
 *
 * @param users
 * @returns {XML}
 */
function getTraitCountData(users) {
  const traitCountMap = UserDataService.getTraitCount(users);
  return (
    <ul className="sidebar__trait-list">
      {UserDataService.getTraits().map(trait => {
        return <li key={trait.type} className="sidebar__trait-item">{trait.display}: {traitCountMap[trait.type] || 0}</li>
      })}
    </ul>
  )
}

const SideBar = function (props) {
  const totalUsers = props.users.length;
  return (
    <div className="sidebar">
      <h2>Side Bar</h2>
      <h3>{`Total Person${totalUsers > 1? 's': ''}: ${totalUsers}`}</h3>
      {getTraitCountData(props.users)}
    </div>
  );
};

export default SideBar;