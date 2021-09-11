import { useState } from 'react';
import Statistics from './list-statistics';
import FeedbackOptions from './feedback-options';
import Notification from './notification';
import Section from './section';
import './base-style.module.css';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };
  const feedbacksObj = { good, neutral, bad };
  const feedbackKeys = Object.keys(feedbacksObj);

  const countTotalFeedback = feedbackKeys.reduce(
    (acc, feedback) => acc + feedbacksObj[feedback],
    0,
  );
  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100,
  );

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          feedbackKeys={feedbackKeys}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            feedbacksObj={feedbacksObj}
            feedbackKeys={feedbackKeys}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
