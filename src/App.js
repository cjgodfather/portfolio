import React, { Component } from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Introduction from "./components/intro";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";

class App extends Component {
  state = { showDropdown: false };

  handleDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  render() {
    const className = this.state.showDropdown ? "open" : null;

    return (
      <div>
        <Navbar open={className} showDropdown={this.handleDropdown} />
        <About />
        <Introduction />
        <Skills />
        <Projects />
        {/* <Blogs /> */}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
