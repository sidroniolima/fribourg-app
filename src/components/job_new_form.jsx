import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { initiateJobForm, createJob } from '../actions/actions_job';

import Input from '../common/form/input';
import TextArea from '../common/form/textarea';

class JobNewForm extends Component
{
  constructor(props)
  {
    super(props);
    this.props.initiateJobForm();
  }

  onSubmit(values)
  {
    console.log(values);
    this.props.createJob(values);
  }

  render()
  {
    const { handleSubmit } = this.props;
    const required = value => value ? undefined : 'O campo é obrigatório';
    const minValue = min => value => value && value >= min ? undefined : `O valor deve ser maior que ${min}`;
    const minValue1 = minValue(1);

    return (
      <form onSubmit={ handleSubmit( v => this.onSubmit(v)) }>
        <div className="box-body">
          <Field 
            component={ Input } 
            type="date" 
            placeholder='Pra quando precisa?'
            name='prazoIdeal'
            visible='true'
            validate={ required }/>

          <Field 
            component={ Input } 
            type="number" 
            placeholder="Quantos itens?" 
            name="numeroItens"
            visible='true'
            minValue='1'
            validate={ [required, minValue1] }/>                
          
          <Field 
            component={ Input } 
            type="number" 
            placeholder="Qual o valor a pagar?" 
            name="valorMinimo"
            visible='true'
            minValue='1'
            validate={ [required, minValue1] }/>   

          <Field 
            component={ TextArea } 
            type="textarea" 
            placeholder="Descreva a produção" 
            name="descricao"
            visible='true'
            rows='10'
            validate={ required }/>
        </div>
        <div className="box-footer">
          <div className="row">
            <div className="col-xs-4">
              <button
                type="submit" className="btn btn-primary btn-block btn-flat">Criar</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ initiateJobForm, createJob }, dispatch);

export default reduxForm({form: 'jobNewForm'})(connect(null, mapDispatchToProps)(JobNewForm));
