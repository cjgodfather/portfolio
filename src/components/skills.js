import React from "react";

const Skills = props => {
  return (
    <section id="skills">
      <div id="frontend">
        <img
          src="/pictures/frontend.png"
          width="45"
          height="45"
          alt="frontend_pic"
        />
        <h3>Front-end Developer</h3>
        <p id="motto">I like create fun and impressive user experience</p>
        <h5>Tools:</h5>
        <ul id="skill_list">
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>HTML</li>
        </ul>
      </div>
      <div id="backend">
        <img
          src="/pictures/backend.png"
          width="45"
          height="45"
          alt="backend_pic"
        />
        <h3>Back-end Developer</h3>
        <p id="motto">I like create fun and impressive user experience</p>
        <h5>Tools:</h5>
        <ul id="skill_list">
          <li>Python</li>
          <li>Django</li>
          <li>SQL</li>
          <li>REST API</li>
        </ul>
      </div>
      <div id="algorithm">
        <img
          src="/pictures/algorithm.png"
          width="45"
          height="45"
          alt="algo_pic"
        />
        <h3>Algorithm Designer</h3>
        <p id="motto">I like create fun and impressive user experience</p>
        <h5>Tools:</h5>
        <ul id="skill_list">
          <li>Data Structure</li>
          <li>Divide and Conquor</li>
          <li>Greedy Algorithm</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
