import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import ListaNegociacoes from './components/ListaNegociacoes';
import { Negociacao } from './models/negociacao';

function App() {
  const [negociacoes, setNegociacoes] = useState([]);

  const onSubmit = (data, quantidade, valor) => {
    let negociacao = new Negociacao(data, quantidade, valor);
    setNegociacoes([...negociacoes, negociacao]);
  };

  useEffect(() => console.log(negociacoes), [negociacoes]);

  return (
    <div className="container">
      <h1 className="text-center mb-4">Lista de negociações</h1>
      <Formulario onSubmit={onSubmit} />
      <h2>Lista de negociações</h2>
      <ListaNegociacoes negociacoes={negociacoes} />
    </div>
  );
}

export default App
