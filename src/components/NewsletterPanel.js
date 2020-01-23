import React from "react";
import "./newsletterPanel.css";

const NewsletterPanel = () => {
  return (
    <div className="newsletter-panel">
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
    </div>
  );
};

export default NewsletterPanel;
