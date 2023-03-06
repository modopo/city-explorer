import React from 'react';
import Card from 'react-bootstrap/Card';

class City extends React.Component{

  render() {
    return (
      <Card>
        <Card.Header as="h2">{this.props.data.display_name}</Card.Header>
        <Card.Body>
          Latitude: {this.props.data.latitude}
        </Card.Body>
        <Card.Body>
          Longitude: {this.props.data.longitude}
        </Card.Body>
      </Card>
    );
  }
}

export default City;