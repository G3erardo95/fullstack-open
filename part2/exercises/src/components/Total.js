export const Total = ({ content }) => (
  <strong >
    Total of exercises{" "}
    {content.map((part) => part.exercises).reduce((a, b) => a + b)}
  </strong>
);
