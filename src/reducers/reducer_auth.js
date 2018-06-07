import CONSTS from '../common/constants'; 
import jwt from 'jsonwebtoken';

const INITIAL_STATE = 
{
  token: JSON.parse(localStorage.getItem(CONSTS.tokenSecret)),
  subject: '',
  isAuthenticated: false,
  isLoginError: false,
  isAuthenticating: false,
  isForbidden: false,
  msgError: '',
  roles: [],
  behavior: function() 
  {
    return this.roles.includes('ROLE_FACCAO') ? 'ROLE_FACCAO' : 'ROLE_CONFECCAO';
  }
};

export default (state = INITIAL_STATE, action) => 
{
  switch (action.type)
  {
    case 'IS_AUTHENTICATING':
      return { ...state, isAuthenticating: true };

    case 'TOKEN_FETCHED':
      const token = action.payload.headers['authorization'];
      localStorage.setItem(CONSTS.TOKEN_KEY, JSON.stringify(token));
      try
      {
        const decode = jwt.verify(token, CONSTS.TOKEN_SECRET, 'HS256');
        return { ...state, subject: decode.subject, token: token, isAuthenticated: true, isAuthenticating: false, roles: decode.roles };
      } catch(err)
      {
        console.log(err);
        return { ...state, isLoginError: true, msgError: 'Não foi possível fazer o login.', isAuthenticating: false };
      }

    case 'TOKEN_VALIDATED':
      if (action.payload)
      {
        return { ...state, isAuthenticated: true, isAuthenticating: false };
      } else {
        localStorage.removeItem(CONSTS.TOKEN_KEY);
        return { ...state, isAuthenticated: false, isAuthenticating: false };
      }

    case 'INVALID_LOGIN':
      return { ...state, isLoginError: true, msgError: action.payload, isAuthenticating: false };

    case CONSTS.ACCESS_FORBIDDEN:
      return { ...state, isForbidden: true }

    default:
      return state;
  }
}