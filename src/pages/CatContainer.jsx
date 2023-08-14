import "animate.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CatContainer(props) {
  const { mainPic, name, id } = props.cat;
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  const navigateToCatPage = () => {
    navigate(`/cat/${id}`, { state: { id: id } });
  };

  return (
    <Container
      isActive={isActive}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <figure onClick={navigateToCatPage}>
        <img src={mainPic} alt={name} />
      </figure>
      <div>
        <h1 onClick={navigateToCatPage}>{name}</h1>
      </div>
      <button onClick={navigateToCatPage}>Ver mais</button>
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
      width: auto;
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

  figure {
    width: 250px;
    border: 1px dashed #fff;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;

    &:hover {
      border: 1px dashed #692db6;
    }
    img {
      width: 230px;
      height: 230px;
      border-radius: 10px;
      cursor: pointer;
    }
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
