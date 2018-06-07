import React from 'react'

export default props => 
{
  const { meta : { touched, error } } = props;
  const className = `form-group has-feedback ${props.visible ? '' : 'hide'} ${touched && error ? 'has-error' : ''}`;

  return (
      <div className={className}>
          <input className="form-control"
              type={props.type}
              {...props.input}
              placeholder={props.placeholder}
          />
          <span className={`glyphicon glyphicon-${props.glyph} form-control-feedback`}></span>
          <div className="help-block">
              { touched ? error : ''}
          </div>
      </div>
  );    
}