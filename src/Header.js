import React from "react";
import SearchForm from "./SearchForm";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>City Explorer</h1>
        <SearchForm 
          searchSubmit={this.props.searchSubmit}
          searchInput={this.props.searchInput} 
        />
      </header>
    )
  }
}

export default Header;