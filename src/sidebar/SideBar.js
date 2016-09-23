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
        const traitCount = traitCountMap[trait.type] || 0;

        return (
          <li key={trait.type} className="sidebar__trait-item">{trait.display}:
            {traitCount == 0 ? <span>{traitCount}</span>: <a href={`#/traits/${trait.type}`}>{traitCount}</a>}
          </li>)
      })}
    </ul>
  )
}
/**
 * Sidebar for the page
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const SideBar = function (props) {
  const totalUsers = props.users.length;
  // Link to full page if users are > 0
  const totalPersonCount = totalUsers === 0 ? totalUsers: <a href="#">{totalUsers}</a>
  return (
    <div className="sidebar">
      <h2>Side Bar</h2>
      <h3>{`Total Person${totalUsers > 1? 's': ''}: `}{totalPersonCount}</h3>
      {totalUsers === 0 ? undefined: getTraitCountData(props.users)}
    </div>
  );
};

export default SideBar;