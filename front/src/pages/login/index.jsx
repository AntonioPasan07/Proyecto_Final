//import { Link } from 'wouter';
import {useLogin} from '../../hooks/useLogin'
import { useForm } from 'react-hook-form';
import { useAuth } from "../../hooks/useAuth";
import { login } from '../../misc/templates';

const Login = () => {
  const isLoading = useLogin()
    const { login: doLogin } = useAuth();
  const { register, formState, handleSubmit } = useForm();
  

  /*const handleFormSubmit = (data) => {
    doLogin(data);
  };*/
  const { errors } = login;

  return (
    <section>
      <h1>Login Page</h1>
      {isLoading && <p>Loading...</p>}
      <form onSubmit={handleSubmit(doLogin)}>
        <label htmlFor="email">Email:</label><br />
        <input id="email" placeholder="user@user.com" {...register("email", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.email?.type]}</p>

        <label htmlFor="password">Password:</label><br />
        <input id="password" type="password" placeholder="******" {...register("password", { required: true, minLength: 4 })} />
        <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
    
         
            <input type="submit" />
        
      </form>
    </section>
  );
};

export default Login;