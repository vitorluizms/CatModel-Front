import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  const [search, setSearch] = useState("");

  return (
    <TopBar>
      <section>
        <article>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <h1>CatModels</h1>
          </Link>
        </article>
        <article>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <h2>Home</h2>
          </Link>
          <h2>Filtrar</h2>
          <h2>Nos contate</h2>
        </article>
        <form>
          <div>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Pesquisar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
            <StyledIcon type="submit" />
          </div>
        </form>
        <article>
          <Link to={"/create-cat"} style={{ textDecoration: "none" }}>
            <IoIosAddCircleOutline
              style={{
                marginRight: "-20px",
                fontSize: "25px",
                cursor: "pointer",
                color: "#000",
              }}
            />
          </Link>
          <HiOutlineUser
            style={{
              marginRight: "-20px",
              fontSize: "25px",
              cursor: "pointer",
            }}
          />
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <button>Login</button>
          </Link>
        </article>
      </section>
    </TopBar>
  );
}

const StyledIcon = styled(AiOutlineSearch)`
  color: #fff;
  font-size: 30px;
  background: #000;
  border-radius: 50%;
  padding: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const TopBar = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-family: "Pacifico", cursive;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 1px;
      color: #000;
    }

    article {
      width: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;

      h2 {
        font-family: "Comic Neue", cursive;
        color: #000;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      button {
        width: 60px;
        height: 30px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 5px;
        cursor: pointer;

        font-family: "Comic Neue", cursive;
        color: #000;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
          background-color: #000;
          border: 1px solid transparent;
          color: #fff;
        }
      }
    }

    form {
      div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        background-color: #c5c5c5;
        border-radius: 13px;
      }
      input {
        width: 250px;
        max-height: 30px;
        border-radius: 13px;
        border: none;

        background-color: #c5c5c5;
        padding-left: 10px;

        font-family: "Roboto", sans-serif;
        font-size: 10px;
        color: #000;

        &:focus {
          outline: none;
        }
      }
    }
  }
`;
