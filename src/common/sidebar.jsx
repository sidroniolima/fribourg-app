import React, { Component } from 'react'
import { connect } from 'react-redux';

class SideBar extends Component 
{
  render() 
  {
    const alunoLogado = this.props.alunoLogado || {};
    return (
      <div>
        <aside className="main-sidebar">

          <section className="sidebar">

            <div className="user-panel">
              <div className="pull-left image">
                <img src={require('../assets/images/aluno.png')} className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>{alunoLogado.nome}</p>
                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
              </div>
            </div>
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">Menu principal</li>
              <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Dados do aluno</span></a></li>
              <li><a href="#"><i className="fa fa-link"></i> <span>Boletim</span></a></li>
            </ul>
          </section>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = state => ( { alunoLogado : state.alunos.alunoLogado });

export default connect(mapStateToProps, null)(SideBar);