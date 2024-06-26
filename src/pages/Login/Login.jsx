import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';


const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}

export default Login;
