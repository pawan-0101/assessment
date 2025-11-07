import { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus('Please fill in all fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post('https://vernanbackend.ezlab.in/api/contact-us/', formData);
      if (response.status === 200) {
        setStatus('Form Submitted');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
          />
        </div>

        <button type="submit">Submit</button>
        
        {status && <div className={`status-message ${status === 'Form Submitted' ? 'success' : 'error'}`}>
          {status}
        </div>}
      </form>
    </div>
  );
};

export default ContactForm;