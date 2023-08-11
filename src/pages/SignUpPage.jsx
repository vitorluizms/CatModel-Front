import styled from "styled-components";
import {
  AiOutlineUserAdd,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { useState } from "react";
import { Container, InputContainer } from "./SignInPage";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [cpf, setCpf] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPass)
      return toast.error("Senhas não coincidem!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
      });
    const padraoLetras = /[a-zA-Z]/;
    if (padraoLetras.test(cpf) === true)
      return toast.error("CPF aceita apenas números!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
      });
    if (padraoLetras.test(contact) === true)
      return toast.error("Insira um número com apenas letras!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
      });

    const body = {
      name,
      email,
      cpf,
      password,
      contact,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/signup`, body)
      .then((answer) => {
        toast.success(answer.data, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
        });
        navigate("/");
      })
      .catch((answer) => {
        toast.error(answer.response.data, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
        });
      })
      .finally(() => setLoading(false))
  };
  return (
    <Container loading={loading}>
      <section>
        <StyledIcon />
        <h1>Cadastro</h1>
        <form onSubmit={signUp}>
          <InputContainer>
            <AiOutlineMail style={{ color: "#000", fontSize: "20px" }} />
            <input
              id="name"
              name="name"
              placeholder="Nome"
              type="text"
              minLength={5}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </InputContainer>
          <InputContainer>
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
          </InputContainer>
          <InputContainer>
            <AiOutlineUser style={{ color: "#000", fontSize: "20px" }} />
            <input
              id="cpf"
              name="cpf"
              placeholder="CPF"
              type="text"
              minLength={11}
              maxLength={11}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <AiOutlineContacts style={{ color: "#000", fontSize: "20px" }} />
            <input
              id="contact"
              name="contact"
              placeholder="Contato"
              type="text"
              minLength={10}
              maxLength={11}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <BiLockAlt style={{ color: "#000", fontSize: "20px" }} />
            <input
              id="password"
              name="password"
              placeholder="Senha"
              type="password"
              minLength={3}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <BiLockAlt style={{ color: "#000", fontSize: "20px" }} />
            <input
              id="confirmation"
              name="confirmation"
              placeholder="Confirme sua senha"
              type="password"
              value={confirmPass}
              onChange={(e) => {
                setConfirmPass(e.target.value);
              }}
              required
            />
          </InputContainer>
          <button type="submit" disabled={loading}>
            {loading === false ? (
              "Cadastrar"
            ) : (
              <TailSpin
                height="40"
                width="40"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            )}
          </button>
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
        Já tem uma conta?{" "}
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Faça login!</span>
        </Link>
      </p>
      <ToastContainer />
    </Container>
  );
}

const StyledIcon = styled(AiOutlineUserAdd)`
  margin-top: -25px;
  font-size: 70px;
  background-color: #136a8a;
  color: white;
  padding: 10px;
  border-radius: 50%;
`;
