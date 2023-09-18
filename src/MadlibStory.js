import React from 'react';

const MadlibStory = ({ story, resetStory }) => {
  return (
    <div className="MadlibStory">
      <h2>Your Madlib Story</h2>
      <p>{story}</p>
      <button onClick={resetStory}>Restart</button>
    </div>
  );
};

export default MadlibStory;