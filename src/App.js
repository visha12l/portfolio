import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Service />
      {/* <Project /> */}
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
