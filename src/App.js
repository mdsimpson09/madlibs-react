//src/app.js

import React, { Component } from 'react';
import StoryOptions from './StoryOptions';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';
import GrammarDefinitions from './GrammarDefinitions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStoryOption: null, // Added state to hold the story option
      story: null,
    };
  }

  setStoryOption = (option) => {
    this.setState({ currentStoryOption: option, story: null }); // Update to set the story option
  };

  setStory = (story) => {
    this.setState({ story });
  };

  resetStory = () => {
    this.setState({ story: null, currentStoryOption: null }); // Reset both story and story option
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



// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import StoryOptions from './StoryOptions'; // Optional for super bonus
// import MadlibForm from './MadlibForm';
// import MadlibStory from './MadlibStory';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       story: null,
//     };
//   }

//   setStory = (story) => {
//     this.setState({ story });
//   };

//   resetStory = () => {
//     this.setState({ story: null });
//   };

//   render() {
//     return (
//       <div className="App">
//         {/* Optional for super bonus */}
//         <StoryOptions setStory={this.setStory} />

//         {this.state.story ? (
//           <MadlibStory story={this.state.story} resetStory={this.resetStory} />
//         ) : (
//           <MadlibForm setStory={this.setStory} />
//         )}
//       </div>
//     );
//   }
// }

// export default App;


