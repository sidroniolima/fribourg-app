import '../common/dependencies';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../common/header'
import SideBar from '../common/sidebar'

import Home from '../components/home';
import Behavior from '../hoc/behavior';

class App extends Component
{
	render()
   {
		return (
   		<div className='wrapper'>
        
					<Header />
					<SideBar behavior={this.props.auth.behavior()}/>
		
					<div className='content-wrapper'>
						<BrowserRouter>
							<Switch>
							<Route exact path="/" component={(Behavior)(Home)}/>
							</Switch>
						</BrowserRouter>
					</div>
		
			</div> );
    }
}
const mapStateToProps = state => ({ auth: state.auth});
export default connect(mapStateToProps,null)(App);