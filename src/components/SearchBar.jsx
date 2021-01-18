// implement SearchBar component here

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input id="text-input" type="text" data-testid="text-input" value={ searchText } onChange={ onSearchTextChange } />
        </label>
        <label htmlFor="check-box" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input id="check-box" type="checkbox" data-testid="checkbox-input" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
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
};

export default SearchBar;
