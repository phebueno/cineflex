import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Seat from "../../components/Seat";
import FormPurchase from "../../components/FormPurchase";

export default function SeatsPage({ compraSucessoInfo, setCompraSucessoInfo }) {
  const { idSessao } = useParams();
  const [sessaoInfo, setSessaoInfo] = useState(undefined);
  const [assentosReservados, setAssentosReservados] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
    const requisicao = axios.get(url);

    requisicao.then((resposta) => {
      setSessaoInfo(resposta.data);
      console.log(resposta.data);
    });
  }, [idSessao]);

    function adicionarAssento(disponivel, idAssento, numeroAssento) {
    if (assentosReservados.includes(idAssento)) {
      //Se assento estiver selecionado, remove a seleção
      const novoArray = assentosReservados.filter(
        (value) => value !== idAssento
      );
      setAssentosReservados([...novoArray]);
    } else if (disponivel) {
      //Se estiver disponível
      setAssentosReservados([...assentosReservados, idAssento]);
    } else {
      alert("Esse assento não está disponível");
    }
  }

  function reservarAssentos(e) {
    e.preventDefault(); //não atualiza a página
    const url =
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
    const objReserva = {
      ids: assentosReservados,
      name: nome,
      cpf: cpf,
    };
    const requisicao = axios.post(url, objReserva);
    requisicao.then((resposta) => {
      console.log(resposta.data);
      /*
      Na função abaixo, obtém os números dos assentos reservados a partir dos números ID.
      Verifica se o array de IDs de assento contém quais assentos da sessão. Se sim, devolve
      o número de 1-50 do assento.
      */
      const arrAssentosNr = sessaoInfo.seats.filter((seat) => assentosReservados.includes(seat.id)).map((seat)=>seat.name);
      //A variável objCompraInfo envia todas as informações necessárias para a tela de sucesso
      const objCompraInfo = {
        nomeFilme: sessaoInfo.movie.title,
        diaFilme: sessaoInfo.day.date,
        horarioFilme: sessaoInfo.name,
        assentos: arrAssentosNr,
        nomeComprador: nome,
        cpf: cpf,
      };
      setCompraSucessoInfo({ ...objCompraInfo });
      navigate("/sucesso");
    });
    requisicao.catch((erro) => {
      console.log(erro.response.data);
      alert("Por favor, tente novamente.");
    });
  }

  if (sessaoInfo === undefined) {
    return <div>Carregando...</div>;
  }
  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        {sessaoInfo.seats.map((assento) => (
          <Seat
            key={assento.id}
            idAssento={assento.id}
            numeroAssento={assento.name}
            disponivel={assento.isAvailable}
            adicionarAssento={adicionarAssento}
            assentosReservados={assentosReservados}
          />
        ))}
      </SeatsContainer>
      <CaptionContainer>
        <CaptionItem>
          <CaptionCircle id="selecionado" />
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle disponivel={true} />
          Disponível
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle disponivel={false} />
          Indisponível
        </CaptionItem>
      </CaptionContainer>
      <FormPurchase
        nome={nome}
        setNome={setNome}
        cpf={cpf}
        setCpf={setCpf}
        reservarAssentos={reservarAssentos}
      />
      <FooterContainer data-test="footer">
        <div>
          <img src={sessaoInfo.movie.posterURL} alt="poster" />
        </div>
        <div>
          <p>{sessaoInfo.movie.title}</p>
          <p>
            {sessaoInfo.day.weekday} - {sessaoInfo.name}
          </p>
        </div>
      </FooterContainer>
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
  padding-bottom: 120px;
  padding-top: 70px;
`;
const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;
const CaptionCircle = styled.div`
  border-color: ${({ disponivel }) =>
    disponivel
      ? "#808F9D"
      : "#F7C52B"}; // cores que mudam de acordo com disponibilidade
  background-color: ${({ disponivel }) => (disponivel ? "#C3CFD9" : "#FBE192")};
  border-width: 1px;
  border-style: solid;
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
  //ID para selecionar assento. Poderá ser alterado
  &#selecionado {
    border-color: #0e7d71;
    background-color: #1aae9e;
  }
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;
