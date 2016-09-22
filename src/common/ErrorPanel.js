import React from 'react';
import "../../style/03-Components/_error.scss"
class ErrorPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // Dismiss after 2000 seconds
    if(this.props.errorMessage !== undefined) {
      window.setTimeout(() => {
        this.props.cancelMessage();
      }, 2000);
    }
  }

  getErrorMessage() {
    if(this.props.errorMessage) {
      return (
        <div className="error-message">
          {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="error-panel">
        {this.getErrorMessage()}
      </div>
    )
  }
}

export default ErrorPanel;