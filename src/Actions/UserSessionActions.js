export const Login = (user, profile, accessToken, expiryDate) => {
  return {
    type: "Login",
    user,
    profile,
    accessToken,
    expiryDate,
  };
};

export const Logout = () => {
  return {
    type: "Logout",
    user: null,
    profile: null,
    accessToken: null,
    expiryDate: null,
  };
};
