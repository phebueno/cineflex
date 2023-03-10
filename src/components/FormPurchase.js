import styled from "styled-components";

export default function FormPurchase({ nome, setNome, cpf, setCpf, reservarAssentos }) {
  return (
    <FormContainer>
      <form onSubmit={reservarAssentos}>
      Nome do Comprador:
      <input
        data-test="client-name"
        type="text"
        placeholder="Digite seu nome..."
        onChange={(e) => setNome(e.target.value)}
        value={nome}
        required
      />
      CPF do Comprador:
      <input
        data-test="client-cpf"
        type="text"
        placeholder="Digite seu CPF..."
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
        required
      />
      <button data-test="book-seat-btn" type="submit">Reservar Assento(s)</button>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
  }
  input {
    width: calc(100vw - 60px);
  }
`;
