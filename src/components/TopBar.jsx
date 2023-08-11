import { Link } from "react-router-dom";
import styled from "styled-components";

export default function TopBar() {
  return (
    <Container>
      <section>
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <h1>CatModels</h1>
        </Link>
        <article>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <h2>Home</h2>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <button>Login</button>
          </Link>
        </article>
      </section>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  height: 75px;
  background-color: #f5f5f5;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-family: "Pacifico", cursive;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 1px;
      color: #000;
    }

    button {
      width: 60px;
      height: 30px;
      background-color: transparent;
      border: 1px solid #000;
      border-radius: 5px;
      cursor: pointer;

      font-family: "Comic Neue", cursive;
      color: #000;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;

      &:hover {
        cursor: pointer;
        background-color: #000;
        border: 1px solid transparent;
        color: #fff;
      }
    }

    article {
      width: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-family: "Comic Neue", cursive;
        color: #000;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`;
