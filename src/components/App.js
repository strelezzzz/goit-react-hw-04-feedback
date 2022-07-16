import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = stateName => {
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const keys = Object.keys(this.state);
    console.log(this.state);
    console.log(this.props);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Feedback
          keys={keys}
          onHandleIncrement={this.handleIncrement}
          total={total}
          positivePercentage={positivePercentage}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>
    );
  }
}

export default App;
