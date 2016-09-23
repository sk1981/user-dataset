import React from 'react';
import "../../style/03-Components/user/_add-user.scss";
import UserDataManager from './data/UserDataManager'

class AddUserPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  reset() {
    this.personName.value = '';
    UserDataManager.getTraits().map(trait=> {
      this[trait.type].checked = false;
    });
  }

  handleButtonClick(event) {
    const person = {
      name: this.personName.value
    };
    // now attach trait data
    UserDataManager.getTraits().map(trait=> {
      person[trait.type] = this[trait.type].checked;
    });
    this.props.updateUserList(person);
    this.reset();
    event.preventDefault();
  }

  renderTraitInputs() {
    return UserDataManager.getTraits().map(trait => {
      return <label className="input-trait__label"><input ref={(ref) => this[trait.type] = ref} type="checkbox"/> {trait.display}</label>
    });
  }

  render() {
    return (
      <div className="add-user">
        <h2>Add new person</h2>
        <form>
          <div className="add-user__data">
            <input ref={(ref) => this.personName = ref} type="text" placeholder="Name"/>
            {this.renderTraitInputs()}
            <button className="add-user__button" onClick={this.handleButtonClick}>Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddUserPanel;
