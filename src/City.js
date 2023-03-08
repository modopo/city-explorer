import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import './css/City.css'

class City extends React.Component{

  render() {
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=13`
    
    return (
      <Card className='cityCard'>
        <Card.Header as="h2">{this.props.name}</Card.Header>
        <Image src={url} />
        <Card.Body>
          <p>Latitude: {this.props.lat}, Longitude: {this.props.lon}</p>
        </Card.Body>
      </Card>
    );
  }
}

export default City;