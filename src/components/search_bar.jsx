import React, { Component } from 'react';

class SearchBar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input placeholder="Search for a gif here!" type="text" className="form-search form-control" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
