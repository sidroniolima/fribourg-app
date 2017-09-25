import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent)
{
  class VerifyAuth extends Component
  {
    render()
    {
      if (this.props.isForbidden)
      {
        return (
          <div>
            <section className="content-header">
              <h1>
                Acesso negado!
              </h1>
            </section>
        
            <section className="content">
        
              <div className="error-page">
                <h2 className="headline text-red">403</h2>
        
                <div className="error-content">
                  <h3><i className="fa fa-warning text-red"></i> Oops! Algo deu errado.</h3>
        
                  <p>
                    Parece que você tentou acessar algum recurso não permitido.
                    Isso acontece pois você pode não ter privilégios para esse recurso.
                  </p>
        
                </div>
              </div>
        
            </section> 
            </div>
          );
      } else
      {
        return <ComposedComponent { ...this.props }/>
      }
    }
  }

  const mapStateToProps = state => ( {isForbidden : state.auth.isForbidden} );
  return connect(mapStateToProps)(VerifyAuth);
}

