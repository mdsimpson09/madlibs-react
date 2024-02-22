import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MadlibForm from './MadlibForm';

describe('MadlibForm', () => {
  test('renders all input fields and a submit button', () => {
    render(<MadlibForm setStory={() => {}} />);

    // Check for each input field's presence
    expect(screen.getByPlaceholderText('Noun')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Adjective')).toBeInTheDocument();

    // Use getAllByPlaceholderText and differentiate by their order
    const [verbInput, adverbInput] = screen.getAllByPlaceholderText(/verb/i);

    // Check if verb and adverb inputs are in the document
    expect(verbInput).toBeInTheDocument(); // This should be the verb input
    expect(adverbInput).toBeInTheDocument(); // This should be the adverb input

    // Check for the submit button's presence
    expect(screen.getByRole('button', { name: /generate story/i })).toBeInTheDocument();
  });

  test('calls setStory when form is submitted with all fields filled', () => {
    const setStoryMock = jest.fn();
    render(<MadlibForm setStory={setStoryMock} />);

    // Correctly target each input by their specific attributes
    const nounInput = screen.getByPlaceholderText('Noun');
    const adjectiveInput = screen.getByPlaceholderText('Adjective');
    const inputs = screen.getAllByPlaceholderText(/verb/i);
    const verbInput = inputs.find(input => input.name === "verb");
    const adverbInput = inputs.find(input => input.name === "adverb");

    // Simulate user input for each field
    fireEvent.change(nounInput, { target: { value: 'dog' } });
    fireEvent.change(verbInput, { target: { value: 'barked' } });
    fireEvent.change(adjectiveInput, { target: { value: 'loud' } });
    fireEvent.change(adverbInput, { target: { value: 'quickly' } });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /generate story/i }));

    // Verify setStory was called
    expect(setStoryMock).toHaveBeenCalled();
  });
});
