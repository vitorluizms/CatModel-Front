import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";

export default function CatPage() {
  const { id } = useParams();
  const [cat, setCat] = useState([]);
  useEffect(() => {
    getCatById();
  }, []);
  const getCatById = () => {
    console.log(id);
    axios
      .get(`${import.meta.env.VITE_API_URL}/cat/${id}`)
      .then((response) => {
        setCat(response.data);
        console.log(response.data);
      })
      .catch((response) =>
        toast.error(response.reponse.data, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
        })
      );
  };
  return (
    <>
      <NavBar />
      <Container>
        <section>
          <article>
            <img src={cat.mainPic} alt={cat.name} />
          </article>
          <article>
            <h1>{cat.name}</h1>
            <ul>
              <li>Cor: {cat.color}</li>
              <li>Idade: {cat.age}</li>
              <li>Raça: {cat.raceName}</li>
              <li>Tamanho: {cat.size}</li>
            </ul>
            <span>Descrição:</span>
            <p>{cat.description}</p>
          </article>
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

  section {
    width: 60%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    gap: 20px;
    padding: 20px;
    border-radius: 10px;

    display: flex;
    justify-content: flex-start;

    article {
      display: flex;
      flex-direction: column;
      gap: 10px;

      img {
        width: 400px;
        height: 400px;
      }

      h1 {
        font-family: "Comic Neue", cursive;
        color: #000;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1px;
      }

      ul {
        li {
          font-family: "Comic Neue", cursive;
          color: #000;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;

          padding: 8px;
          background-color: #cdcdcd;
          border-radius: 10px;
          margin-bottom: 5px;
        }
      }

      span {
        font-family: "Comic Neue", cursive;
        color: #000;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1px;
        margin-top: 5px;
      }

      p {
        font-family: "Comic Neue", cursive;
        color: #000;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1px;

        padding: 8px;
        background-color: #cdcdcd;
        border-radius: 10px;
      }
    }
  }
`;
