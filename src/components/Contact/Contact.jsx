import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/contact", formData);
      alert(response.data.message); // Show success message
      
      // Reset the form after submission
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("There was an error submitting your message.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Your Name" required 
              value={formData.name} onChange={handleChange} />
          </div>

          <div className="input-group">
            <input type="email" name="email" placeholder="Your Email" required 
              value={formData.email} onChange={handleChange} />
          </div>

          <div className="input-group">
            <input type="text" name="subject" placeholder="Subject" required 
              value={formData.subject} onChange={handleChange} />
          </div>

          <div className="input-group">
            <textarea name="message" placeholder="Your Message" rows="5" required 
              value={formData.message} onChange={handleChange}></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
