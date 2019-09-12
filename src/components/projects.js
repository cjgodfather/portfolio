import React from "react";

const Projects = props => {
  return (
    <section id="projects">
      <h3>My Recent Projects</h3>
      <h4>Here are a few recent works</h4>
      <div id="projects_list">
        <div id="project">
          <figure>
            <img
              src="/pictures/random-acts.png"
              width="300"
              height="200"
              alt="react"
            />
            <figcaption>
              <a href="https://github.com/buildweek-random-acts-generator/UI-CJ">
                <h4>Random Acts Generators</h4>
              </a>
            </figcaption>
          </figure>
        </div>
        <div id="project">
          <figure>
            <img
              src="/pictures/django.png"
              alt="django"
              width="300"
              height="200"
            />
            <figcaption>
              <a href="#">
                <h4>Title</h4>
              </a>
            </figcaption>
          </figure>
        </div>
        <div id="project">
          <figure>
            <img
              src="/pictures/hooks.png"
              alt="hooks"
              width="300"
              height="200"
            />
            <figcaption>
              <a href="#">
                <h4>Title</h4>
              </a>
            </figcaption>
          </figure>
        </div>
        <div id="project_1">
          <figure>
            <img
              src="/pictures/scrapy.png"
              alt="project_1"
              width="300"
              height="200"
            />
            <figcaption>
              <a href="#">
                <h4>Title</h4>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Projects;
