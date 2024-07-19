import React from "react";

const App = () => {
  const courses = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };
  const total = courses.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <div>
        <h1>{courses.name}</h1>
        {courses.parts.map((course) => (
          <li key={course.id}>
            {course.name}:{course.exercises}
          </li>
        ))}
      </div>
      <h4>Total exercises are {total}</h4>
    </div>
  );
};

export default App;
