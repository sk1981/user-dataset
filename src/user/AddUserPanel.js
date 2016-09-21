import React from 'react';

class AddUserPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    const person = {
      name: this.personName.value,
      isSuper: this.superTrait.checked,
      isGenius: this.geniusTrait.checked,
      isRich: this.richTrait.checked
    };
    this.props.updateUserList(person);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Add new person</h2>
        <form>
          <div>
            <input ref={(ref) => this.personName = ref} type="text" placeholder="Name"/>
            <input ref={(ref) => this.superTrait = ref} type="checkbox"/> Super
            <input ref={(ref) => this.geniusTrait = ref} type="checkbox"/> Genius
            <input ref={(ref) => this.richTrait = ref} type="checkbox"/> Rich
            <button onClick={this.handleButtonClick}>Add</button>
          </div>
        </form>
      </div>
    );
  }
}


export default AddUserPanel;
