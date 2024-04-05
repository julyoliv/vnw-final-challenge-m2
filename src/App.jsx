import React from "react"
import {createGlobalStyle} from "styled-components"
import Navigation from "./components/Navigation"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`

function App(){
  return(
    <>
    <GlobalStyle/>
    <Navigation />
    </>
  )
} 

export default App