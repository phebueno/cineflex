import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

export default function SuccessPage({ compraSucessoInfo }) {
  console.log(compraSucessoInfo);
  const { assentos, diaFilme, horarioFilme, nomeFilme, compradores } =
    compraSucessoInfo;

  //Scrolla para o começo no carregamento da página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (Object.keys(compraSucessoInfo).length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <PageContainer>
      <h1>
        Pedido feito <br /> com sucesso!
      </h1>

      <TextContainer data-test="movie-info">
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>{nomeFilme}</p>
        <p>
          {diaFilme} - {horarioFilme}
        </p>
      </TextContainer>

      <TextContainer data-test="seats-info">
        <strong>
          <p>Ingressos</p>
        </strong>
        {assentos.map((assentoNr, index) => (
          <p key={index}>Assento {assentoNr}</p>
        ))}
      </TextContainer>

      <TextContainer data-test="client-info">
        <strong>
          <p>Compradores</p>
        </strong>
        {compradores.map((comprador,index) => (
          <div key={index}>
            <p>Nome: {comprador.nome}</p>
            <p>CPF: {comprador.cpf}</p>
            <br/>
          </div>
        ))}
      </TextContainer>
      <Link data-test="go-home-btn" to="/">
        <button>Voltar para Home</button>
      </Link>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  color: #293845;
  margin: 30px 20px;
  padding-bottom: 120px;
  padding-top: 70px;
  a {
    text-decoration: none;
  }
  button {
    margin-top: 50px;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #247a6b;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  strong {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
