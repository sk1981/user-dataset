import React from 'react';
import "../../style/03-Components/user/_add-user.scss";

// import UserDataManager from './data/UserDataManager'

class AddUserPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  reset() {
    this.personName.value = '';
    this.superTrait.checked = false;
    this.geniusTrait.checked = false;
    this.richTrait.checked = false;
  }

  handleButtonClick(event) {
    const person = {
      name: this.personName.value,
      superPower: this.superTrait.checked,
      genius: this.geniusTrait.checked,
      rich: this.richTrait.checked
    };
    this.props.updateUserList(person);
    this.reset();
    event.preventDefault();
  }

  render() {
    return (
      <div className="add-user">
        <h2>Add new person</h2>
        <form>
          <div className="add-user__data">
            <input ref={(ref) => this.personName = ref} type="text" placeholder="Name"/>
            <input ref={(ref) => this.superTrait = ref} type="checkbox"/> Super Power
            <input ref={(ref) => this.geniusTrait = ref} type="checkbox"/> Genius
            <input ref={(ref) => this.richTrait = ref} type="checkbox"/> Rich
            <button className="add-user__button" onClick={this.handleButtonClick}>Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddUserPanel;
