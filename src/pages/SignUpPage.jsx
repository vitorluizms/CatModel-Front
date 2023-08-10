import styled from "styled-components";
import {
  AiOutlineUserAdd,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { useState } from "react";
import { Container } from "./SignInPage";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [cpf, setCpf] = useState("");
  const [contact, setContact] = useState("");
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
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
      });
  };
  return (
    <Container valid={valid}>
      <section>
        <StyledIcon />
        <h1>Cadastro</h1>
        <form onSubmit={signUp}>
          <div>
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
          </div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <button>Cadastrar</button>
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
