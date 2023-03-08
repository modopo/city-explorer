import React from 'react';
import City from './City';
import Weather from './Weather';
import Alert from 'react-bootstrap/Alert';
import './css/Main.css'

class Main extends React.Component{

  render() {

    return (
      <main>
        {(this.props.data.showError) ? 
            <Alert variant="warning">{this.props.data.errorMessage}</Alert> 
          :
          this.props.data.showCity
          &&
          <>
            <City 
              lat={this.props.data.cityData.lat}
              lon={this.props.data.cityData.lon}
              name={this.props.data.cityData.display_name}
              cityUrl={this.props.data}
            />
            <Weather 
              forecasts={this.props.data.weatherData}
            />
          </>
        }
      </main>
    );
  }


}

export default Main;