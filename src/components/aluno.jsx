import React, { Component } from 'react'

class Aluno extends Component 
{ 
    
    render () 
    {
        return (
            <div className="aluno-box">
                <div className="form-horizontal aluno-box-inner">
                    <div className="form-group">
                        <label htmlFor="out-name" className="col-lg-1 col-sm-1 control-label">Nome</label>
                        <div className="col-lg-6 col-sm-6">
                            <input id="out-name" className="form-control no-border" value="Luiza Heringer da Silva" readOnly="true"/>
                        </div>
                    </div>            
                    <div className="form-group">
                        <label htmlFor="out-grade" className="col-lg-1 col-sm-1 control-label">Série</label>
                        <div className="col-lg-6 col-sm-6">
                            <input id="out-serie" className="form-control no-border" value="8o ano" readOnly="true"/>
                        </div>
                    </div>    
                    <div className="form-group">
                        <label htmlFor="out-class" className="col-lg-1 col-sm-1 control-label">Turma</label>
                        <div className="col-lg-6 col-sm-6">
                            <input id="out-class" className="form-control no-border" value="802" readOnly="true"/>
                        </div>
                    </div>                                               
                </div>
            </div>
        )
    }
}

export default Aluno