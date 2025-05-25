import React from "react";
// import "../styles/UpcomingSchedule.css";
import '../styles/DashboardMainContent.css';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      <div className="schedule-group">
        <div className="schedule-day">On Thursday</div>
        <div className="schedule-tag light-purple">
          🩺 Health checkup complete <span>11:00 AM</span>
        </div>
        <div className="schedule-tag light-blue">
          👁️ Ophthalmologist <span>3:00 PM</span>
        </div>

        <div className="schedule-day">On Saturday</div>
        <div className="schedule-tag light-pink">
          ❤️ Cardiologist <span>12:00 AM</span>
        </div>
        <div className="schedule-tag light-gray">
          🧠 Neurologist <span>4:00 PM</span>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
