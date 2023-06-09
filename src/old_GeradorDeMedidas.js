import React, { useState } from 'react';

const GeradorDeMedidas = () => {
  const [comprimento, setComprimento] = useState('');
  const [largura, setLargura] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMedida = () => {
    const volume = parseFloat(comprimento) * parseFloat(largura) * parseFloat(altura);
    setResultado(volume.toFixed(2));
  };

  return (
    <div>
      <h1>Gerador de Medidas</h1>
      <div>
        <label>Comprimento:</label>
        <input type="number" value={comprimento} onChange={(e) => setComprimento(e.target.value)} />
      </div>
      <div>
        <label>Largura:</label>
        <input type="number" value={largura} onChange={(e) => setLargura(e.target.value)} />
      </div>
      <div>
        <label>Altura:</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <button onClick={calcularMedida}>Calcular</button>
      {resultado && <p>Resultado: {resultado}</p>}
    </div>
  );
};

export default GeradorDeMedidas;