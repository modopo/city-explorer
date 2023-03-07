import React from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      display_name: '',
      latitude: 0,
      longitude: 0,
      errorMessage: '',
      cityMapUrl: '',
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
        longitude: cityData.data[0].lon,
        cityMapUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=13`
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
