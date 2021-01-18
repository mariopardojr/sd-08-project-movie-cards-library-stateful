import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubtitle = this.handleSubtitle.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };
  }

  handleTitle(e) {
    const newTitle = e.target.value;
    this.setState({
      title: newTitle,
    });
  }

  handleSubtitle(e) {
    const newValueSub = e.target.value;
    this.setState({
      subtitle: newValueSub,
    });
  }

  handleImg(e) {
    const newValueImg = e.target.value;
    this.setState({
      imagePath: newValueImg,
    });
  }

  addMovieTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleTitle }
        />
      </label>
    );
  }

  addMovieSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          id="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleSubtitle }
        />
      </label>
    );
  }

  addMovieImg() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          id="image-input"
          imagePath={ imagePath }
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleImg }
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.addMovieTitle() }
        { this.addMovieSubtitle() }
        { this.addMovieImg() }
      </form>
    );
  }
}

export default AddMovie;
