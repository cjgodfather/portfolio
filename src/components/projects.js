import React from "react";

const Projects = props => {
  return (
    <section id="projects">
      <h3>My Recent Projects</h3>
      <h5>Here are a few recent works</h5>
      <div id="projects_list">
        <div className="container">
          <img
            width="200px"
            height="200px"
            src="pictures/random-acts.png"
            alt="random_act"
            className="image"
          />
          <div className="overlay">
            <a href="https://realrandomacts.netlify.com/">
              <div className="text">Random Act</div>
            </a>
          </div>
        </div>
        <div className="container">
          <img
            width="200px"
            height="200px"
            src="pictures/silent-auction.png"
            alt="random_act"
            className="image"
          />
          <div className="overlay">
            <a href="https://elegant-lamport-acc837.netlify.com/">
              <div className="text">Silent Auction</div>
            </a>
          </div>
        </div>
        <div className="container">
          <img
            width="200px"
            height="200px"
            src="pictures/empowered-conversations.png"
            alt="random_act"
            className="image"
          />
          <div className="overlay">
            <div className="text">Empowered Conversation</div>
          </div>
        </div>
        <div className="container">
          <img
            width="200px"
            height="200px"
            src="pictures/random-acts.png"
            alt="random_act"
            className="image"
          />
          <div className="overlay">
            <div className="text">AirBnB Optimal Price</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
