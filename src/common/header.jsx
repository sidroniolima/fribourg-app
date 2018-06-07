import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions';

class Header extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = { open: false };
  }

  changeOpen()
  {
    this.setState({ open: !this.state.open });
  }

  close()
  {
    this.setState({ open: false });
  }

  render()
  {
    const subject = this.props.auth.subject || {};

    return (
      <div>
        <header className="main-header">

          <a href="index2.html" className="logo">
            <span className="logo-mini"><b>Job</b>Facção</span>
            <span className="logo-lg"><b>Encontre!</b>Contrate!</span>
          </a>

          <nav className="navbar navbar-static-top" role="navigation">
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown messages-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-envelope-o"></i>
                    <span className="label label-success">4</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 4 messages</li>
                    <li>
                      <ul className="menu">
                        <li>
                          <a href="#">
                            <div className="pull-left">
                              <img src={require('../assets/images/sewing-machine.png')} className="img-circle" alt="User Image"/>
                            </div>
                            <h4>
                                Support Team
                                <small><i className="fa fa-clock-o"></i> 5 mins</small>
                              </h4>
                            <p>Why not buy a new awesome theme?</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="footer"><a href="#">See All Messages</a></li>
                  </ul>
                </li>

                <li className="dropdown notifications-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell-o"></i>
                    <span className="label label-warning">10</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 10 notifications</li>
                    <li>
                      <ul className="menu">
                        <li>
                          <a href="#">
                            <i className="fa fa-users text-aqua"></i> 5 new members joined today
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="footer"><a href="#">View all</a></li>
                  </ul>
                </li>
                <li onMouseLeave={() => this.close()} 
                    className={`dropdown user user-menu ${this.state.open ? 'open' : ''}`}>
                  
                  <a href="javascript:;" onClick={() => this.changeOpen()} 
                    className="dropdown-toggle" data-toggle="dropdown"
                    aria-expanded={this.state.open ? 'true' : 'false'}>
                    
                    <img src={require('../assets/images/sewing-machine.png')} className="user-image" alt="User Image"/>
                    <span className="hidden-xs">{subject}</span>

                  </a>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img src={require('../assets/images/sewing-machine.png')} className="img-circle" alt="User Image"/>

                      <p>
                        {subject}
                        <small></small>
                      </p>
                    </li>
                    <li className="user-footer">
                      <div className="pull-right">
                        <a href="javascript:;" onClick={() => this.props.logout()} className="btn btn-default btn-flat">Sair</a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                </li>
              </ul>
            </div>
          </nav>
        </header>  
      </div>
    )
  }
}

const mapStateToProps = state => ( { auth : state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);