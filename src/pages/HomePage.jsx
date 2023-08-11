import { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import CatPage from "./CatPage";

export default function Home() {
  const [cats, setCats] = useState([
    {
      id: 1,
      name: "Gatinho",
      image:
        "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg",
    },
  ]);

  return (
    <>
      <NavBar />
      <Container>
        <section>
          {cats.map((cat) => (
            <CatPage cat={cat} key={cat.id} />
          ))}
        </section>
      </Container>
    </>
  );
}

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  /* background: linear-gradient(to left, #acb6e5, #74ebd5); */
  background-image: radial-gradient(
    circle 588px at 31.7% 40.2%,
    rgba(225, 200, 239, 1) 21.4%,
    rgba(163, 225, 233, 1) 57.1%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;  

  section {
    width: 85%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.3);
    gap: 20px;
    padding: 20px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
