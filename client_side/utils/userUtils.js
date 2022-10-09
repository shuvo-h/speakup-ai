import Cookies from 'js-cookie';
export const getUserFromCookie = () => Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {};