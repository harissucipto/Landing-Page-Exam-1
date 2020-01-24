import React from "react";
import "./newsletterPanel.css";
import SlideDown from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const NewsletterPanel = ({ setIsOpen, isOpen }) => {
  return (
    <SlideDown className={"dropdown-panel newsletter-panel"} closed={!isOpen}>
      <div className="close-div">
        <button className="close-button" onClick={() => setIsOpen(false)}>
          x
        </button>
      </div>
      <p className="h1-p">Get latest updates in web technologies</p>
      <p className="h2-p">
        I write articles related to web technologies, such as design trends,
        development tools, UI/UX case studies and reviews, and more. Sign up to
        my newsletter to get them all.
      </p>
      <form className="form-p" onSubmit={e => e.preventDefault()}>
        <input
          type="email"
          placeholder="Email address"
          className="input-email-p"
        />
        <input type="submit" value="Count me in!" className="button-p" />
      </form>
    </SlideDown>
  );
};

export default NewsletterPanel;
