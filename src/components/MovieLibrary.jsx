import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  render() {
    const { searchText } = this.state;
    const { movies } = this.props;
    return (
      <main>
        <SearchBar searchText={ searchText } />
        <MovieList movies={ movies } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Array).isRequired,
};

export default MovieLibrary;
