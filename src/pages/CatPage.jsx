import "animate.css";
import { useState } from "react";
import styled from "styled-components";

export default function CatPage(props) {
  const { image, name } = props.cat;
  const [isActive, setActive] = useState(false);

  return (
    <Container
      isActive={isActive}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <img src={image} alt={name} />
      <div>
        <h1>{name}</h1>
      </div>
      <button class="animate_animated animate_bounceinup">Ver mais</button>
    </Container>
  );
}

const Container = styled.article`
  width: 200px;
  height: 200px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  div {
    width: 100%;
    height: 40px;
    padding: 10px;
    h1 {
      font-family: "Comic Neue", cursive;
      color: #000;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    height: 150px;
    border-radius: 10px;
    cursor: pointer;
  }
  button {
    width: 100%;
    height: 30px;
    border-radius: 7px;
    border: none;

    color: #fff;
    background-color: #692db6;

    &:hover {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
