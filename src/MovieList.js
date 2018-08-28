/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MovieList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ebdaf01ed8d5831bedeb284c4c75a84b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
      const res = await fetch(url);
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MovieList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
