import React from "react";
import "./App.css";
import SocialMediaLinks from "./components/SocialMediaLinks";
import {
  DivWithWhiteBackgroundAndBlackBordersThin,
  VerticalFlexBox,
} from "./styles/styles";
import { NavLink, NavLinkRenderProps, Routes, Route } from "react-router";
import { AboutPage } from "./components/pages/AboutPage";
import { HomePage } from "./components/pages/HomePage";
import { VideoPage } from "./components/pages/VideoPage";
import { NoMatch } from "./components/pages/NoMatch";

// fix this ugly styling variable mess :D
const NavBarStyle: React.CSSProperties = { float: "left", padding: "4px" };
const navButtonConditionalStyle = ({ isActive }: NavLinkRenderProps) => ({
  backgroundColor: isActive ? "blue" : "black",
});
const navButtonFixedStyle = `px-4 py-2 rounded-lg transition-all duration-300 text-white`;

function App() {
  return (
    <div className="App">
      <body>
        <VerticalFlexBox>
          <a id="jacobblackfly" href="https://www.jacobblackfly.com">
            jacob blackfly
          </a>
          <nav>
            <ul>
              <li style={NavBarStyle}>
                <NavLink
                  to="/"
                  style={navButtonConditionalStyle}
                  className={navButtonFixedStyle}
                >
                  Home
                </NavLink>
              </li>
              <li style={NavBarStyle}>
                <NavLink
                  to="/videos"
                  style={navButtonConditionalStyle}
                  className={navButtonFixedStyle}
                >
                  Videos
                </NavLink>
              </li>
              <li style={NavBarStyle}>
                <NavLink
                  to="/about"
                  style={navButtonConditionalStyle}
                  className={navButtonFixedStyle}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videos" element={<VideoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <DivWithWhiteBackgroundAndBlackBordersThin>
            Follow me
          </DivWithWhiteBackgroundAndBlackBordersThin>
          <SocialMediaLinks />
          <DivWithWhiteBackgroundAndBlackBordersThin>
            Thanks for visiting my page and have a great day! :)
          </DivWithWhiteBackgroundAndBlackBordersThin>
        </VerticalFlexBox>
      </body>
    </div>
  );
}

export default App;
