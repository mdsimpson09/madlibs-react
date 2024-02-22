// StoryOptions.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StoryOptions from './StoryOptions';

describe('StoryOptions', () => {
  test('clicking a story option button calls setStoryOption with correct story', () => {
    const setStoryOptionMock = jest.fn();
    render(<StoryOptions setStoryOption={setStoryOptionMock} />);

    fireEvent.click(screen.getByText(/story 1/i));
    expect(setStoryOptionMock).toHaveBeenCalledWith('story1');

    fireEvent.click(screen.getByText(/story 2/i));
    expect(setStoryOptionMock).toHaveBeenCalledWith('story2');

    fireEvent.click(screen.getByText(/story 3/i));
    expect(setStoryOptionMock).toHaveBeenCalledWith('story3');
  });
});