import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../../components/Movie";

export default function HomePage() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const requisicao = axios.get(url);

    requisicao.then((resposta) => {
      setFilmes(resposta.data);
      console.log(resposta.data);
    });
  }, []);

  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {filmes.map((filme) => (
          <Movie key={filme.id} id={filme.id} posterImg={filme.posterURL} />
        ))}
      </ListContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;
`;
const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;
