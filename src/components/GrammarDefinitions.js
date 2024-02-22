import React from 'react';
import '../App.css';

const GrammarDefinitions = () => {
  return (
    <div className="GrammarDefinitions">
      <h2>Grammar Definitions</h2>
      <div className="Definition">
        <h3>Noun</h3>
        <p>A noun is a person, place, thing, or idea.</p>
        <p>Examples: apple, London, teacher, happiness</p>
      </div>
      <div className="Definition">
        <h3>Verb</h3>
        <p>A verb expresses action or being.</p>
        <p>Examples: run, jump, is, become</p>
      </div>
      <div className="Definition">
        <h3>Adjective</h3>
        <p>An adjective modifies or describes a noun or pronoun.</p>
        <p>Examples: blue, quick, tall, funny</p>
      </div>
      <div className="Definition">
        <h3>Adverb</h3>
        <p>An adverb modifies or describes a verb, an adjective, or another adverb.</p>
        <p>Examples: quickly, very, well, often</p>
      </div>
    </div>
  );
};

export default GrammarDefinitions;