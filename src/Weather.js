import React from 'react';
import Card from 'react-bootstrap/Card';
import './css/Weather.css';

class Weather extends React.Component {

  render () {
    let daysForecast = this.props.forecasts.map((day, idx) => {
      return (
        <Card.Text key={day.date}>{day.date}: {day.description}</Card.Text>
      )
    })

    return (
      <Card className="weatherCard">
        <Card.Body>
          <Card.Title>Weather Forecast</Card.Title>
            {daysForecast}
        </Card.Body>
      </Card>
    )
  }
}

export default Weather;

