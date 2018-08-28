/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=ebdaf01ed8d5831bedeb284c4c75a84b&language=en-US`;
      const res = await fetch(url);
      const movie = await res.json();
      this.setState({
        movie, // movie: movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
