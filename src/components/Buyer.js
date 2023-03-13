export default function Buyer({ index, assentoNr, compradores, comprador, setCompradores }) {
  
  const handleChange = (index) => (e) => {
    const newArray = compradores.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value };
        
      } else {
        return item;
      }
    });
    setCompradores(newArray);
  };

  console.log(compradores);
  return (
    <div key={index}>
      Nome do Comprador {assentoNr}:
      <input
        data-test="client-name"
        type="text"
        placeholder="Digite seu nome..."
        name={"nome"}
        value={comprador.nome} //evita que erro de input controlado/descontrolado aconteça
        onChange={handleChange(index)}
        required
      />
      CPF do Comprador {assentoNr}:
      <input
        data-test="client-cpf"
        type="text"
        placeholder="Digite seu CPF..."
        name={"cpf"}
        value={comprador.cpf} //evita que erro de input controlado/descontrolado aconteça
        onChange={handleChange(index)}
        required
      />
    </div>
  );
}
