import '../css/auth.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Input from '../common/form/input_auth';
import { bindActionCreators } from 'redux';
import { login } from '../actions';

class Auth extends Component
{
  constructor(props)
  {
    super(props);
  }

  onSubmit(values)
  {
    const { login } = this.props;
    login(values);
  }

  render()
  {
    const { handleSubmit } = this.props;

    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html"><b>Escola</b>FRIBOURG</a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Faça login para acesso restrito</p>
      
          <form onSubmit={ handleSubmit( v => this.onSubmit(v)) }>
            <div className="form-group has-feedback">
              <Field component={ Input } type="email" className="form-control" placeholder="E-mail" name="username"/>
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <Field component={Input} type="password" className="form-control" placeholder="Senha" name="password"/>
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className={`text-center ${this.props.auth.isAuthenticating ? 'show' : 'hidden'}`}>
              <i className='fa fa-spinner fa-spin'/>              
            </div>
            <div className={`alert alert-danger ${this.props.auth.isLoginError ? 'show' : 'hidden'}`}>
              <p>{this.props.auth.msgError}</p>  
            </div>
            <div className="row">
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat"
                  disabled={this.props.isAuthenticating}>Entrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Auth = reduxForm({ form: 'authForm' })(Auth);
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps, mapDispatchToProps)(Auth);