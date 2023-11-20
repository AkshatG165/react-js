import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request, params }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup')
    throw json({ message: 'Unsupported mode' }, { status: 422 });

  const fd = await request.formData();
  const userData = {
    email: fd.get('email'),
    password: fd.get('password'),
  };

  const res = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (res.status === 422 || res.status === 401) return res;
  if (!res.ok)
    throw json({ message: 'Unable to create new user' }, { status: 500 });

  const resData = await res.json();
  const token = resData.token;
  localStorage.setItem('token', token);

  return redirect('/');
}
