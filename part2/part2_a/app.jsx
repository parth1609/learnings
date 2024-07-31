import React from "react";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const Part = ({ part }) => (
    <li>
      {part.name}: {part.exercises}
    </li>
  );

  const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return <p>Total is {total}</p>;
  };

  const Course = ({ course }) => (
    <div>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </ul>
      <Total parts={course.parts} />
    </div>
  );

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;
