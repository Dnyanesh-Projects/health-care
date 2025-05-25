import React, { useState } from 'react';
import '../styles/Appointment.css';

const doctorsList = [
  { name: 'Dr. Smith', profession: 'Cardiologist' },
  { name: 'Dr. Patel', profession: 'Dermatologist' },
  { name: 'Dr. Rakesh Mehta', profession: 'Orthopedic Surgeon' },
  { name: 'Dr. Anjali Deshmukh', profession: 'Gynecologist' },
  { name: 'Dr. Rahul Verma', profession: 'Pediatrician' },
  { name: 'Dr. Sneha Kulkarni', profession: 'Neurologist' },
];

function Appointments() {
  const [formData, setFormData] = useState({
    doctor: doctorsList[0].name,
    date: '',
    time: '',
    disease: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('appointments')) || [];
    existing.push(formData);
    localStorage.setItem('appointments', JSON.stringify(existing));
    alert(`Appointment booked with ${formData.doctor} on ${formData.date} at ${formData.time}`);
    window.location.reload();
  };

  return (
    <div className="appointment-container">
      <h2>Book Your Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <label>
          Doctor:
          <select name="doctor" value={formData.doctor} onChange={handleChange}>
            {doctorsList.map((doc, index) => (
              <option key={index} value={doc.name}>
                {doc.name} ({doc.profession})
              </option>
            ))}
          </select>
        </label>

        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>

        <label>
          Disease:
          <input type="text" name="disease" value={formData.disease} onChange={handleChange} placeholder="Enter disease" />
        </label>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
}

export default Appointments;
