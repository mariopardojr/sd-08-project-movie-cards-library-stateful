import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    //   genre: 'action',
    };
  }

  onChangeHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  title(handler, title) {
    return (
      <Input
        onChangeFunction={ handler }
        name="title"
        type="text"
        labelText="Título"
        datadolabel="title-input-label"
        datadoinput="title-input"
        value={ title }
      />
    );
  }

  subtitle(handler, a) {
    return (
      <Input
        onChangeFunction={ handler }
        name="subtitle"
        type="text"
        labelText="Subtítulo"
        datadolabel="subtitle-input-label"
        datadoinput="subtitle-input"
        value={ a }
      />
    );
  }

  image(handler, a) {
    return (
      <Input
        onChangeFunction={ handler }
        name="imagePath"
        type="text"
        labelText="Imagem"
        datadolabel="image-input-label"
        datadoinput="image-input"
        value={ a }
      />
    );
  }

  sinopse(storyline, func) {
    return (
      <label htmlFor="story" data-testid="storyline-input-label">
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          name="storyline"
          onChange={ func }
        />
      </label>
    );
  }

  number(handler, a) {
    return (
      <Input
        onChangeFunction={ handler }
        name="rating"
        type="number"
        labelText="Avaliação"
        datadolabel="rating-input-label"
        datadoinput="rating-input"
        value={ a }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form>
        {this.title(this.onChangeHandler, title)}
        {this.subtitle(this.onChangeHandler, subtitle)}
        {this.image(this.onChangeHandler, imagePath)}
        {this.sinopse(storyline, this.onChangeHandler)}
        {this.number(this.onChangeHandler, rating)}
      </form>
    );
  }
}

export default AddMovie;
