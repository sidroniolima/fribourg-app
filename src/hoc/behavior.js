import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent)
{
  class Behavior extends Component
  {
    render()
    {
      return <ComposedComponent { ...this.props }/>
    }
  }

  const mapStateToProps = state => ( { auth : state.auth } );
  return connect(mapStateToProps)(Behavior);
}