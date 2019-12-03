import React from "react";

const Footer = props => {
  return (
    <section id="footer">
      <div>
        <img
          className="logo"
          src="/pictures/logo.png"
          width="35px"
          height="35px"
          alt="logo"
        />
        <h4>Learning, brainstorming, and creating new ideas together</h4>
        <div id="social_media">
          <a href="https://www.linkedin.com/in/chao-ji-113b594a/">
            <img
              src="/pictures/linkedin.png"
              width="28px"
              height="28px"
              alt="logo"
            />
          </a>
          <a href="https://www.facebook.com/chao.ji.129">
            <img
              src="/pictures/facebook.png"
              width="28px"
              height="28px"
              alt="logo"
            />
          </a>
          <a href="https://twitter.com/ChaoJi99072969">
            <img
              src="/pictures/twitter.png"
              width="28px"
              height="28px"
              alt="logo"
            />
          </a>
          <a href="https://github.com/cjgodfather">
            <img
              src="/pictures/github.png"
              width="28px"
              height="28px"
              alt="logo"
            />
          </a>
        </div>
        <p>
          Handcrafted by me
          <span id="copyright">
            <img
              src="/pictures/copyright.png"
              width="15px"
              height="15px"
              alt="logo"
            />
          </span>
          2019
        </p>
        <p id="react">Made with React</p>
      </div>
    </section>
  );
};

export default Footer;
