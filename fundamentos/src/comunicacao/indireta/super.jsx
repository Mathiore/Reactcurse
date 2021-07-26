import React from 'react'
import Sub from './sub'

export default props => {

    function quandoClicar(valorGerado) {
        console.log('Ação!')
        console.log(valorGerado)
    }
    return (
        <div>
            <h4>valor</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
};
