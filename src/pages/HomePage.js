import React from "react";
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

  return (
    <div className="wrapper">
      {<NotificationPanel ref={notifRef} />}
      <div
        className="background-header"
        style={{ marginTop: `${height}px`, position: "relative" }}
      >
        <Header />
        <HeroShot />
      </div>
      <HighlightsPanel />
      <Footer />
      <NewsletterPanel />
    </div>
  );
};
