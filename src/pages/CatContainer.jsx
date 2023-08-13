import "animate.css";
import { useState } from "react";
import styled from "styled-components";

export default function CatContainer(props) {
  const { mainPic, name } = props.cat;
  const [isActive, setActive] = useState(false);

  return (
    <Container
      isActive={isActive}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <img src={mainPic} alt={name} />
      <div>
        <h1>{name}</h1>
      </div>
      <button class="animate_animated animate_bounceinup">Ver mais</button>
    </Container>
  );
}

const Container = styled.article`
  width: 250px;
  height: 100%;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
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

      &:hover {
        color: #ea7200;
      }
    }
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 10px;
    cursor: pointer;
  }
  button {
    width: 98%;
    height: 30px;
    border-radius: 7px;
    border: none;

    font-family: "Comic Neue", cursive;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: #692db6;

    &:hover {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(1.05);
    }
  }
`;
