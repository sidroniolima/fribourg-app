import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Boletim from '../components/boletim'
import Aluno from '../components/aluno'

export default props => (
    <div className='container'>
        <Aluno />
        <Boletim />
    </div>
)