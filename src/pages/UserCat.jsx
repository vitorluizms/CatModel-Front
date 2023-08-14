import axios from "axios";
import { useContext, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import styled from "styled-components";
import { UserContext } from "../Contexts/userContext";

export default function UserCat(props) {
  const {
    id,
    name,
    color,
    age,
    description,
    mainPic,
    size,
    race,
    isDisponible,
  } = props.cat;
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  function toggleDisponible(bool) {
    setLoading(true);
    let body = { isDisponible: bool };
    axios
      .patch(`${import.meta.env.VITE_API_URL}/cat/${id}`, body, {
        headers: { authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        toast.success(response.data, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
        });
      })
      .catch((response) => {
        toast.error(response.response.data, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
        });
      })
      .finally(() => {
        setLoading(false);
        props.getCats();
      });
  }
  return (
    <Container>
      <InfoContainer>
        <figure>
          <img src={mainPic} alt={name} />
        </figure>
        <div>
          <h1>Nome: {name}</h1>
          <ul>
            <li>Cor: {color}</li>
            <li>Idade: {age}</li>
            <li>Raça: {race}</li>
            <li>Tamanho: {size}</li>
          </ul>
        </div>
        <div>
          <span>Descrição: </span>
          <p>{description}</p>
        </div>
      </InfoContainer>
      <CheckContainer>
        <h1>Está disponível?</h1>
        {loading === true ? (
          <TailSpin
            height="50"
            width="50"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            alignSelf="center"
          />
        ) : isDisponible === true ? (
          <CheckBox onClick={() => toggleDisponible(false)} />
        ) : (
          <FixBox onClick={() => toggleDisponible(true)} />
        )}
      </CheckContainer>
    </Container>
  );
}

const CheckBox = styled(AiOutlineCheck)`
  font-size: 30px;
  color: #fff;

  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  background-color: #4ad737;

  &:hover {
    cursor: pointer;
    background-color: #3ba22d;
    transform: scale(1.1);
  }
`;

const FixBox = styled(FiX)`
  font-size: 30px;
  color: #fff;

  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ff0b0b;

  &:hover {
    cursor: pointer;
    background-color: #c40000;
    transform: scale(1.1);
  }
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h1 {
    font-family: "Comic Neue", cursive;
    color: #000;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

const Container = styled.article`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  gap: 30px;

  img {
    max-width: 300px;
    height: 300px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    word-break: keep-all;

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
`;
