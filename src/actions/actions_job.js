import axios from 'axios';
import { initialize } from 'redux-form';

import consts from '../common/constants';

const INITIAL_VALUES = {
	prazoIdeal: '',
	numeroItens: '',
	valorMinimo: '',
	descricao: ''
}

export function createJob(values)
{
    return dispatch =>
    {
        axios.post(`${consts.API_URL}/job`, values)
        .then(resp => 
        {
            dispatch({ type: consts.JOB_CREATED, payload: resp });
        })
        .catch(e => dispatch(handleError(e)));     
    }
}

export function initiateJobForm(values)
{
  return dispatch => 
  {
    if (values)
    {
      return dispatch(initialize('jobNewForm', values));
    } else
    {
      console.log(INITIAL_VALUES);
      return dispatch(initialize('jobNewForm', INITIAL_VALUES));
    }
  }
}

export function getJobsConfeccaoLogada()
{
  return dispatch => 
  {
    axios.get(`${consts.API_URL}/job/meus`)
      .then(resp => 
      {
        return dispatch({ type: consts.JOB_CONFECCAO_LOGADA_FETCHED, payload: resp});
      })
      .catch(e => dispatch(handleError(e)));
  }
}

export function listJobsOportunidades()
{
  return dispatch => 
  {
    axios.get(`${consts.API_URL}/job/oportunidades`)
      .then(resp => 
      {
        return dispatch({ type: consts.JOBS_OPORTUNIDADES_FETCHED, payload: resp});
      })
      .catch(e => dispatch(handleError(e)));
  }
}

function handleError(e)
{   
    if (!e.response)
    {
        return { type: consts.GENERIC_ERROR, payload: e };
    } else
    {
        const status = e.response.status;

        switch(status)
        {
            case 401:
                return { type: consts.TOKEN_VALIDATED, payload: false };
            case 403:
                return { type: consts.ACCESS_FORBIDDEN, payload: false };
        }
    }
}