import React from 'react';
import './App.css';
import medicao from './medicao.png';
import transferir from './transferir.png';
import tabela from './tabela.png';
import consulta from './consulta.png';


const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="component1">
          <img src={transferir} alt="Imagem 1" className="image" />
          <p>Gerador de Medidas</p>
        </div>
        <div className="component2">
          <img src={medicao} alt="Imagem 2" className="image" />
          <p>Conversor de Medidas</p>
        </div>
        <div className="component3">
          <img src={tabela} alt="Imagem 3" className="image" />
          <p>Tabela de Medidas</p>
        </div>
        <div className="component4">
          <img src={consulta} alt="Imagem 4" className="image" />
          <p>Histórico de Medidas</p>
        </div>
      </div>
    </div>
  );
};

export default App;