import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    }
    this.handleMovie = this.handleMovie.bind(this);
  } 

  handleMovie(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {     
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar value={this.handleMovie} searchText={searchText} bookmarkedOnly={bookmarkedOnly} selectedGenre={selectedGenre} />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    )
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
