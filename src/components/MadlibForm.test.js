import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MadlibForm from './MadlibForm';

describe('MadlibForm', () => {
  test('renders all input fields and a submit button', () => {
    render(<MadlibForm setStory={() => {}} />);

    expect(screen.getByPlaceholderText('Noun')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Adjective')).toBeInTheDocument();

    const [verbInput, adverbInput] = screen.getAllByPlaceholderText(/verb/i);

    expect(verbInput).toBeInTheDocument(); 
    expect(adverbInput).toBeInTheDocument(); 
    expect(screen.getByRole('button', { name: /generate story/i })).toBeInTheDocument();
  });

  test('calls setStory when form is submitted with all fields filled', () => {
    const setStoryMock = jest.fn();
    render(<MadlibForm setStory={setStoryMock} />);

  
    const nounInput = screen.getByPlaceholderText('Noun');
    const adjectiveInput = screen.getByPlaceholderText('Adjective');
    const inputs = screen.getAllByPlaceholderText(/verb/i);
    const verbInput = inputs.find(input => input.name === "verb");
    const adverbInput = inputs.find(input => input.name === "adverb");

    
    fireEvent.change(nounInput, { target: { value: 'dog' } });
    fireEvent.change(verbInput, { target: { value: 'barked' } });
    fireEvent.change(adjectiveInput, { target: { value: 'loud' } });
    fireEvent.change(adverbInput, { target: { value: 'quickly' } });

    fireEvent.click(screen.getByRole('button', { name: /generate story/i }));

    expect(setStoryMock).toHaveBeenCalled();
  });
});
