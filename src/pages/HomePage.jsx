import styled from "styled-components";
import TopBar from "../components/TopBar";

export default function Home() {
  return (
    <Container>
      <header>
        <TopBar></TopBar>
      </header>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  /* background: linear-gradient(to left, #acb6e5, #74ebd5); */
  background-image: radial-gradient(
    circle 588px at 31.7% 40.2%,
    rgba(225, 200, 239, 1) 21.4%,
    rgba(163, 225, 233, 1) 57.1%
  );
`;
