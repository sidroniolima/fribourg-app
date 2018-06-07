import '../css/auth.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { login, createEmpresa } from '../actions';

import Input from '../common/form/input';
import Select from '../common/form/select';

class Auth extends Component
{
  constructor(props)
  {
    super(props);
    this.state = { signup: false }
  }

  onSubmit(values)
  {
    const { login, createEmpresa } = this.props;

    if (this.state.signup)
    {
      createEmpresa(values);
    } else {
      login(values);
    }
  }

  renderField(field)
  {
    const { meta : { touched, error } } = field;
    const className = `form-group has-feedback ${field.visible ? '' : 'hide'} ${touched && error ? 'has-error' : ''}`;

    return (
        <div className={className}>
            <input className="form-control"
                type={field.type}
                {...field.input}
                placeholder={field.placeholder}
            />
            <span className={`glyphicon glyphicon-${field.glyph} form-control-feedback`}></span>
            <div className="help-block">
                { touched ? error : ''}
            </div>
        </div>
    );       
  }

  render()
  {
    const { handleSubmit } = this.props;
    const msgInicial = this.state.signup ? 'Cadastre-se e faça parte desta rede!' : 'Faça login para contratar ou encontrar um job';
    
    const required = value => value ? undefined : 'O campo é obrigatório';
    const minValue = min => value => value && value.length < min ? `O campo senha deve ter no mínimo ${min} caracteres` : undefined;
    const passwordMatch = pass => value => (value && pass) && (value === pass) ? undefined : 'As senhas não coincidem';
    const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Digite um email válido' : undefined;
    const minValue6 = minValue(6);

    return (
      <div className="back-image">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html"><b>Job</b>FACÇÃO</a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">{msgInicial}</p>
      
          <form onSubmit={ handleSubmit( v => this.onSubmit(v)) }>
              <Field 
                component={ Input } 
                type="input" 
                placeholder='Nome da empresa'
                name='nome'
                glyph='user'
                visible={ this.state.signup }
                validate={ this.state.signup ? required : undefined }/>

              <Field 
                component={ Select } 
                type="input" 
                name='tipo'
                glyph='tower'
                disabledOption='O que você quer?'
                options={['Contratar', 'Produzir']}
                visible={ this.state.signup }
                validate={ this.state.signup ? required : undefined }/>

                <Field 
                component={ Input } 
                type="input" 
                placeholder='Email'
                name='email'
                glyph='envelope'
                visible={ this.state.signup }
                validate={ this.state.signup ? [required, email]: undefined }/>

              <Field 
                component={ Input } 
                type="password" 
                placeholder="Senha" 
                name="pass"
                glyph="lock"
                visible={ this.state.signup }
                validate={ this.state.signup ? [minValue6, required] : undefined }/>                
              
              <Field 
                component={ Input } 
                type="password" 
                placeholder="Redigite a senha" 
                name="repass"
                glyph="lock"
                visible={ this.state.signup }
                validate={ this.state.signup ? [minValue6, required, passwordMatch(this.props.passwordForm)] : undefined }/>

              <Field 
                component={ Input } 
                type="email" 
                placeholder="E-mail" 
                name="username"
                glyph="envelope"
                visible={ !this.state.signup }
                validate={ !this.state.signup ? [required, email] : undefined }/>

              <Field 
                component={ Input } 
                type="password" 
                placeholder="Senha" 
                name="password"
                glyph="lock"
                visible={ !this.state.signup }
                validate={ !this.state.signup ? required : undefined }/>

            <div className={`text-center ${this.props.auth.isAuthenticating ? 'show' : 'hidden'}`}>
              <i className='fa fa-spinner fa-spin'/>              
            </div>
            <div className={`alert alert-danger ${this.props.auth.isLoginError ? 'show' : 'hidden'}`}>
              <p>{this.props.auth.msgError}</p>  
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox">
                    <label>
                      <input type="checkbox"/> Manter conectado
                    </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button
                  type="submit" className="btn btn-primary btn-block btn-flat"
                  disabled={this.props.isAuthenticating}>
                  {this.state.signup ? 'Cadastrar' : 'Entrar' }
                  </button>
              </div>
            </div>
          </form>
          
          <br/>
          <a href="#" className={`${this.state.signup ? 'hide' : ''}`} onClick={() => this.setState({signup : true})}>Ainda não é cadastrado? Clique aqui.</a>
          <a href="#" className={`${this.state.signup ? '' : 'hide'}`} onClick={() => this.setState({signup : false})}>Já é cadastrado? Clique aqui.</a>

        </div>
      </div>
      </div>
    );
  }
}

const selector = formValueSelector('authForm');
const mapDispatchToProps = dispatch => bindActionCreators({ login, createEmpresa }, dispatch);
const mapStateToProps = state => ({ auth: state.auth, passwordForm: selector(state,'pass') });

export default reduxForm({ 
  form: 'authForm' })
  (
    connect(mapStateToProps, mapDispatchToProps)(Auth)
  );