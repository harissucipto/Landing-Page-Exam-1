import React from "react";
import Header from "../components/Header";
import HeroShot from "../components/HeroShot";
import HighlightsPanel from "../components/HighlightsPanel";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <div>
      <div>
        <Header />
        <HeroShot />
      </div>
      <HighlightsPanel />
      <Footer />
    </div>
  );
};
