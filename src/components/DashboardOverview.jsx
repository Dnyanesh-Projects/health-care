// File: src/components/DashboardOverview.jsx
import React from 'react';
// import '../styles/DashboardOverview.css';
import '../styles/DashboardMainContent.css';
import { FaLungs, FaTooth, FaBone } from 'react-icons/fa';

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <div className="body-status">
        <div className="body-image-wrapper">
          <img
            src="/images/human-body.png"
            alt="Human Body"
            className="human-body"
          />
          <span className="label label-heart" role="img" aria-label="Healthy Heart">
            ❤️ Healthy Heart
          </span>
          <span className="label label-leg" role="img" aria-label="Healthy Leg">
            🦵 Healthy Leg
          </span>
        </div>
      </div>

      <div className="condition-cards">
        <div className="card card-lungs">
          <div className="card-header">
            <FaLungs size={20} aria-hidden="true" />
            <h4>Lungs</h4>
          </div>
          <p className="card-date">Date: 26 Okt 2021</p>
          <div className="progress-bar">
            <div className="progress red" style={{ width: '20%' }}></div>
          </div>
        </div>

        <div className="card card-teeth">
          <div className="card-header">
            <FaTooth size={20} aria-hidden="true" />
            <h4>Teeth</h4>
          </div>
          <p className="card-date">Date: 26 Okt 2021</p>
          <div className="progress-bar">
            <div className="progress green" style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className="card card-bone">
          <div className="card-header">
            <FaBone size={20} aria-hidden="true" />
            <h4>Bone</h4>
          </div>
          <p className="card-date">Date: 26 Okt 2021</p>
          <div className="progress-bar">
            <div className="progress orange" style={{ width: '30%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
