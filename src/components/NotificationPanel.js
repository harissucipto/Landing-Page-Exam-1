import React, { forwardRef } from "react";
import SlideDown from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import "./notificationPanel.css";

const NotificationPanel = forwardRef((props, ref) => {
  const { setIsOpen, isOpen } = props;

  return (
    <SlideDown
      className={"dropdown-panel notificationPanel"}
      ref={ref}
      closed={!isOpen}
      transitionOnAppear={false}
    >
      <div className="notification">
        <p className="notification-text">
          By accessing and using this website, you acknowledge that you have
          read and understand our Cookie Policy, Privacy Policy, and our Terms
          of Service.
        </p>
        <button className="notifcation-button" onClick={() => setIsOpen(false)}>
          Got it
        </button>
      </div>
    </SlideDown>
  );
});

export default NotificationPanel;
