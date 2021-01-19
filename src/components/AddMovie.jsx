// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'subtitle-input': '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderTitleInput() {
    const { 'title-input': titleInput } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title-input"
          name="title-input"
          data-testid="title-input"
          value={ titleInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { 'subtitle-input': subtitleInput } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle-input"
          name="subtitle-input"
          data-testid="subtitle-input"
          value={ subtitleInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitleInput() }
        { this.renderSubtitleInput() }
      </form>
    );
  }
}

export default AddMovie;
