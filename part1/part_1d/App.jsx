import { useState } from "react";

const Button = ({ onclick, text }) => {
  <Button onclick={onclick}>{text}</Button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text}: {value}
    </div>
  );
};

const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="Average" value={(good - bad) / all} />
      <StatisticLine text="Positive" value={`${(good / all) * 100} %`} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setAll(updatedGood + neutral + bad);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setAll(good + updatedNeutral + bad);
  };

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setAll(good + neutral + updatedBad);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;
