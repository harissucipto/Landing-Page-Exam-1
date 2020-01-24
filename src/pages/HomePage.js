import React, { useState, useEffect, useMemo, useCallback } from "react";
import useDimensions from "react-use-dimensions";
import { useScrollYPosition } from "react-use-scroll-position";
import useLocalStorage from "react-use-localstorage";

import "./HomePage.css";
import Header from "../components/Header";
import HeroShot from "../components/HeroShot";
import HighlightsPanel from "../components/HighlightsPanel";
import Footer from "../components/Footer";
import NewsletterPanel from "../components/NewsletterPanel";
import NotificationPanel from "../components/NotificationPanel";

const initialTime = 10 * 1000;
const Event1 = "scroll";
const Event2 = "countDown";

export const HomePage = () => {
  const [notifRef, { height }] = useDimensions();
  const [pageRef, pageState] = useDimensions();
  const [isNotfiOpen, setIsNotfiOpen] = useState(true);
  const scrollY = useScrollYPosition();
  const [stringIsOpenPanelN, setIsOpenPanelN] = useLocalStorage(
    "stringIsOpenPanelN",
    false
  );
  const [typeActiveEvent, setTypeActiveEvent] = useLocalStorage(
    "typeActiveEvent",
    Event1
  );
  const isOpenPanelN = useMemo(() => JSON.parse(stringIsOpenPanelN), [
    stringIsOpenPanelN
  ]);
  const fullHeight = useMemo(
    () => Math.abs(pageState.y) + (isNotfiOpen ? height : 0),
    [pageState, isNotfiOpen, height]
  );

  const ToggleEvent2 = useCallback(() => {
    setIsOpenPanelN(false);
    setTypeActiveEvent(Event2);
  }, [setIsOpenPanelN, setTypeActiveEvent]);

  const ToggleEvent3 = useCallback(() => {
    // Closed Not Revive
    setIsOpenPanelN(false);
    setTypeActiveEvent("none");
  }, [setIsOpenPanelN, setTypeActiveEvent]);

  const handleClosePanelN = useCallback(() => {
    setIsOpenPanelN(false);
    if (typeActiveEvent === Event1) {
      ToggleEvent2();
    }
    if (typeActiveEvent === Event2) {
      ToggleEvent3();
    }
  }, [setIsOpenPanelN, ToggleEvent2, ToggleEvent3, typeActiveEvent]);

  // reset local
  // useEffect(() => {
  //   setIsOpenPanelN(false);
  //   setTypeActiveEvent(Event1);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    // trigger event1 when scroll to page
    if (typeActiveEvent === Event1 && scrollY >= fullHeight / 3) {
      setIsOpenPanelN(true);
    }
    // trigger event 2 when active
    if (typeActiveEvent === Event2 && !isOpenPanelN) {
      const timer1 = setTimeout(() => {
        setIsOpenPanelN(true);
      }, initialTime);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [typeActiveEvent, scrollY, setIsOpenPanelN, isOpenPanelN, fullHeight]);

  return (
    <div className="wrapper" ref={pageRef}>
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
      {isOpenPanelN && <NewsletterPanel setIsOpen={handleClosePanelN} />}
    </div>
  );
};
