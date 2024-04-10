import React from "react";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import Galery from "./Galery.jsx";
import * as S from "./Style.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <BrowserRouter>
      <S.Navigation>
        <S.List>
          <li>
            {" "}
            <Link to="/"> home </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/AboutMe"> about </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Projects"> projects </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Galery"> galery </Link>{" "}
          </li>
        </S.List>
      </S.Navigation>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Galery" element={<Galery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
