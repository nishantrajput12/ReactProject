// src/components/FormComponent.js
import React, { useEffect, useState } from 'react';

const Form = () => {
 const [email,setEmail] =useState('');
 const [name,setName] =useState('');
 const [message,setMessage] =useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail(value)
    console.log("VALUE is:",value)
    setFormData({ ...formData, [name]: value });
  };
  const handleReset = (e) => {
    setFormData({ ...formData, [name]: ' ', [email]:'' ,[message]:''});
   setEmail('')
  };
  useEffect(()=>{
    console.log("FORM DATA:",formData)
  },[formData])
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or API
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button onClick={handleReset}type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
