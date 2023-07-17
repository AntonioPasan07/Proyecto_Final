
import {useLogin} from '../../hooks/useLogin'
import { useForm } from 'react-hook-form';
import { useAuth } from "../../hooks/useAuth";
import { login } from '../../misc/templates';
import Title from '../../components/Title';
import Imagen from '../../components/img'
const Login = () => {
  const isLoading = useLogin('/dashboard')
  const { login: doLogin } = useAuth();
  const { register, formState, handleSubmit } = useForm();
  

  
  const { errors } = login;

  return (
    <section>
      <div>
        <Imagen src="https://www.rotularte.com.ar/wp-content/uploads/ideas-fiestas-eventos-empresariales.jpg" alt="Imagen de la página de Inicio" />
      <Title texto = 'Login Page'/>
      </div>
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