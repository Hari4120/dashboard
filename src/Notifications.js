import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import { Switch, FormControlLabel } from '@mui/material';
import './Notifications.css';

const Notifications = () => {
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const handleSaveChanges = () => {
    setShowSavedMessage(true);
    setTimeout(() => {
      setShowSavedMessage(false);
    }, 3000);
  };

  return (
    <div className="notifications-container">
       <h3 className="main-heading">Notification Settings</h3>
      <div className="notification-section">
        <h5>Security Notifications</h5>
        <div className="notification-box">
          <FormControlLabel
            control={<Switch />}
            label="Receive security notifications"
          />
        </div>
      </div>

      <div className="notification-section">
        <h5>Email</h5>
        <div className="notification-box">
          <FormControlLabel
            control={<Switch />}
            label="Receive email notifications"
          />
          <FormControlLabel
            control={<Switch />}
            label="Receive promotional emails"
          />
        </div>
      </div>

      <div className="notification-section">
        <h5>SMS</h5>
        <div className="notification-box">
          <FormControlLabel
            control={<Switch />}
            label="Receive SMS notifications"
          />
        </div>
      </div>

      <div className="notification-section">
        <h5>Requests</h5>
        <div className="notification-box">
          <FormControlLabel
            control={<Switch />}
            label="Receive request notifications"
          />
        </div>
      </div>

      <Button variant="primary" type="button" onClick={handleSaveChanges}>
        Save Changes
      </Button>

      {showSavedMessage && (
        <div className="saved-message">Saved</div>
      )}

    </div>
  );
};

export default Notifications;