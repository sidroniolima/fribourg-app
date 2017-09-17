import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BarChart } from 'react-easy-chart';

import { getAlunoProfile, login } from '../actions/';
import axios from 'axios';

class Home extends Component 
{
	componentDidMount()
	{
		this.props.getAlunoProfile();
	}

  renderMedias(medias)
  {
		const arrayMedias = [];

			_.mapValues(
				_.filter(medias, {anoLetivo: 2017}), (o, []) => { arrayMedias.push({x: o.materiaDescricao, y: o.nota}); } );

		return arrayMedias;
  }

	render() 
	{
		const alunoLogado = this.props.alunoLogado || {};
		const barchartData = this.renderMedias(alunoLogado.medias);

		return (
			<div>
				{/* Content Header (Page header)  */}
				<section className="content-header">
					<h1>Ambiente virtual do aluno</h1>
					<small>Home</small>
				</section>

				{/* Main content */}
				<section className="content">
					<div className="row">

						{/* left-column */}
						<div className="col-md-6">
								{/* general form elements */}
							<div className="box box-primary">
								<div className="box-header with-border">
									<h3 className="box-title">Dados do aluno</h3>
								</div>
								{/* /.box-header */}
								{/* form start */}
								<div role="form">
									<div className="box-body">
										<div className="form-group">
											<label htmlFor="inputSerie">Série</label>
											<input type="text" className="form-control" id="inputSerie" placeholder="Série" value={alunoLogado.serieDescricao  || ''}/>
										</div>
										<div className="form-group">
											<label htmlFor="inputTurma">Turma</label>
											<input type="text" className="form-control" id="inputTurma" placeholder="Turma" value={alunoLogado.turmaNumero  || ''}/>
										</div>
										<div className="form-group">
											<label htmlFor="inputNome">Nome</label>
											<input type="text" className="form-control" id="inputNome" placeholder="Nome do aluno" value={alunoLogado.nome  || ''}/>
										</div>							
										<div className="form-group">
											<label htmlFor="inputEmail">Email</label>
											<input type="email" className="form-control" id="inputEmail" placeholder="Digite o email"
												value={alunoLogado.email  || ''}/>
										</div>													
									</div>
									{/* /.box-body */} 

									<div className="box-footer">
										<button type="submit" className="btn btn-primary">Submit</button>
									</div>
								</div>
							</div>
							{/* /.box */} 
						</div>
						{/* /.col (left) */}

						{/* right-column */}
						<div className="col-md-6">
								{/* general form elements */}
							<div className="box box-primary">
								<div className="box-header with-border">
									<h3 className="box-title">Médias atuais</h3>
								</div>
								{/* /.box-header */}
								<BarChart 
									axes
									data={barchartData} 
									margin={{top: 20, right: 0, bottom: 40, left: 40}}
									width={480}
									yDomainRange={ [0,100] }
    							colorBars
    							barWidth={40}/>
								{/* form start */}
							</div>
							{/* /.box */} 
						</div>
						{/* /.col (left) */}						
					</div>
				</section>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators( { getAlunoProfile }, dispatch);
const mapStateToProps = state => ({ alunoLogado: state.alunos.alunoLogado })

export default connect(mapStateToProps, mapDispatchToProps)(Home);