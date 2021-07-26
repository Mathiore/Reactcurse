import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/card'
import './app.css'

import Repeticao from './Repeticao'
import Condicional from './components/basicos/Condicional'
import Condicionalif from './components/basicos/Condicionalif'
import Pai from './comunicacao/direta/pai'
import Super from './comunicacao/indireta/super'

export default (props) =>
    <div className="App">

        <Card titulo="Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>

        <Card titulo="Repeticao">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="Condicional">
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="Condicionalif">
            <Condicionalif numero={13}></Condicionalif>
        </Card>
        <Card titulo="Comunicação Direta">
            <Pai></Pai>
        </Card>
        <Card titulo="Comunicação Indireta">
            <Super></Super>
        </Card>
        {/* <ComFilhos>
    <ul>
        <li>Matheus</li>
        <li>Jesus</li>
        <li>José</li>
        <li>Leticia</li>
    </ul>
</ComFilhos> */}
        {/* <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo"></ComParametro>
<Primeiro></Primeiro> */}
    </div>