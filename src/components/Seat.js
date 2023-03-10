import styled from "styled-components";

export default function Seat({
  idAssento,
  numeroAssento,
  disponivel,
  adicionarAssento,
  assentosReservados,
}) {
  return (
    <SeatItem
      onClick={() => adicionarAssento(disponivel, idAssento, numeroAssento)}
      disponivel={disponivel}
      assentosReservados={assentosReservados}
      idAssento={idAssento}
    >
      {numeroAssento}
    </SeatItem>
  );
}

function verificarCor(disponivel, assentosReservados, idAssento) {
  if (assentosReservados.includes(idAssento)) {
    //Se assento estiver selecionado
    return "#1AAE9E";
  } else if (disponivel) {
    //Se estiver disponível
    return "#C3CFD9";
  } else {
    //Se estiver indisponível
    return "#FBE192"; 
  }
}

function verificarCorBorda(disponivel, assentosReservados, idAssento) {
  if (assentosReservados.includes(idAssento)) {
    //Se assento estiver selecionado
    return "#0E7D71";
  } else if (disponivel) {
    //Se estiver disponível
    return "#808F9D";
  } else {
    return "#F7C52B"; //Se estiver indisponível
  }
}

const SeatItem = styled.div`
  border-color: ${({ disponivel, assentosReservados, idAssento }) =>
    verificarCorBorda(
      disponivel,
      assentosReservados,
      idAssento
    )}; // cores que mudam de acordo com disponibilidade
  background-color: ${({ disponivel, assentosReservados, idAssento }) =>
    verificarCor(disponivel, assentosReservados, idAssento)};
  border-width: 1px;
  border-style: solid;
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
