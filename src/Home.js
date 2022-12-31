import React, { useState } from "react";
import "./Home.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <a href="#">
              <h1>Vishal Shinde</h1>
            </a>
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <AnchorLink href="#Home">
                <li className="nav__items mx__15">Home</li>
              </AnchorLink>
              <AnchorLink offset="120" href="#About">
                <li className="nav__items mx__15">About</li>
              </AnchorLink>
              {/* <AnchorLink href="#Service">
                <li className="nav__items mx__15">Service</li>
              </AnchorLink> */}
              {/* <AnchorLink href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </AnchorLink> */}
              <AnchorLink href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </AnchorLink>
            </ul>
          </div>
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <AnchorLink href="Home">Home</AnchorLink>
                </li>
                <li className="sideNavbar">
                  <AnchorLink href="About">About</AnchorLink>
                </li>
                {/* <li className="sideNavbar">
                  <AnchorLink href="Service">Service</AnchorLink>
                </li> */}
                <li className="sideNavbar">
                  <AnchorLink href="Portfolio">Portfolio</AnchorLink>
                </li>
                <li className="sideNavbar">
                  <AnchorLink href="Contact">Contact</AnchorLink>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h2 className="home__text pz__10">Hi, i'm Vishal Shinde.</h2>
              <h3 className="home__text sweet pz__10">I am a Full stack Developer </h3>
              <h4 className="home__text pz__10">living in India.</h4>
              <h3 className="home__text sweet pz__10"> 6 plus Years of experience.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
