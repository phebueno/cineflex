import styled from "styled-components";
import Buyer from "./Buyer";

export default function FormPurchase({
  assentosReservados,
  reservarAssentos,
  assentosInfo,
  compradores,
  setCompradores,
}) {
  //TROCAR FORMA DE PEGAR NR ASSENTOS POR USESTATE
  const arrAssentosNr = assentosInfo
    .filter((seat) => assentosReservados.includes(seat.id))
    .map((seat) => seat.name);

  return (
    <FormContainer onSubmit={reservarAssentos}>
      {assentosReservados.length > 0 &&
        compradores.map((comprador, index) => (
          <Buyer
            key={index}
            index={index}
            assentoNr={arrAssentosNr[index]}
            compradores={compradores}
            comprador={comprador}
            setCompradores={setCompradores}
          />
        ))}
      <button data-test="book-seat-btn" type="submit">
        Reservar Assento(s)
      </button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  button {
    align-self: center;
  }
  input {
    width: calc(100vw - 60px);
  }
`;
