import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  renderTitles() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input id="title-input" data-testid="title-input" />
      </label>
    );
  }

  renderSubTitles() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input id="subtitle-input" data-testid="subtitle-input" />
      </label>
    );
  }

  renderImages() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input id="image-input" data-testid="image-input" />
      </label>
    );
  }

  renderSynopsis() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input type="text" id="storyline-input" data-testid="storyline-input" />
      </label>
    );
  }

  renderAssessmentRating() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input"
          data-testid="rating-input"
          defaultValue={ 0 }
        />
      </label>
    );
  }

  //  dica defaultValue PSimões - Revisão

  renderMovieGenre() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          type="number"
          id="genre-input"
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    const { onClick } = this.props;
    return (
      <button type="button" onClick={ onClick } data-testid="send-button">
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          { this.renderTitles() }
          { this.renderSubTitles() }
          { this.renderImages() }
          { this.renderSynopsis() }
          { this.renderAssessmentRating() }
          { this.renderMovieGenre() }
          { this.renderButton() }
        </form>
      </>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
