import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ReducerAlunos from './reducer_alunos';
import ReducerAuth from './reducer_auth';

const rootReducer = combineReducers({
  alunos : ReducerAlunos,
  auth : ReducerAuth,
  form: formReducer
});

export default rootReducer;