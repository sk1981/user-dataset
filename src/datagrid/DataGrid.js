import React from 'react';
import DataRow from './DataRow';
import DataGridFooter from './DataGridFooter';


class DataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.filterName = this.filterName.bind(this);
  }

  filterName() {
    this.props.sortUsers('name');
  }

  render() {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <td onClick={this.filterName}>Name</td>
            <td>Super Power</td>
            <td>Rich</td>
            <td>Genius</td>
            <td>Delete</td>
          </tr>
          </thead>
          <tbody>
          {this.props.users.map((user) => <DataRow deleteUser={this.props.deleteUser} key={user.id} user={user}/>)}
          </tbody>
        </table>
        <DataGridFooter/>
      </div>
    );
  }
}

export default DataGrid;