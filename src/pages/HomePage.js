import React from "react";
import Header from "../components/Header";
import HeroShot from "../components/HeroShot";
import HighlightsPanel from "../components/HighlightsPanel";
import Footer from "../components/Footer";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="background-header">
        <Header />
        <HeroShot />
      </div>
      <HighlightsPanel />
      <Footer />
    </div>
  );
};
