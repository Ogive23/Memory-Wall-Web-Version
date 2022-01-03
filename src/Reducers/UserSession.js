import { GlobalState } from "../Store";

export const UserSession = (state = GlobalState, action) => {
  switch (action.type) {
    case "Login":
      return {
        ...state,
        loggedIn: true,
        user: action.user,
        profile: action.profile,
        accessToken: action.accessToken,
        expiryDate: action.expiryDate,
      };
    case "Logout":
      return {
        ...state,
        loggedIn: false,
        user: action.user,
        profile: action.profile,
        accessToken: action.accessToken,
        expiryDate: action.expiryDate,
      };
    default:
      return state;
  }
};
