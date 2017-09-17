const tokenKey = '_fribourg_app';

const INITIAL_STATE = 
{
  token: JSON.parse(localStorage.getItem(tokenKey)),
  isAuthenticated: false,
  isLoginError: false,
  msgError: ''
};

export default (state = INITIAL_STATE, action) => 
{
  switch (action.type)
  {
    case 'TOKEN_FETCHED':
      const token = action.payload.headers['authorization'];
      localStorage.setItem(tokenKey, JSON.stringify(token));

      return { ...state, token: token, isAuthenticated: true };
    case 'TOKEN_VALIDATED':
      if (action.payload)
      {
        return { ...state, isAuthenticated: true };
      } else {
        localStorage.removeItem(tokenKey);
        return { ...state, isAuthenticated: false };
      }
    case 'INVALID_LOGIN':
      return { ...state, isLoginError: true, msgError: action.payload };
    default:
      return state;
  }
}