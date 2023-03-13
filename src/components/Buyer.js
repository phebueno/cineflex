export default function Buyer({ index, assentoNr, compradores, comprador, setCompradores }) {
  
  const handleChange = (index) => (e) => {
    let validado = true;
    const re = /^[0-9\b]+$/;  
    const newArray = compradores.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value };
        
      } else {
        return item;
      }
    });
    if(e.target.name==='cpf'){ //permitir apenas números
        
      if(!(re.test(e.target.value))){
        validado=false;
      }
    };
    validado === true && setCompradores(newArray); //apenas se ocorrer validação para números
  };

  return (
    <div key={index}>
      Nome do Comprador {assentoNr}:
      <input
        data-test="client-name"
        type="text"
        placeholder="Digite seu nome..."
        name={"nome"}
        value={comprador.nome}
        onChange={handleChange(index)}
        required
      />
      CPF do Comprador {assentoNr}:
      <input
        data-test="client-cpf"
        type="text"
        placeholder="Digite seu CPF..."
        name={"cpf"}
        value={comprador.cpf} 
        onChange={handleChange(index)}
        required
      />
    </div>
  );
}
