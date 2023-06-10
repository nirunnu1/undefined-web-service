export const UPDATE_AUTH_USER = "@auth/update_auth_user";
export const setAuthUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_AUTH_USER,
      payload: user,
    });
  };
};
