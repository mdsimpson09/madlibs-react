import React, { Component } from 'react';
import GrammarDefinitions from './GrammarDefinitions';
import '../App.css';

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
    const { storyOption } = this.props; 
    let story = '';

    if (!noun || !verb || !adjective || !adverb) {
      alert('Please fill out all fields.');
    } else {
      switch (storyOption) {
        case 'story1':
          story = `Once upon a time, a ${adjective} ${noun} ${adverb} ${verb} happily ever after.`;
          break;
        case 'story2':
          story = `In a faraway kingdom, the ${adjective} ${noun} ${verb} ${adverb} to save the day.`;
          break;
        case 'story3':
          story = `Under a blue sky, a ${adjective} ${noun} ${verb} ${adverb}, creating a legend for ages.`;
          break;
        default:
          story = 'No story selected. Please choose a story option.';
      }
      this.props.setStory(story);
    }
  };
      render() {
        return (
          <div>
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
              <h6>Need help? Check below for examples!</h6>
              <button type="submit">Generate Story</button>
            </form>
          </div>
          <GrammarDefinitions />
          </div>
          
        );
      }
    }
    
    export default MadlibForm;