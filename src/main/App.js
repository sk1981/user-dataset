import React from "react";
import SideBar from '../sidebar/SideBar'
import Content from '../main/Content'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {users: []};
    this.updateUsers = (users) => this.setState({users});
  }

  render() {
    return (
      <div className="app">
        <Content users={this.state.users} updateUsers={this.updateUsers}/>
        <SideBar users={this.state.users} />
      </div>
    )
  }
}

export default App;
