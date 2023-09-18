import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import StoryOptions from './StoryOptions'; // Optional for super bonus
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

class App extends Component {
  constructor() {
    super();
    this.state = {
      story: null,
    };
  }

  setStory = (story) => {
    this.setState({ story });
  };

  resetStory = () => {
    this.setState({ story: null });
  };

  render() {
    return (
      <div className="App">
        {/* Optional for super bonus */}
        <StoryOptions setStory={this.setStory} />

        {this.state.story ? (
          <MadlibStory story={this.state.story} resetStory={this.resetStory} />
        ) : (
          <MadlibForm setStory={this.setStory} />
        )}
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
