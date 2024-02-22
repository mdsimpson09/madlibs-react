//src/app.js

import React, { Component } from 'react';
import StoryOptions from './components/StoryOptions';
import MadlibForm from './components/MadlibForm';
import MadlibStory from './components/MadlibStory';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStoryOption: null, 
      story: null,
    };
  }

  setStoryOption = (option) => {
    this.setState({ currentStoryOption: option, story: null }); 
  };

  setStory = (story) => {
    this.setState({ story });
  };

  resetStory = () => {
    this.setState({ story: null, currentStoryOption: null }); 
  };

  render() {
    return (
      <div className="App">
        {!this.state.story && (
          <StoryOptions setStoryOption={this.setStoryOption} />
        )}

        {this.state.currentStoryOption && !this.state.story ? (
          <MadlibForm setStory={this.setStory} storyOption={this.state.currentStoryOption} />
        ) : null}

        {this.state.story ? (
          <MadlibStory story={this.state.story} resetStory={this.resetStory} />
        ) : null}
      </div>
    );
  }
}

export default App;


