import React, { useState, useEffect } from "react";
// Import your JSON file (with webpack, create-react-app, or Vite)
import jsonData from "./data.json"; 

const EditableDetail = () => {
  // Store the initial JSON details
  const [initialData] = useState(jsonData);
  // Store the editable values
  const [formData, setFormData] = useState(jsonData);

  useEffect(() => {
    // Log initial data when component mounts
    console.log("Initial JSON data:", initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated JSON data:", formData);
    // Normally, you might submit to a backend here to update a real file
    // For demonstration, we just log the changes
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input 
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age: </label>
        <input 
          name="age"
          value={formData.age}
          onChange={handleChange}
          type="number"
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditableDetail;
