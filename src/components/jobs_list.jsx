import React, { Component } from 'react';
import moment from 'moment';

class JobsList extends Component
{
  renderRows()
  {
    const list = this.props.list || [];
    const status = {
      'CRIADO': 'primary',
      'CONCORRENCIA': 'danger',
      'PRODUCAO': 'warning',
      'ENTREGUE': 'success'
    }

    if (!list)
    {
      return <div>Nenhum registro</div>;
    }      
    else 
    {
      return list.map((job, index) => 
        (
          <tr key={job.id}>
            <td>{++index}</td>
            <td>{moment().format('DD/MM/YYYY', job.prazoIdeal)}</td>
            <td><span className={`label label-${status[job.status]}`}>{job.statusDescricao}</span></td>
            <td>{job.nomeFaccaoConcorrente}</td>
            <td>{job.descricao}</td>
            <td>{job.numeroItens}</td>
            <td>{job.valorMinimo}</td>
          </tr>
        ));
    }
  }

  render()
  {
    return (
      <div className="box-body no-padding">
        <table className="table table-condensed data-table">
          <tbody><tr>
            <th style={{width: '5%'}}>#</th>
            <th style={{width: '8%'}}>Pra quando</th>
            <th style={{width: '10%'}}>Como está</th>
            <th style={{width: '21%'}}>Quem está produzindo</th>
            <th style={{width: '40%'}}>Breve descrição</th>
            <th style={{width: '8%'}}>Qtd</th>
            <th style={{width: '8%'}}>Valor</th>
          </tr>
          {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default JobsList;