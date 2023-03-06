import React from 'react';

class City extends React.Component{

  render() {
    return (
      <>
        <h2>{this.props.data.display_name}</h2>
        <p>Latitude: {this.props.data.latitude}</p>
        <p>Longitude: {this.props.data.longitude}</p>
      </>
    );
  }


}

export default City;