import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ this.props.searchText }
        />
        {
        // onSearchTextChange={this.onSearchTextChange}
        // bookmarkedOnly={bookmarkedOnly}
        // onBookmarkedChange={this.onBookmarkedChange}
        // selectedGenre={selectedGenre}
        // onSelectedGenreChange={this.onSelectedGenreChange}
        }

        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

export default MovieLibrary;
