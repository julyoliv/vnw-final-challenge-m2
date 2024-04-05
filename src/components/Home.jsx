import React from "react"
import Profile from "../assets/luz.jpg"
import Instagram from "../assets/icon-instagram.png"
import Github from "../assets/icon-github.png"
import Linkedin from "../assets/icon-linkedin.png"
import * as S from "./Style.jsx"

function Home() {
  return (
    <S.Home>
      <img src={Profile} alt="Luz Noceda" />
      
      <h2>HEY, I'M JULYOLIV</h2>
      <p>welcome to my page</p>

      <S.SocialMedia>
      <img src={Instagram} alt="Instagram Icon" />
      <img src={Github} alt="GitHub icon" />
      <img src={Linkedin} alt="LinkedIn icon" />
      </S.SocialMedia>

    </S.Home>
  )
}

export default Home