import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="IDinput">
          Inclui o texto:
          <input type="text" id="IDinput" value={ searchText }
            onChange={ onSearchTextChange } data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="IDChecked">
          Mostrar somente favoritos
          <input type="checkbox" id="IDChecked" checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange } data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
