import React from 'react';
import propTypes from 'prop-types';
import { Negociacao } from '../models/negociacao'

function ListaNegociacoes({ negociacoes }) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {
                    negociacoes.map(n => (
                        <tr>
                            <td>{n.data}</td>
                            <td>{n.quantidade}</td>
                            <td>{n.valor}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

ListaNegociacoes.PropTypes = {
    negociacoes: propTypes.arrayOf(propTypes.objectOf(Negociacao))
};

export default ListaNegociacoes;
