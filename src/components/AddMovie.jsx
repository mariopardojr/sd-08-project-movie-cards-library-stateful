import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    console.log(name);
    console.log(this.state);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  callBackSubmit() {
    console.log('leo');
  }

  fillTitleLabelHmlt(titleState, handleChange) {
    return (
      <label htmlFor="texto" data-testid="title-input-label">
        Título:
        <input
          id="texto"
          data-testid="title-input"
          type="text"
          name="title"
          value={ titleState }
          onChange={ handleChange }
        />
      </label>
    );
  }

  fillsubTitleLabelHmlt(subTitleState, handleChange) {
    return (
      <label htmlFor="text" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subTitleState }
          onChange={ handleChange }
        />
      </label>
    );
  }

  fillPathHmlt(imagePath, handleChange) {
    return (
      <label htmlFor="text" data-testid="image-input-label">
        Imagem:
        <input
          data-testid="image-input"
          type="text"
          name="text"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }

  fillTextareaHmlt(storyline, handleChange) {
    return (
      <label htmlFor="text" data-testid="storyline-input-label">
        Sinopse:
        <input
          data-testid="storyline-input"
          type="textarea"
          name="textarea"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }

  fillNumberHmlt(rating, handleChange) {
    return (
      <label htmlFor="text" data-testid="rating-input-label">
        Avaliação:
        <input
          data-testid="rating-input"
          type="number"
          name="number"
          min="0"
          max="5"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }

  fillSelectHtml(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="selectList" data-testid="genre-input-label">
        Gênero
        <select
          name="selectList"
          data-testid="genre-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Ação</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  createButton(onClick) {
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    console.log('render', title);
    return (
      <form data-testid="add-movie-form">
        {this.fillTitleLabelHmlt(title, this.handleChange)}
        {this.fillsubTitleLabelHmlt(subtitle, this.handleChange)}
        {this.fillPathHmlt(imagePath, this.handleChange)}
        {this.fillTextareaHmlt(storyline, this.handleChange)}
        {this.fillNumberHmlt(rating, this.handleChange)}
        {this.fillSelectHtml(genre, this.handleChange)}
        {this.createButton(onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
