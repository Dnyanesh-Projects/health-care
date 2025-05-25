import React from 'react';
import '../styles/AnatomySection.css';
import { healthIndicators } from '../data/healthStatus';

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Human_silhouette.svg"
        alt="Human Anatomy"
        className="anatomy-image"
      />
      {healthIndicators.map(({ id, name, status, color, position, lastCheck }) => (
        <div
          key={id}
          className="dot-wrapper"
          style={{ top: position.top, left: position.left }}
        >
          <div className="dot" style={{ backgroundColor: color }}></div>
          <div className="tooltip">
            <strong>{name}</strong>
            <p className="small-text">Last: {lastCheck}</p>
            <p className={`status ${status === 'Healthy' ? 'green' : 'red'}`}>{status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnatomySection;
