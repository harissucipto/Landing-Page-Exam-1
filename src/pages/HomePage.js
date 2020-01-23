import React, { useState } from "react";
import useDimensions from "react-use-dimensions";

import "./HomePage.css";
import Header from "../components/Header";
import HeroShot from "../components/HeroShot";
import HighlightsPanel from "../components/HighlightsPanel";
import Footer from "../components/Footer";
import NewsletterPanel from "../components/NewsletterPanel";
import NotificationPanel from "../components/NotificationPanel";

export const HomePage = () => {
  const [notifRef, { height }] = useDimensions();
  const [isNotfiOpen, setIsNotfiOpen] = useState(true);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(true);

  return (
    <div className="wrapper">
      {isNotfiOpen && (
        <NotificationPanel ref={notifRef} setIsOpen={setIsNotfiOpen} />
      )}
      <div
        className="background-header"
        style={{
          marginTop: isNotfiOpen ? `${height}px` : 0,
          position: "relative"
        }}
      >
        <Header />
        <HeroShot />
      </div>
      <HighlightsPanel />
      <Footer />
      {isNewsletterOpen && <NewsletterPanel setIsOpen={setIsNewsletterOpen} />}
    </div>
  );
};
