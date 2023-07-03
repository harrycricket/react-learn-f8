import React, { useState } from "react";

const courses = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "NodeJS, ExpressJS",
  },
  {
    id: 4,
    name: "Python",
  },
  {
    id: 5,
    name: "Dart",
  },
];

export default function TwowayBinding() {
  const [checked, setChecked] = useState();
  console.log(checked);
  const handleSubmit = () => {
    console.log(checked);
    console.log(courses[checked - 1]);
  };
  return (
    <div style={{ padding: "2rem" }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            onChange={() => setChecked(course.id)}
            checked={checked === course.id}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
