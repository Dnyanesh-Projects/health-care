import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Import pages for different routes
import DashboardMainContent from './components/DashboardMainContent';
import History from './components/History';
// import Calendar from './components/Calendar';
import Appointments from './components/Appointments';
 import Statistics from './components/Statistics';
 import Tests from './components/Tests';
import Chat from './components/Chat';
 import Support from './components/Support';
import Setting from './components/Setting';

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardMainContent />} />
            <Route path="/history" element={<History />} />
            {/* <Route path="/calendar" element={<Calendar />} /> */}
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/support" element={<Support />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
