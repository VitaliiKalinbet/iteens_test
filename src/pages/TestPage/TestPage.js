import React, { Component } from 'react';
import TestAnswer from '../../components/TestAnswer/TestAnswer';

const questions = [
  'for, while',
  'for, while, do while',
  'for, while, foreach',
  'for, while, do while,foreach',
  'Не знаю(((',
];

class TestPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>TestPage</h2>
        <TestAnswer
          questions={questions}
          // answered
          isCorrectAnswered
          correctAnswered="for, while, do while,foreach"
          incorrectAnswered="for, while"
        />
      </div>
    );
  }
}

export default TestPage;
