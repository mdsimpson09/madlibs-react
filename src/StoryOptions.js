import React, { Component } from 'react';

class StoryOptions extends Component {
  render() {
    return (
      <div className="StoryOptions">
        <h2>Select a Story</h2>
        <button onClick={() => this.props.setStory('story1')}>Story 1</button>
        <button onClick={() => this.props.setStory('story2')}>Story 2</button>
        {/* Add more story options as needed */}
      </div>
    );
  }
}

export default StoryOptions;