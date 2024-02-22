//src/storyoptions.js




import React, { Component } from 'react';

class StoryOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStory: null,
    };
  }
  selectStory = (story) => {
    this.setState({ selectedStory: story });
    this.props.setStoryOption(story);
  };

  render() {
    const { selectedStory } = this.state;
    return (
      <div>
        <h1 className='Story'>Mad Libs</h1>
      <h3 className='Input'>Humorously nonsensical stories created with <i>your</i> input!</h3>
      <div className="StoryOptions">
        <h4>Select a random story to get started</h4>
      
        <button 
          className={selectedStory === 'story1' ? 'active' : ''}
          onClick={() => this.selectStory('story1')}
        >
          Story 1
        </button>

        <button 
          className={selectedStory === 'story2' ? 'active' : ''}
          onClick={() => this.selectStory('story2')}
        >
          Story 2
        </button>

        <button 
          className={selectedStory === 'story3' ? 'active' : ''}
          onClick={() => this.selectStory('story3')}
        >
          Story 3
        </button>
      </div>
      </div>
    );
  }
}

export default StoryOptions;