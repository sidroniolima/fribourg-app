import consts from '../common/constants';

const tokenKey = '_fribourg_app';

const INITIAL_STATE = 
{
  token: JSON.parse(localStorage.getItem(tokenKey)),
  isAuthenticated: false,
  isLoginError: false,
  isAuthenticating: false,
  isForbidden: false,
  msgError: ''
};

export default (state = INITIAL_STATE, action) => 
{
  switch (action.type)
  {
    case 'IS_AUTHENTICATING':
      return { ...state, isAuthenticating: true };

    case 'TOKEN_FETCHED':
      const token = action.payload.headers['authorization'];
      localStorage.setItem(tokenKey, JSON.stringify(token));

      return { ...state, token: token, isAuthenticated: true, isAuthenticating: false };

    case 'TOKEN_VALIDATED':
      if (action.payload)
      {
        return { ...state, isAuthenticated: true, isAuthenticating: false };
      } else {
        localStorage.removeItem(tokenKey);
        return { ...state, isAuthenticated: false, isAuthenticating: false };
      }

    case 'INVALID_LOGIN':
      return { ...state, isLoginError: true, msgError: action.payload, isAuthenticating: false };

    case consts.ACCESS_FORBIDDEN:
      return { ...state, isForbidden: true }

    default:
      return state;
  }
}