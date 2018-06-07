import React from 'react'

export default props => 
{
  const { meta : { touched, error } } = props;
  const className = `form-group has-feedback ${props.visible ? '' : 'hide'} ${touched && error ? 'has-error' : ''}`;
  const options = props.options;

  return (
      <div className={className}>
         <select className="form-control"
              type={props.type}
              {...props.input}
              placeholder={props.placeholder}>
				  
				  <option value="" disabled defaultValue>{props.disabledOption}</option>
              
				  {options.map(opt => (
                <option key={opt}>{opt}</option>
              ))};
			</select>

          <span className={`glyphicon glyphicon-${props.glyph} form-control-feedback`}></span>
          <div className="help-block">
              { touched ? error : ''}
          </div>
      </div>
  );    
}