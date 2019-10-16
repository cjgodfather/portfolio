import React from "react";

const Projects = props => {
  return (
    <section id="projects">
      <h3>My Recent Projects</h3>
      <h5>Here are a few recent works</h5>
      <div id="projects_list">
        <div id="project">
          <img src="/pictures/random-acts.png" alt="react" />
          <div id="title">
            <a href="https://github.com/buildweek-random-acts-generator/UI-CJ">
              <h5>Random Acts Generators</h5>
            </a>
            <p id="details">fadsfdasfadsfadsfdaf</p>
          </div>
        </div>
        <div id="project">
          <img src="/pictures/silent-auction.png" alt="django" />
          <div id="title">
            <a href="https://elegant-lamport-acc837.netlify.com/">
              <h5>Silent Auction</h5>
            </a>
          </div>
        </div>
        <div id="project">
          <img src="/pictures/hooks.png" alt="hooks" />
          <div id="title">
            <a href="#">
              <p>Title</p>
            </a>
          </div>
        </div>
        <div id="project">
          <img src="/pictures/scrapy.png" alt="project" />
          <div id="title">
            <a pef="#">
              <p>Title</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
