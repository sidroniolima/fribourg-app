import consts from '../common/constants'

export default function(state = {}, action)
{
	switch(action.type)
	{
		case consts.GETTED_ALUNO_LOGADO : 
			return { ...state, alunoLogado: action.payload.data }
		case consts.FETCHED_ALUNO_MEDIAS:
			return { ...state, mediasAnoLetivo: action.payload.data }
	}
  return state;
}