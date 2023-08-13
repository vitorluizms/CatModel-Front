import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { UserContext } from "../Contexts/userContext";
import NavBar from "../components/NavBar";
import CatContainer from "./CatContainer.jsx";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const [cats, setCats] = useState([]);
  useEffect(() => getCats(), []);
  const getCats = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/cats`, {
        headers: { authorization: `Bearer ${user.token}` },
      })
      .then((response) => setCats(response.data))
      .catch((response) => {
        toast.error(response.reponse.data),
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
          };
      });
  };

  return (
    <>
      <NavBar />
      <Container>
        <section>
          {cats.map((cat) => (
            <CatContainer cat={cat} key={cat.id} />
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
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    gap: 20px;
    padding: 20px;
    border-radius: 10px;

    display: flex;
    justify-content: flex-start;
  }
`;
