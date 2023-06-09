import React from 'react';
import './App.css';
import './Home.css'
import medicao from './medicao.png';
import transferir from './transferir.png';
import tabela from './tabela.png';
import consulta from './consulta.png';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';


const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gerador-de-medidas" element={<GeradorDeMedidas />} />
          <Route path="/historico-de-medidas" element={<HistoricoDeMedidas />} />
          <Route path="/tabelas-de-medidas" element={<TabelasDeMedidas />} />
          <Route path="/historico-de-medidas" element={<HistoricoDeMedidas />} />
        </Routes>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
            <div className="container">
      <div className="component1">
        <Link to="/gerador-de-medidas">
          <img src={transferir} alt="Imagem 1" className="image2" />
        </Link>
        <p>Gerador de Medidas</p>
      </div>
      <div className="component2">
        <Link to="/conversor-de-medidas">
        <img src={medicao} alt="Imagem 2" className="image" />
        </Link>
        <p>Conversor de Medidas</p>
      </div>
      <div className="component3">
      <Link to="/tabelas-de-medidas">
        <img src={tabela} alt="Imagem 3" className="image2" />
        </Link>
        <p>Tabela de Medidas</p>
      </div>
      <div className="component4">
      <Link to="/historico-de-medidas">
        <img src={consulta} alt="Imagem 4" className="image2" />
        </Link>
        <p>Histórico de Medidas</p>
      </div>
      </div>
    </div>
  );
};



const GeradorDeMedidas = () => {
  return <h1>Página do Gerador de Medidas</h1>;
};

const ConversorDeMedidas = () => {
  return <h1>Página do Conversor de Medidas</h1>;
};

const TabelasDeMedidas = () => {
  return <h1>Página do Tabelas de Medidas</h1>;
};

const HistoricoDeMedidas = () => {
  return <h1>Página do Historico de Medidas</h1>;
};



const AppRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppRouter;