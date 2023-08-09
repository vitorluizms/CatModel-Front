import styled from "styled-components";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <section>
        <StyledIcon />
        <h1>Login</h1>
        <form>
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
        Não tem uma conta? <span>Cadastre-se</span>
      </p>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to left, #acb6e5, #74ebd5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: gray;
    font-size: 15px;
    span {
      color: blue;

      &:hover {
        cursor: pointer;
      }
    }
  }

  section {
    width: 30%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.4);
    gap: 20px;
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
      gap: 20px;

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
          height: 55px;
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
