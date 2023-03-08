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
      weatherData: [],
      errorMessage: '',
      showError: false,
      showCity: false,
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
      let cityResponse = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchInput}&format=json`);

      this.setState({
        cityData: cityResponse.data[0],
        showCity: true,
        showError: false,
      });

      let city = cityResponse.data[0].display_name.split(',')[0];

      let weatherResponse = await (await axios.get(`${process.env.REACT_APP_SERVER}/weather?searchQuery=${city}`)).data

      this.setState({
        weatherData: weatherResponse,
      })

    } catch (error) {
      this.setState({
        showError: true,
        errorMessage: error.message,
        showCity: false,
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
