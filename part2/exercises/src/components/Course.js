import { Header } from "./Header";
import { Content } from "./Content";
import { Total } from "./Total";

export const Course = ({ courses }) => {
  return courses.map((course) => (
    <li  key={course.id} style={{listStyle: 'none'}}>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </li>
  ));
};
    
    
  
