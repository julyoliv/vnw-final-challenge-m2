import React from "react";
import Aefan1 from "../assets/aefan1.png";
import Aefan2 from "../assets/aefan2.png";
import Aefan3 from "../assets/aefan3.png";
import Aefan4 from "../assets/aefan4.png";
import Fantastika1 from "../assets/fantastika1.png";
import Fantastika2 from "../assets/fantastika2.png";
import Fantastika3 from "../assets/fantastika3.png";
import Fantastika4 from "../assets/fantastika4.png";
import Luz1 from "../assets/luz1.png";
import Luz2 from "../assets/luz2.png";
import Luz3 from "../assets/luz3.png";
import * as S from "./Style.jsx";

function Projects() {
  return (
    <S.SectionProjects>
      <S.Project>
        <a href="https://github.com/julyoliv/luz-ing-">
          <img src={Luz1} alt="fantastika print" />
          <img src={Luz2} alt="fantastika print" />
          <img src={Luz3} alt="fantastika print" />
          <h2> Luz Ingá </h2>
          <h3> Responsive page, HTML, CSS</h3>
        </a>
      </S.Project>

      <S.Project>
        <a href="https://github.com/julyoliv/fansite-exemple" target="_blank">
          <img src={Aefan1} alt="aspa fansite print" />
          <img src={Aefan2} alt="aspa fansite print" />
          <img src={Aefan3} alt="aspa fansite print" />
          <img src={Aefan4} alt="aspa fansite print" />
          <h2> aespa fansite </h2>
          <h3>Responsive page, HTML, CSS</h3>
        </a>
      </S.Project>

      <S.Project>
        <a href="https://github.com/julyoliv/desafio-final-vnw">
          <img src={Fantastika1} alt="fantastika print" />
          <img src={Fantastika2} alt="fantastika print" />
          <img src={Fantastika3} alt="fantastika print" />
          <img src={Fantastika4} alt="fantastika print" />
          <h2> Fantastika </h2>
          <h3> Responsive page, HTML, CSS</h3>
        </a>
      </S.Project>
    </S.SectionProjects>
  );
}

export default Projects;
