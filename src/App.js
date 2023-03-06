import React from 'react';
import SearchForm from './SearchForm';
import axios from 'axios';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      display_name: '',
      latitude: 0,
      longitude: 0,
      errorMessage: '',
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
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchInput}&format=json`);

      this.setState({
        display_name: cityData.data[0].display_name,
        latitude: cityData.data[0].lat,
        longitude: cityData.data[0].lon
      });
    } catch (error) {
      console.log('error: ', error);
      console.log('error.message: ', error.message);
      this.setState({
        errorMessage: error.message,
      });
    }
  }

  render() {
    return (
      <SearchForm
        searchSubmit={this.searchSubmit}
        searchInput={this.handleSearchInput}
      />
    );
  }
}

export default App;
