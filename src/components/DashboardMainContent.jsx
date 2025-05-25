// File: src/components/DashboardMainContent.jsx
import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <section className="dashboard-top">
        <DashboardOverview />
        <div className="right-panel">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </section>
      <section className="dashboard-bottom">
        <ActivityFeed />
      </section>
    </main>
  );
}

export default DashboardMainContent;
