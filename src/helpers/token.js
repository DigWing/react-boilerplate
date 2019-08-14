// Helpers for interacting with localStorage to store authToken
const TOKEN = 'X-AuthToken';

export const setToken = value => localStorage.setItem(TOKEN, value);
export const getToken = () => localStorage.getItem(TOKEN);
export const removeToken = () => localStorage.removeItem(TOKEN);
