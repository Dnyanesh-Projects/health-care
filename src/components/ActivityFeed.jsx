import React from "react";
// import "../styles/ActivityFeed.css";
import '../styles/DashboardMainContent.css';
// import "../styles/ActivityFeed.css";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const appointments = [3, 1, 2, 3, 0, 2, 1]; // Optional: can control bar heights consistently

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <span>3 appointment on this week</span>
      </div>
      <div className="activity-bars">
        {days.map((day, i) => (
          <div className="activity-day" key={i}>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ height: `${appointments[i] * 20 + 10}px` }}
              />
            </div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
