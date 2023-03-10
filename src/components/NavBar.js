import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  console.log(location);
  //Se a localização estiver na root ou na página /sucesso, não exibe o ícone
  return (
    <NavContainer>
      {(location.pathname === '/' || location.pathname==='/sucesso') ? (
        ""
      ) : (
        <Link data-test="go-home-header-btn" to="/">
          <AiOutlineArrowLeft />
        </Link>
      )}
      CINEFLEX
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #e8833a;
    position: absolute;
    left: 15px;
  }
`;
