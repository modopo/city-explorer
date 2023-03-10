import React from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      weatherData: [],
      moviesData: [],
      searchInput: '',
      errorMessage: '',
      showError: false,
      showCity: false,
      showWeather: false,
      showMovies: false,
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

      let coord = [cityResponse.data[0].lat, cityResponse.data[0].lon];

      this.getWeather(coord);

      this.getMovies(this.state.searchInput);

    } catch (error) {
      this.setState({
        showError: true,
        errorMessage: error.message,
        showCity: false,
      });
    }
  }

  async getWeather(coord) {
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${coord[0]}&lon=${coord[1]}`;

      let weatherResponse = (await axios.get(url)).data;

      this.setState({
        weatherData: weatherResponse,
        showWeather: true,
      });

    } catch (error) {
      this.setState({
        showError: true,
        errorMessage: error.message,
        showCity: false,
      });
    }
  }

  async getMovies(city) {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?search=${city}`;

      let movieResponse = (await axios.get(url)).data;

      this.setState({
        moviesData: movieResponse,
        showMovies: true,
      })
    } catch (error) {
      this.setState({
        showError: true,
        errorMessage: error.message,
        showMovies: false,
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
