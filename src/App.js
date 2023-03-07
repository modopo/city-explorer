import React from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      cityData: {},
      errorMessage: '',
      errorState: true,
    }
  }

  handleSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  }

  searchSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchInput}&format=json`);

      console.log(response.data[0]);
      this.setState({
        cityData: response.data[0],
        errorState: false,
      });

    } catch (error) {
      this.setState({
        errorState: true,
        errorMessage: error.message,
      });
    }
  }

  render() {
    return (
      <>
        <Header
          searchSubmit={this.searchSubmit}
          searchInput={this.handleSearchInput}
        />
        <Main 
          data={this.state}
        />
      </>
    );
  }
}

export default App;
