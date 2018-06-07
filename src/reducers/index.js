import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ReducerEmpresa from './reducer_empresa';
import ReducerAuth from './reducer_auth';
import ReducerJob from './reducer_job';

const rootReducer = combineReducers({
  empresa : ReducerEmpresa,
  job : ReducerJob,
  auth : ReducerAuth,
  form: formReducer
});

export default rootReducer;