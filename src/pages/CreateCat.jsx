import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { UserContext } from "../Contexts/userContext";
import NavBar from "../components/NavBar";

export default function CreateCat() {
  const [race, setRace] = useState();
  const [size, setSize] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [mainPic, setMainPic] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState("false");
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      toast.error(
        "Você não pode acessar essa página enquando estiver deslogado!",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
        }
      );
      navigate("/");
      return;
    }
  }, []);

  function registerCat(e) {
    e.preventDefault();
    setLoading("true");
    let body = {
      name,
      age,
      description,
      color,
      race,
      mainPic,
      size,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/cat`, body, {
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
        toast.error(response.response.data),
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
          };
      })
      .finally(() => setLoading("false"));
  }

  return (
    <>
      <NavBar />
      <Container loading={loading}>
        <section>
          <h1>Registre seu gatinho</h1>
          <form onSubmit={registerCat}>
            <NormalInput
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            ></NormalInput>
            <div>
              <NormalInput
                type="text"
                id="age"
                name="age"
                placeholder="Idade"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              >
                <option value="">Escolha um tamanho</option>
                <option value={1}>Pequeno</option>
                <option value={2}>Médio</option>
                <option value={3}>Grande</option>
              </select>
            </div>
            <NormalInput
              type="text"
              id="color"
              name="color"
              placeholder="Cor"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            ></NormalInput>
            <Description
              type="text"
              id="description"
              name="description"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <select
              value={race}
              onChange={(e) => setRace(e.target.value)}
              required
            >
              <option disabled selected value="">
                Escolha uma raça
              </option>
              <option value={1}>Siamês</option>
              <option value={2}>Persa</option>
              <option value={3}>Maine Coon</option>
              <option value={4}>Bengal</option>
              <option value={5}>Ragdoll</option>
              <option value={6}>Abissínio</option>
              <option value={7}>Sphynx</option>
              <option value={8}>British Shorthair</option>
              <option value={9}>Scotish Fold</option>
              <option value={10}>Devon Rex</option>
              <option value={11}>Angorá</option>
              <option value={12}>Ashera</option>
              <option value={13}>Sem raça / SRD</option>
            </select>
            <NormalInput
              type="text"
              id="mainPic"
              name="mainPic"
              placeholder="Foto Principal"
              value={mainPic}
              onChange={(e) => setMainPic(e.target.value)}
            />
            <button type="submit" disabled={loading === "true"}>
              {loading === "true" ? (
                <TailSpin
                  height="40"
                  width="45"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  alignSelf="center"
                />
              ) : (
                "Registrar"
              )}
            </button>
          </form>
        </section>
      </Container>
    </>
  );
}

const Description = styled.input`
  width: 350px;
  height: 100px;
  padding: 10px;

  background-color: #fff;
  border: 2px solid #f5f5f5;
  border-radius: 10px;

  font-family: "Comic Neue", cursive;
  color: #000;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const NormalInput = styled.input`
  width: 350px;
  height: 50px;
  padding: 10px;

  background-color: #fff;
  border: 2px solid #f5f5f5;
  border-radius: 10px;

  font-family: "Comic Neue", cursive;
  color: #000;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
`;
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
  padding-top: 100px;
  padding-bottom: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    gap: 40px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-family: "Comic Neue", cursive;
      color: #000;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    select {
      width: 350px;
      height: 50px;
      padding: 10px;

      background-color: #fff;
      border: 1px solid #f5f5f5;
      border-radius: 10px;

      font-family: "Comic Neue", cursive;
      color: #000;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    div {
      display: flex;
      gap: 10px;
      input,
      select {
        width: 170px;
        height: 50px;
        padding: 10px;

        background-color: #fff;
        border: 2px solid #f5f5f5;
        border-radius: 10px;

        font-family: "Comic Neue", cursive;
        color: #000;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1px;
      }
    }

    article {
      display: flex;
      align-items: center;
    }

    button {
      width: 350px;
      height: 50px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: none;
      border-radius: 20px;
      background-color: ${(props) =>
        props.loading === "false" ? "#136a8a" : "#535353"};

      font-family: "Comic Neue", cursive;
      color: #000;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 1px;

      &:hover {
        background-color: ${(props) =>
          props.loading === "false" ? "#35b0d4" : "#535353"};
        cursor: pointer;
      }
    }
  }
`;
