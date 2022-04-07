import { StatisticLine } from "./StatisticLine";

export const Statistics = ({ good, neutral, bad, total }) => {
  if (total !== 0) {
    return (
      <>
        <StatisticLine text={"Good"} value={good} />
        <StatisticLine text={"Neutral"} value={neutral} />
        <StatisticLine text={"Bad"} value={bad} />
        <StatisticLine text={"Total"} value={total} />
        <StatisticLine text={"Average"} value={(good - bad) / total} />
        <StatisticLine text={"Positive"} value={(good / total) * 100} />
      </>
    );
  } else {
    return <h2>No feedback given</h2>;
  }
};
