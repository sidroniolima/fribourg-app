import '../common/dependencies';

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../main/app';
import Auth from './auth';

import { login, validateToken } from '../actions';

class AuthOrApp extends Component
{ 
  componentDidMount()
  {
      this.props.validateToken(this.props.auth.token);
  }

  render()
  {
    const { isAuthenticated, token } = this.props.auth;
    if (isAuthenticated)
    {
      axios.defaults.headers.common['Authorization'] = token;   
      return <App>{this.props.children}></App>
    } else 
    {
      return <Auth />
    }
    
  }
}
const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators( { validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);