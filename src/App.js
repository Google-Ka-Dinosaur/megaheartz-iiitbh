import React from "react";
import "./App.css";
import About from "./components/About";
import ReachUs from "./components/ReachUs";
import Domains from "./components/Domains";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Projects />
      <Domains />
      <Team />
      <ReachUs />
    </div>
  );
}

export default App;
