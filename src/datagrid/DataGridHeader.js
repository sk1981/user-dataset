import React from 'react';
import UserDataManager from '../user/data/UserDataManager'

/**
 * Gets the header for name fields
 *
 * @param sortField
 * @param sortIndicator
 * @param handleHeaderClick
 * @returns {XML}
 */
function getNameHeader(sortField, sortIndicator, handleHeaderClick) {
  const fieldName = "name";
  return (
    <td  data-name={fieldName}
         onClick={handleHeaderClick}
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
 * @param handleHeaderClick
 * @returns {*}
 */
function getTraitHeader(sortField, sortIndicator, handleHeaderClick) {
  return UserDataManager.getTraits().map(trait => {
    return (<td className="grid__header-cell grid__header-cell--trait"
                key={trait.type}
                onClick={handleHeaderClick}
                data-name={trait.type}>
      {trait.display} {trait.type === sortField ? sortIndicator: ''}
    </td>);
  });
}

/**
 * Class to generate header for data grid
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const DataGridHeader = (props) => {
  const {sortField, sortIndicator, handleHeaderClick} = props;
  return (
    <thead>
    <tr className="grid__header">
      {getNameHeader(sortField, sortIndicator, handleHeaderClick)}
      {getTraitHeader(sortField, sortIndicator, handleHeaderClick)}
      <td className="grid__header-cell grid__header-cell--trait">Delete</td>
    </tr>
    </thead>
  );
};

export default DataGridHeader;