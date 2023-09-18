import React, { Component } from 'react';

class MadlibForm extends Component {
  constructor() {
    super();
    this.state = {
      noun: '',
      verb: '',
      adjective: '',
      adverb: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { noun, verb, adjective, adverb } = this.state;
    if (!noun || !verb || !adjective || !adverb) {
      alert('Please fill out all fields.');
    } else {
      const story = `Once upon a time, a ${adjective} ${noun} ${adverb} ${verb} happily ever after.`;
      this.props.setStory(story);
    }
  };

  render() {
    return (
      <div className="MadlibForm">
        <h2>Fill in the Blanks</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="noun"
            placeholder="Noun"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="verb"
            placeholder="Verb"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="adjective"
            placeholder="Adjective"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="adverb"
            placeholder="Adverb"
            onChange={this.handleInputChange}
          />
          <button type="submit">Generate Story</button>
        </form>
      </div>
    );
  }
}

export default MadlibForm;