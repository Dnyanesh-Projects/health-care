// File: src/components/CalendarView.jsx
import React from 'react';
// import '../styles/CalendarView.css';
import '../styles/DashboardMainContent.css';
function CalendarView() {
  const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  const dates = [26, 27, 28, 29, 30, 1, 2];
  const selectedTimes = {
    26: '09:00',
    28: '11:00',
    31: '09:00',
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3>May 2025</h3>
        <div className="arrows">
          <span className="arrow">&lt;</span>
          <span className="arrow">&gt;</span>
        </div>
      </div>
      <div className="calendar-grid">
        {days.map((day, index) => (
          <div className="calendar-column" key={day}>
            <div className="day">{day}</div>
            <div
              className={`date ${selectedTimes[dates[index]] ? 'selected' : ''}`}
            >
              {dates[index]}
            </div>
            <div className="times">
              {[8, 9, 10, 11, 12, 13, 14].map((hour) => {
                const time = `${hour.toString().padStart(2, '0')}:00`;
                const isSelected = selectedTimes[dates[index]] === time;
                return (
                  <div
                    key={time}
                    className={`time-slot ${isSelected ? 'active' : ''}`}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="appointments">
        <div className="appointment-card dentist">
          <p><strong>Dentist</strong></p>
          <p>09:00 - 11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>
        <div className="appointment-card physiotherapy">
          <p><strong>Physiotherapy Appointment</strong> 🦴</p>
          <p>11:00 - 12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
