import React from 'react';
import City from './City';
import './css/Main.css'

class Main extends React.Component{

  render() {
    
    return (
      <main>
        {(this.props.data.errorState) ? 
          <p>{this.props.data.errorMessage}</p>
          :
          <City 
            lat={this.props.data.cityData.lat}
            lon={this.props.data.cityData.lon}
            name={this.props.data.cityData.display_name}
            cityUrl={this.props.data}
            />
        }
      </main>
    );
  }


}

export default Main;