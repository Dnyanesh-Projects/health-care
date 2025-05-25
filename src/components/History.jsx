import React, { useEffect, useState } from 'react';
import '../styles/History.css';

function History() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(savedAppointments);
  }, []);

  return (
    <div className="history-container">
      <h2 className="history-title">Appointment History</h2>
      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments booked yet.</p>
      ) : (
        <ul className="history-list">
          {appointments.map((appt, index) => (
            <li className="history-card" key={index}>
              <h3>{appt.doctor}</h3>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <p><strong>Disease:</strong> {appt.disease || 'N/A'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
