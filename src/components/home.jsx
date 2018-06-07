import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import JobNewForm from './job_new_form';
import JobsList from './jobs_list';

import { getJobsConfeccaoLogada, listJobsOportunidades } from '../actions/actions_job';

class Home extends Component
{
	componentDidMount()
	{
		
	}

	renderContent()
	{
		const behavior = this.props.auth.behavior();
		console.log(behavior);
		switch(behavior)
		{
			case 'ROLE_CONFECCAO':
			{
				this.props.getJobsConfeccaoLogada();
				const jobsConfeccaoLogada = this.props.job.jobsConfeccaoLogada || [];

				return (
					<div>
					<section className="content-header">
					<h4>Bem-vindo! Contrate alguém e fique de olho em sua produção.</h4>
					<small>Home</small>
					</section>

					<section className="content">
						<div className="row">

							<div className="col-md-6">
								<div className="box box-primary">
									<div className="box-header with-border">
										<h5 className="box-title">Quer produzir algo?</h5>
									</div>
									<JobNewForm />
								</div>
							</div>

							<div className="col-md-6">
								<div className="box box-primary">
									<div className="box-header with-border">
										<h5 className="box-title">Seus pedidos de produção</h5>
									</div>
									<JobsList list={ jobsConfeccaoLogada } />
								</div>
							</div>
						</div>
					</section>				
					</div>
				);	
			}
			case 'ROLE_FACCAO':
			{
				this.props.listJobsOportunidades();
				const jobsOportunidades = this.props.job.jobsOportunidades || [];
				
				return (
					<div>
					<section className="content-header">
					<h4>Bem-vindo! Encontre um pedido para você produzir.</h4>
					<small>Home</small>
					</section>

					<section className="content">
						<div className="row">

							<div className="col-md-12">
								<div className="box box-primary">
									<div className="box-header with-border">
										<h5 className="box-title">Lista de oportunidades</h5>
									</div>
									<JobsList list={ jobsOportunidades } />
								</div>
							</div>
							
						</div>
					</section>
					</div>				
				);									
			}
		}
	}

	render() 
	{
		return (
			<div>
				{this.renderContent()}
			</div>
		);
	}
}

const mapStateToProps = state => ({ job : state.job });     
const mapDispatchToProps = dispatch => bindActionCreators({ getJobsConfeccaoLogada, listJobsOportunidades }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);