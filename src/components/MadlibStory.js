//src/MadlibStory.js
import React from 'react';

const MadlibStory = ({ story, resetStory }) => {
  return (
    <div className="MadlibStory">
      <h1>Your Mad Lib Story</h1>
      <p>{story}</p>
      <button onClick={resetStory}>Restart</button>
    </div>
  );
};

export default MadlibStory;