import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './css/SearchForm.css';


class SearchForm extends React.Component {
  
  render() {
    
    return (
      <Form onSubmit={this.props.searchSubmit}>
        <Form.Control 
          type="text" 
          placeholder="City Name"
          onChange={this.props.searchInput}
        />
        <Button type="submit">Explore!</Button>
      </Form>
    );
  }
  
}

export default SearchForm;