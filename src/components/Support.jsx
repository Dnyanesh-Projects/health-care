import React, { useState } from 'react';
import '../styles/Whole.css';

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your message and will get back to you at ${formData.email}.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page support-page">
      <h2>🆘 Support Center</h2>
      <p>We're here to help! Reach out to us through any of the following ways:</p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Email:</strong> support@healthcare.com</li>
          <li><strong>Phone:</strong> +91-9876543210</li>
          <li><strong>Address:</strong> 123 Health St, Wellness City, India</li>
          <li><strong>Working Hours:</strong> Mon - Fri, 9 AM - 6 PM</li>
        </ul>
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions (FAQs)</h3>
        <ul>
          <li><strong>Q:</strong> How do I book an appointment?<br /><strong>A:</strong> Use the 'Appointments' page to select a doctor and book a slot easily.</li>
          <li><strong>Q:</strong> What if I need to cancel or reschedule?<br /><strong>A:</strong> Contact us at support@healthcare.com or call us to modify your bookings.</li>
          <li><strong>Q:</strong> How do I get my test results?<br /><strong>A:</strong> Test results are sent via email within 24-48 hours of the test.</li>
        </ul>
      </div>

      <div className="contact-form-section">
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Your name"
            />
          </label>

          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="Your email"
            />
          </label>

          <label>
            Message:
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              placeholder="Type your message here..."
              rows="4"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Support;
