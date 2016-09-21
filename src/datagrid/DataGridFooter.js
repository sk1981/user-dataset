import React from 'react';

class DataGridFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <a href="#super">Super Power</a>|<a href="#rich">Rich</a>|<a href="#genius">Genius</a>
      </footer>
    );
  }
}

export default DataGridFooter;