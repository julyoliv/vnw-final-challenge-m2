import React from "react";
import * as S from "./Style.jsx";
import Vnw from "../assets/vnw.png";
import Udemy from "../assets/udemy.png";
import Front from "../assets/icon-react.png";
import Js from "../assets/icon-js.png";
import Ts from "../assets/icon-ts.png";
import Python from "../assets/icon-pyhton.png";
import Java from "../assets/icon-java.png";

function AboutMe() {
  return (
    <S.AboutMe>
      <S.Studies>
        <div>
          <h3>FrontEnd Development</h3>
        </div>
        <img src={Vnw} alt="Vai na Web icon" />
      </S.Studies>

      <S.Studies>
        <div>
          <h3>BackEnd Development</h3>
        </div>
        <img src={Udemy} alt="Udemy icon" />
      </S.Studies>

      <S.Skills>

        <div>
          <img src={Front} alt="" />
          <h3>React</h3>
        </div>

        <div>
          <img src={Js} alt="" />
          <h3>JavaScript</h3>
        </div>

        <div>
          <img src={Ts} alt="" />
          <h3>TypeScript</h3>
        </div>

        <div>
          <img src={Python} alt="" />
          <h3>Python</h3>
        </div>

        <div>
          <img src={Java} alt="" />
          <h3>Java</h3>
        </div>
      </S.Skills>
    </S.AboutMe>
  );
}

export default AboutMe;
