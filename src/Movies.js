import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './css/Movies.css';

class Movies extends React.Component {

  render () {
    let movies = this.props.movies.map((movie) => {
      let imageUrl = `https://image.tmdb.org/t/p/w500/${movie.image_url}`
      
      return (
      <Carousel.Item key={movie.title}>
        <h3>{movie.title}</h3>
        <img
          className="poster"
          src={imageUrl}
          alt={movie.title}
        />
      </Carousel.Item>
      )
    })

    return (
      <Carousel variant="dark" slide={false}>
        {movies}
      </Carousel>
    )
  }
}

export default Movies;

