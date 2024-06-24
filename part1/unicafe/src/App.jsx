import { useState } from "react";

const Button = ({ text, onClick }) => {
  console.log(onClick);
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine
        text="average"
        value={(good - bad) / (good + neutral + bad)}
      />
      <StatisticLine
        text="positive"
        value={(good / (good + neutral + bad)) * 100 + "%"}
      />
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleGood = () => {
    setGood(good + 1);
    setFeedbackGiven(true);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setFeedbackGiven(true);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setFeedbackGiven(true);
  };

  return (
    <div>
      <h1>give feedback</h1>

      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
      <h1>statistics</h1>
      {feedbackGiven ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default App;
