import { Part } from "./Part";

export const Content = ({ content }) => (
  <>
    {content.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);
