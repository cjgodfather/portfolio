import React from "react";

const Projects = props => {
  return (
    <section id="projects">
      <h3>My Recent Projects</h3>
      <h5>Here are a few recent works</h5>
      <div id="projects_list">
        <div class="container">
          <img src="pictures/random-acts.png" alt="random_act" class="image" />
          <div class="overlay">
            <div class="text">Random Act</div>
          </div>
        </div>
        <div class="container">
          <img
            src="pictures/silent-auction.png"
            alt="random_act"
            class="image"
          />
          <div class="overlay">
            <div class="text">Silent Auction</div>
          </div>
        </div>
        <div class="container">
          <img src="pictures/random-acts.png" alt="random_act" class="image" />
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
        <div class="container">
          <img src="pictures/random-acts.png" alt="random_act" class="image" />
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
