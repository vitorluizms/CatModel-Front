import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { UserContext } from "../Contexts/userContext";
import NavBar from "../components/NavBar";
import UserCat from "./UserCat";

export default function UserCats() {
  const [cats, setCats] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    getUserCats();
  }, []);

  function getUserCats() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/cats/me`, {
        headers: { authorization: `Bearer ${user.token}` },
      })
      .then((response) => setCats(response.data))
      .catch((response) =>
        toast.error(response.response.data, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
        })
      )
      .finally(() => setLoading(false));
  }

  if (loading === true)
    return (
      <>
        <NavBar />
        <Container>
          <TailSpin />
        </Container>
      </>
    );
  else {
    return (
      <>
        <NavBar />
        <Container>
          {cats.length === 0 ? (
            <h2>Você não possui modelos cadastrados</h2>
          ) : (
            <section>
              {cats.map((cat) => (
                <UserCat cat={cat} key={cat.id} getCats={getUserCats} />
              ))}
            </section>
          )}
        </Container>
      </>
    );
  }
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
  padding-top: 100px;
  padding-bottom: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Comic Neue", cursive;
    color: #000;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  section {
    width: 80%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.3);
    gap: 20px;
    padding: 20px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
