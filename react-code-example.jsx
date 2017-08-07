import React from 'react';
import $ from 'jquery';

class AddNewPokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: 0,
      types: '',
      imageUrl: ''
    };

    this.setNumber = this.setNumber.bind(this);
    this.setName = this.setName.bind(this);
    this.setTypes = this.setTypes.bind(this);
    this.setImage = this.setImage.bind(this);
    this.createNewPokemon = this.createNewPokemon.bind(this);

  }

  setNumber(e) {
    this.setState({
      number: e.target.value
    });
  }

  setName(e) {
    this.setState({
      name: e.target.value
    });
  }

  setTypes(e) {
    this.setState({
      types: e.target.value
    });
  }

  setImage(e) {
    this.setState({
      imageUrl: e.target.value
    });
  }

  createNewPokemon(e) {
    e.preventDefault();

    var splitTypes = this.state.types.split(' ');

    var newPoke = {
      name: this.state.name,
      number: this.state.number,
      types: splitTypes,
      imageUrl: this.state.imageUrl
    };

    $.post('/api/pokemon', function(err, data) {
      if (err) {
        console.warn('pokemon could not be added', err);
      } else {
        alert('pokemon added!');
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.createNewPokemon(e)}>
          <input placeholder="name" onChange={this.setName} value={this.state.name}/>
          <input placeholder="number" onChange={this.setNumber} value={this.state.number}/>
          <input placeholder="types" onChange={this.setTypes} value={this.state.types}/>
          <input placeholder="image" onChange={this.setImage} value={this.state.imageUrl}/>
          <button type="submit">Make new pokemon</button>
        </form>
      </div>
    );
  }
}

module.exports = AddNewPokemon;
