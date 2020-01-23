import React from "react";

import "./HomePage.css";
import Header from "../components/Header";
import HeroShot from "../components/HeroShot";
import HighlightsPanel from "../components/HighlightsPanel";
import Footer from "../components/Footer";
import NewsletterPanel from "../components/NewsletterPanel";
import NotificationPanel from "../components/NotificationPanel";

export const HomePage = () => {
  return (
    <div className="wrapper">
      <NotificationPanel />
      <div
        className="background-header"
        style={{ marginTop: "8.5rem", position: "relative" }}
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
