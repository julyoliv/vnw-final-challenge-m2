import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: MediumPurple;
  font-weight: 400;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-inline: auto;
  height: 10vh;
  padding-inline: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 45px;
  list-style: none;

  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
  }

  a:hover {
    color: black;
    font-weight: 800;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 50vh;
    a:hover {
      font-size: 2.5rem;
      color: purple;
    }
  }
`;

export const Home = styled.main`
  background-color: black;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 90vh;

  img {
    border-radius: 50%;
    width: 20vw;
    filter: grayscale(100%) brightness(100%);
    transition: filter 0.5s ease;
  }

  img:hover {
    filter: drop-shadow(0 0 10px rgba(147, 112, 219));
  }

  h2 {
    color: white;
    font-size: 2.5rem;
  }

  p {
    color: white;
    font-size: 1.5rem;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    height: 100vh;

    img {
      width: 70vw;
    }

    h2,
    p {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export const SocialMedia = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-evenly;

  img {
    width: 3vw;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 80vw;
    justify-content: space-evenly;
    img {
      width: 15vw;
    }
  }
`;

export const AboutMe = styled.main`
  display: flex;
  grid-gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: black;
  color: white;
  padding-top: 2%;
`;

export const Studies = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 40vh;
  width: 20vw;
  color: black;
  background-color: white;
  border-radius: 4px;
  filter: drop-shadow(0 0 10px rgba(147, 112, 219));

  img {
    width: 8vw;
  }
`;

export const Skills = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 30vh;
  width: 100%;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 7vh;
    filter: grayscale(100%) brightness(100%);
    transition: filter 0.5s ease;
  }

  img:hover {
    filter: drop-shadow(0 0 10px rgba(147, 112, 219));
  }
`;

export const SectionProjects = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 90vh;
  background-color: black;
  text-decoration: none;
`;

export const Project = styled.div`
  background-color: GhostWhite;
  border: solid MediumPurple;
  width: 21vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    padding-top: 10px;
    font-size: 1.2rem;
    color: black;
  }
  h3 {
    width: 25vw;
    font-size: 1rem;
    color: black;
  }

  img {
    width: 20vw;
  }
`;
