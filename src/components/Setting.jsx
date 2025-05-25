import React, { useState } from 'react';
import '../styles/Whole.css';

function Setting() {
  const [profile, setProfile] = useState({
    name: 'Ram Awaghad ',
    email: 'ram@gmail.com',
    language: 'English',
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [name]: checked }
    }));
  };

  return (
    <div className="page settings-page">
      <h2>⚙️ Settings</h2>

      <section className="profile-settings">
        <h3>Profile Settings</h3>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              placeholder="Your full name"
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              placeholder="Your email address"
            />
          </label>
        </form>
      </section>

      <section className="notification-preferences">
        <h3>Notification Preferences</h3>
        <label>
          <input
            type="checkbox"
            name="email"
            checked={profile.notifications.email}
            onChange={handleNotificationChange}
          />
          Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            name="sms"
            checked={profile.notifications.sms}
            onChange={handleNotificationChange}
          />
          SMS Notifications
        </label>
        <label>
          <input
            type="checkbox"
            name="push"
            checked={profile.notifications.push}
            onChange={handleNotificationChange}
          />
          Push Notifications
        </label>
      </section>

      <section className="language-settings">
        <h3>Language</h3>
        <select
          name="language"
          value={profile.language}
          onChange={handleInputChange}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </section>

      <section className="account-management">
        <h3>Account Management</h3>
        <button className="btn btn-danger" onClick={() => alert('Account deleted!')}>
          Delete Account
        </button>
        <button className="btn btn-secondary" onClick={() => alert('Password reset link sent!')}>
          Reset Password
        </button>
      </section>
    </div>
  );
}

export default Setting;
