import React from 'react';

class DataRow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser() {
    this.props.deleteUser(this.props.user.id);
  }

  render() {
    const {name, isRich, isSuper, isGenius} = this.props.user;
    return (
      <tr>
        <td>{name}</td>
        <td><input type="checkbox" checked={isSuper} />Super Power</td>
        <td><input type="checkbox" checked={isRich} />Rich</td>
        <td><input type="checkbox" checked={isGenius} />Genius</td>
        <td><span onClick={this.deleteUser}>x</span></td>
      </tr>
    );
  }
}

export default DataRow;