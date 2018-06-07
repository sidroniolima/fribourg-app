import React, { Component } from 'react'
import { connect } from 'react-redux';

class SideBar extends Component 
{
  renderBehavior(behavior)
  {
    switch(behavior)
    {
      case 'ROLE_CONFECCAO':
      {
        return (
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">Menu principal</li>
            <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Home</span></a></li>
            <li><a href="#"><i className="fa fa-link"></i> <span>Meus pedidos</span></a></li>
          </ul>
        );
      }
      case 'ROLE_FACCAO':
      {
        return (
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">Menu principal</li>
            <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Home</span></a></li>
            <li><a href="#"><i className="fa fa-link"></i> <span>Minha produção</span></a></li>
            <li><a href="#"><i className="fa fa-link"></i> <span>Histórico</span></a></li>
          </ul>
        );        
      }
    }
  }

  render() 
  {
    const { subject } = this.props.auth || {};
    return (
      <div>
        <aside className="main-sidebar">

          <section className="sidebar">

            <div className="user-panel">
              <div className="pull-left image">
                <img src={require('../assets/images/sewing-machine.png')} className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>{subject}</p>
                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
              </div>
            </div>
            {this.renderBehavior(this.props.behavior)}
          </section>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = state => ( { auth : state.auth });

export default connect(mapStateToProps, null)(SideBar);