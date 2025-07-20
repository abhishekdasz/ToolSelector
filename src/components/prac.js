import React, { useState } from "react";
import jsonData from "./prac.json";

const Prac = () => {
  const [initialData] = useState(jsonData);
  const [formData, setFormData] = useState(jsonData.student);
  
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStudents = formData.map((student, i) => 
        i===index ? { ...student, [name]: value } : student
    ) 
    setFormData(updatedStudents);
  }
  const handleSubmit = () => {
    console.log(formData);
  }

  return (
    <div>
      {formData.map((s, index) => (
        <div key={index}>
          <div>
            <label> Name: </label>
            <input type="text" name="name" value={s.name} onChange={e => handleChange(index, e)} />
          </div>
          <div>
            <label> Age: </label>
            <input type="number" name="age" value={s.age} onChange={e => handleChange(index, e)}/>
          </div>
          <div>
            <label> Dept: </label>
            <input type="text" name="dept" value={s.dept} onChange={e => handleChange(index, e)} />
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}> Submit </button>
    </div>
  );
};

export default Prac;
