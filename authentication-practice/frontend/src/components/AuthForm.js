import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import classes from './AuthForm.module.css';

function AuthForm() {
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login';
  const isLogin = mode === 'login';

  const authRes = useActionData();
  const isSaving = navigation.state === 'submitting';

  return (
    <>
      <Form method="POST" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {authRes &&
          authRes.errors &&
          Object.values(authRes.errors).map((err) => <p key={err}>{err}</p>)}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${mode === 'login' ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSaving}>
            {isLogin
              ? isSaving
                ? 'Logging in...'
                : 'Login'
              : isSaving
              ? 'Saving...'
              : 'Save'}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
