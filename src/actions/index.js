import axios from 'axios';

import consts from '../common/constants';

export function getAlunoProfile()
{
  return dispatch => 
  {
      axios.get(`${consts.API_URL}/aluno/profile`)
        .then(resp => 
        {
            dispatch({ type: consts.GETTED_ALUNO_LOGADO, payload: resp });
        })
        .catch(e => dispatch(handleError(e)));
    }
}

export function getAlunoMedias(aluno, anoLetivo)
{
    return dispath => 
    {
        axios.get(`${consts.API_URL}/aluno/${aluno}/${anoLetivo}`)
            .then(resp => 
            {
                dispath({ type: consts.FETCHED_ALUNO_MEDIAS, payload: resp });
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
        }
    }
}

export function login(values)
{
    return submitLogin(values, consts.AUTH_URL);
}

export function signup(values)
{
    // TODO
}

function submitLogin(values, url)
{
    return dispatch => 
    {
        dispatch({ type: 'IS_AUTHENTICATING', payload: true });
        axios.post(url, values)
            .then(resp => 
            {
                Promise.all(
                    [ dispatch({ type : 'TOKEN_FETCHED', payload: resp })]);
            })
            .catch(e => {
                dispatch({ type: 'INVALID_LOGIN', payload: 'Usuário e/ou senha inválidos.' });
            });
    }
}

export function logout()
{
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token)
{
    return dispatch =>
    {
        if (token)
        {
            dispatch({ type: 'TOKEN_VALIDATED', payload: true });
        }
    }
}