import React, {Component} from "react";
import css from './Feedback.module.css'
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";


class Feedback extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  
    leaveFeedback = event => {
      const button = event.target.name;
      this.setState(prevDef => ({
        [button]: prevDef[button] + 1,
      }));
    };
  
    countTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad;
    };
  
    countPositiveFeedbackPercentage = () => {
      return Math.floor(
        (this.state.good * 100) /
          (this.state.good + this.state.neutral + this.state.bad)
      );
    };
  
    render() {
      return (
        <div className={css.feedback}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.leaveFeedback}
            />
          </Section>
  
          <Section title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <p>No feedback given.</p>
            )}
          </Section>
        </div>
      );
    }
  }
  
  export default Feedback;