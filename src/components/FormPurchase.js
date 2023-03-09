import styled from "styled-components";

export default function FormPurchase({ nome, setNome, cpf, setCpf, reservarAssentos }) {
  return (
    <FormContainer>
      Nome do Comprador:
      <input
        type="text"
        placeholder="Digite seu nome..."
        onChange={(e) => setNome(e.target.value)}
        value={nome}
      />
      CPF do Comprador:
      <input
        type="text"
        placeholder="Digite seu CPF..."
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
      />
      <button onClick={reservarAssentos}>Reservar Assento(s)</button>
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
