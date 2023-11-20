import { redirect } from 'react-router-dom';

export function getAuthToken() {
  return localStorage.getItem('token');
}

export const loader = () => getAuthToken();

export const authLoader = () => (getAuthToken() ? null : redirect('/auth'));
