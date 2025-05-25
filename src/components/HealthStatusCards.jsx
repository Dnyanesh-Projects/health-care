import React from 'react';
// import { healthStatusCards } from '../data/healthStatus';
import { healthStatusCards } from '../data/healthStatus';
import '../styles/HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthStatusCards.map(({ id, name, lastCheck, status }) => (
        <div key={id} className={`card ${status === 'Healthy' ? 'healthy' : 'issue'}`}>
          <h3>{name}</h3>
          <p>Last check: {lastCheck}</p>
          <p className="status">{status}</p>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
