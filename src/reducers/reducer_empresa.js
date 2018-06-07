import consts from '../common/constants'

export default function(state = {}, action)
{
	switch(action.type)
	{
		case consts.GETTED_EMPRESA_LOGADA : 
			return { ...state, alunoLogado: action.payload.data }
	}
  return state;
}