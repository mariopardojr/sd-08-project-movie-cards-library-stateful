import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
    /*       searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '', */
      movies,
    };
  }

  render() {
    const { /* searchText, bookmarkedOnly, selectedGenre, */ movies } = this.state;
    return (
      <div>
        <SearchBar />
        <AddMovie />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
