export const baseUrl = import.meta.env.VITE_API;

export const endpoints = {
  LOGIN: "/login",
  REGISTER: "/register",
  NON_VERIFY_USERS: "/users/allVerify",
  VERIFY_USER: "/users/verify",
  DELETE_USER: "/users/delete",
};
