import React from 'react';
import City from './City';

class Main extends React.Component{

  render() {
    return (
      <City 
        data={this.props.data}
      />
    );
  }


}

export default Main;