// implement SearchBar component here

import React, { Component } from 'react';

class SearchBar extends Component {
  renderFormTextInput() {
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input type="text" data-testid="text-input" />
      </label>
    );
  }

  renderFormCheckbox() {
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input type="checkbox" data-testid="checkbox-input" />
      </label>
    );
  }

  renderFormSelect() {
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select data-testid="select-input">
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.renderFormTextInput()}
        {this.renderFormCheckbox()}
        {this.renderFormSelect()}
      </form>
    );
  }
}

export default SearchBar;
