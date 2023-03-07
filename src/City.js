import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import './css/City.css'

class City extends React.Component{

  render() {
    return (
      <Card>
        <Card.Header as="h2">{this.props.data.display_name}</Card.Header>
        <Card.Body>
          <Image src={this.props.data.cityMapUrl}></Image>
        </Card.Body>
        <Card.Body>
          <p>Latitude: {this.props.data.latitude}, Longitude: {this.props.data.longitude}</p>
        </Card.Body>
      </Card>
    );
  }
}

export default City;