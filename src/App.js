import React, { useState }  from 'react';
import './App.css';
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
          <Route path="/conversor-de-medidas" element={<ConversorDeMedidas />} />
          <Route path="/tabela-de-medidas" element={<TabelaDeMedidas />} />
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
      <Link to="/tabela-de-medidas">
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
  return <div 
  className="gerador-de-medidas">
  <h1>medida em centímetros</h1>
  <input
   className="campoInput1"
   type="text"
   placeholder="Digite a medida em centímetros"
  />
  <p>Resultado:</p>
  <div className="resultado"></div>
</div>  
};

const ConversorDeMedidas = () => {
  return <div 
  className="conversor-de-medidas">
  <h1>medida em centímetros</h1>
  <input
   className="campoInput2"
   type="text"
   placeholder="Digite a medida em centímetros"/>
   <h1>unidade para conversão</h1>
   <div className="unidadeConversao"></div>
   <p className="pResultado">Resultado:</p>
   <div className="unidadeConversao"></div>
</div>  
};

const TabelaDeMedidas = () => {
  return (
    <table className="tabela-medidas">
      <thead>
        <tr>
          <th>Medida 1</th>
          <th>Medida 2</th>
          <th>Medida 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
             <li>5</li>
             <li>6</li>
             <li>7</li>
             <li>8</li>
             <li>9</li>
             <li>10</li>
             <li>11</li>
             <li>12</li>
             <li>13</li>
             <li>14</li>
             <li>15</li>
             <li>16</li>
             <li>17</li>
             <li>18</li>
          </td>
          <td>
             <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
             <li>5</li>
             <li>6</li>
             <li>7</li>
             <li>8</li>
             <li>9</li>
             <li>10</li>
             <li>11</li>
             <li>12</li>
             <li>13</li>
             <li>14</li>
             <li>15</li>
             <li>16</li>
             <li>17</li>
             <li>18</li>
          </td>
          <td>
          <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
             <li>5</li>
             <li>6</li>
             <li>7</li>
             <li>8</li>
             <li>9</li>
             <li>10</li>
             <li>11</li>
             <li>12</li>
             <li>13</li>
             <li>14</li>
             <li>15</li>
             <li>16</li>
             <li>17</li>
             <li>18</li>
          </td>
        </tr>
        <tr>
          <td>Medida 4</td>
          <td>Medida 5</td>
          <td>Medida 6</td>
        </tr>
      </tbody>
    </table>
  );
};


const HistoricoDeMedidas = () => {
  return (
    <div className="historico-medidas-container">
      <div className="image-container">
      <img src={consulta} alt="Imagem 4" className="image2" />
      </div>
      <div className="tables-container">
        <table className="historico-medidas">
        <table className="historico-medidas">
      <thead>
        <tr>
          <th>Medida 1</th>
          <th>Medida 2</th>
          <th>Medida 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
             <li>5</li>
             <li>6</li>
             <li>7</li>
             <li>8</li>
             <li>9</li>
             <li>10</li>
             <li>11</li>
             <li>12</li>
             <li>13</li>
             <li>14</li>
             <li>15</li>
             <li>16</li>
             <li>17</li>
             <li>18</li>
          </td>
          <td>
             <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
             <li>5</li>
             <li>6</li>
             <li>7</li>
             <li>8</li>
             <li>9</li>
             <li>10</li>
             <li>11</li>
             <li>12</li>
             <li>13</li>
             <li>14</li>
             <li>15</li>
             <li>16</li>
             <li>17</li>
             <li>18</li>
          </td>
          <td>
          <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
             <li>5</li>
             <li>6</li>
             <li>7</li>
             <li>8</li>
             <li>9</li>
             <li>10</li>
             <li>11</li>
             <li>12</li>
             <li>13</li>
             <li>14</li>
             <li>15</li>
             <li>16</li>
             <li>17</li>
             <li>18</li>
          </td>
        </tr>
        <tr>
          <td>Medida 4</td>
          <td>Medida 5</td>
          <td>Medida 6</td>
        </tr>
        
      </tbody>
    </table>
        </table>
      </div>
    </div>
  );
};




const AppRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppRouter;