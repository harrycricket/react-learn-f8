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
  const [checked, setChecked] = useState([]);
  console.log(checked);
  const handleSubmit = () => {
    console.log(checked);
  };

  const handleChecked = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            onChange={() => handleChecked(course.id)}
            checked={checked.includes(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
