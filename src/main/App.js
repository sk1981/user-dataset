import React from "react";
import SideBar from '../sidebar/SideBar'
import Content from '../main/Content'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {users: []};
    this.updateUsers = this.updateUsers.bind(this);
  }

  updateUsers(users, newUser) {
    users = users || [];
    this.setState({
      users,
      newUser
    });
  }


  render() {
    const {newUser, users} = this.state;
    return (
      <div className="app">
        <Content newUser={newUser} users={users} updateUsers={this.updateUsers}/>
        <SideBar users={users} />
      </div>
    )
  }
}

export default App;
