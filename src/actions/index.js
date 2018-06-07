import axios from 'axios';

import consts from '../common/constants';

export function getEmpresaProfile()
{
  return dispatch => 
  {
      axios.get(`${consts.API_URL}/empresa/profile`)
        .then(resp => 
        {
            dispatch({ type: consts.GETTED_EMPRESA_LOGADA, payload: resp });
        })
        .catch(e => dispatch(handleError(e)));
    }
}

export function createEmpresa(values)
{
    const data = {
        nome: values.nome,
        email: values.email,
        usuario: {
            username: values.email,
            password: values.pass
        },
        tipo: values.tipo == 'Produzir' ? 'FACCAO' : 'CONFECCAO'
    }

    return dispatch => 
    {
        axios.post(`${consts.API_URL}/empresa/pre/create`, data)
          .then(resp => 
          {
              dispatch(login({username: values.email, password: values.pass}));
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

export function login(values)
{
    console.log(values);
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