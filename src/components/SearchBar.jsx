// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render(){
    return(
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:</label>
        <input data-testid="text-input" value={this.props.searchText} onChange={this.props.onSearchTextChange}/>
        <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input data-testid="checkbox-input" type="checkbox" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} />
        <label data-testid="select-input-label">Filtrar por gênero</label>
        <select data-testid="select-input" value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
