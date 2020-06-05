const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    case "SIGNOUT_ERROR":
      console.log("signout failed");
      return {
        ...state,
        authError: "Signout failed"
      };
    case "SIGNUP_SUCCESS":
      console.log("signup_success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup_error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
