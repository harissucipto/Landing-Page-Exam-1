import React from "react";
import "./notificationPanel.css";

const NotificationPanel = () => {
  return (
    <div className="notificationPanel">
      <div className="notification">
        <p className="notification-text">
          By accessing and using this website, you acknowledge that you have
          read and understand our Cookie Policy, Privacy Policy, and our Terms
          of Service.
        </p>
        <button className="notifcation-button">Got it</button>
      </div>
    </div>
  );
};

export default NotificationPanel;