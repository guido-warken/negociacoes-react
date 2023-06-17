import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';

function Formulario({ onSubmit }) {
    const [data, setData] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const inputRef = useRef(null);
    console.log(inputRef);

    const handleSubmit = (evento) => {
        evento.preventDefault();
        setData('');
        setQuantidade('');
        setValor('');
        inputRef.current?.focus();
        onSubmit(data, quantidade, valor);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="data" className="form-label">Data</label>
                <input type="date" className="form-control" id="data" value={data} onChange={(evento) => setData(evento.target.value)} ref={inputRef}/>
            </div>
            <div className="mb-3">
                <label htmlFor="quantidade" className="form-label">Quantidade</label>
                <input type="number" className="form-control" id="quantidade" value={quantidade} onChange={(evento) => setQuantidade(evento.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="valor" className="form-label">Valor</label>
                <input type="number" className="form-control" id="valor" min={0.01} max={1000000000} step={0.01} value={valor} onChange={(evento) => setValor(evento.target.value)} />
            </div>
            <button className="primary" type="submit">Cadastrar</button>
        </form>
    );
}

Formulario.PropTypes = {
    onSubmit: propTypes.func
};

export default Formulario;
