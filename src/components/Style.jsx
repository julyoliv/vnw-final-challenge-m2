import styled from "styled-components"

export const Navigation = styled.nav`
    background-color: MediumPurple;
    font-family: "Roboto", regular;
    font-weight: 400;
`

export const List = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 12vh;
list-style: none;
font-family: "Roboto", regular;

a{
    text-decoration: none;
    color: white; 
    font-size: 1.5rem;
}

a:hover{
color: black;
font-weight: 800;
}

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 50vh;
    a:hover{
        font-size: 2.5rem;
        color: purple;
    }

}

`

export const Home = styled.main`
background-color: black;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;
height: 90vh;

img{
    border-radius: 50%;
    width: 20vw;
}


h2 {
    color: white;
    font-family: "Roboto", regular;
    font-size: 2.5rem;
}

p {
    color: white;
    font-family: "Playfair Display", regular;
    font-size: 1.5rem;
}

@media(min-width: 320px) and (max-width: 768px){
    height: 100vh;


    img{
        width: 70vw;
    }

    h2,p{
        font-size: 2rem;
        text-align: center;
    }
}


`

export const SocialMedia = styled.div`
width: 30vw;
display: flex;
justify-content: space-evenly;

img{
    width: 3vw;
}

@media(min-width: 320px) and (max-width: 768px){

    width: 80vw;
    justify-content: space-evenly;
    img{
        width: 15vw;
    }
}

`
