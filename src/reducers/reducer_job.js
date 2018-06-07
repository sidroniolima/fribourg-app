import consts from '../common/constants'

const INITIAL_STATE = {
	created: {},
	jobsConfeccaoLogada: [],
	jobsOportunidades: []
}

export default function(state = INITIAL_STATE, action)
{
	switch(action.type)
	{
		case consts.JOB_CREATED : 
		{
			return { ...state, created: action.payload.data }
		}
		case consts.JOB_CONFECCAO_LOGADA_FETCHED :
		{
			return { ...state, jobsConfeccaoLogada: action.payload.data }
		}
		case consts.JOBS_OPORTUNIDADES_FETCHED :
		{
			return { ...state, jobsOportunidades: action.payload.data }
		}
	}
  return state;
}