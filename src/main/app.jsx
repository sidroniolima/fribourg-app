import '../common/dependencies';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../common/header'
import SideBar from '../common/sidebar'

import Aluno from '../components/aluno';
import Boletim from '../components/boletim';
import Home from '../components/home';

export default props => (
    <div className='wrapper'>

        <Header />
        <SideBar />

        <div className='content-wrapper'>
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/alunos" component={Aluno}/>
                <Route path="/boletim" component={Boletim}/> 
                </Switch>
            </BrowserRouter>
        </div>

    </div>
)