import React from "react";

const NewsletterPanel = () => {
  return (
    <div>
      <p>Get latest updates in web technologies</p>
      <p>
        I write articles related to web technologies, such as design trends,
        development tools, UI/UX case studies and reviews, and more. Sign up to
        my newsletter to get them all.
      </p>
      <form>
        <input type="email" placeholder="Email address" />
        <input type="submit" value="Count me in!" />
      </form>
    </div>
  );
};

export default NewsletterPanel;
