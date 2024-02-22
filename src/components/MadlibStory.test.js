// MadlibStory.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MadlibStory from './MadlibStory';

describe('MadlibStory', () => {
  test('displays the story passed to it', () => {
    const testStory = 'Once upon a time, a loud dog quickly barked.';
    render(<MadlibStory story={testStory} resetStory={() => {}} />);

    expect(screen.getByText(testStory)).toBeInTheDocument();
  });

  test('calls resetStory when "Restart" button is clicked', () => {
    const resetStoryMock = jest.fn();
    render(<MadlibStory story="Once upon a time, a loud dog quickly barked." resetStory={resetStoryMock} />);

    fireEvent.click(screen.getByRole('button', { name: /restart/i }));
    
    expect(resetStoryMock).toHaveBeenCalled();
  });
});