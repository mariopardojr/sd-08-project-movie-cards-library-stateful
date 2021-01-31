import React from 'react';
import PropTypes from 'prop-types';
import SearchBarInput from './SearchBarInput';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      // bookmarkedOnly,
      // onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <SearchBarInput
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  // onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
