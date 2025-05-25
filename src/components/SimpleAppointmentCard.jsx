import React from 'react';
import '../styles/SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card">
      <div className="appointment-icon">🩺</div>
      <div className="appointment-details">
        <h3>{title}</h3>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
