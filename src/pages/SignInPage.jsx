import styled from "styled-components";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Contexts/userContext";
import { toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/signin`, body)
      .then((answer) => {
        toast.success(answer.data, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
        });
        localStorage.setItem("user", JSON.stringify(answer.data));
        setUser(answer.data);
        navigate("/home");
      })
      .catch(answer => {
        console.log(answer)
        toast.error(answer.response.data, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
        });
      });
  };
  return (
    <Container>
      <section>
        <StyledIcon />
        <h1>Login</h1>
        <form onSubmit={signIn}>
          <div>
            <AiOutlineMail style={{ color: "#000", fontSize: "20px" }} />
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <BiLockAlt style={{ color: "#000", fontSize: "20px" }} />
            <input
              id="password"
              name="password"
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
      <hr
        style={{
          width: "30%",
          backgroundColor: "white",
          marginTop: "40px",
          border: "none",
          height: "1px",
        }}
      />
      <p>
        Não tem uma conta?{" "}
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <span>Cadastre-se!</span>
        </Link>
      </p>
    </Container>
  );
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to left, #acb6e5, #74ebd5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 290px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #136a8a;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #fff;
    font-size: 20px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: gray;
    font-size: 15px;
    span {
      color: #136a8a;

      &:hover {
        cursor: pointer;
      }
    }
  }

  section {
    width: 30%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.4);
    gap: 10px;
    padding-bottom: 40px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1 {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: gray;
      font-size: 30px;
    }

    form {
      width: 100%;
      gap: 15px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      div {
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        padding-left: 10px;
        background-color: white;
        border-radius: 10px;
        gap: 10px;

        input {
          width: 250px;
          height: 45px;
          border: none;
          border-radius: 10px;

          font-family: "Roboto", sans-serif;
          font-weight: 400;
          color: black;
          font-size: 15px;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
`;

const StyledIcon = styled(AiOutlineUser)`
  margin-top: -25px;
  font-size: 70px;
  background-color: #136a8a;
  color: white;
  padding: 10px;
  border-radius: 50%;
`;
