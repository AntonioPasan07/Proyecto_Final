import { useAuth } from "../../hooks/useAuth";
import { useLogin } from "../../hooks/useLogin";
import { useForm } from 'react-hook-form'
import {login} from '../../misc/templates'
const Register = () => {
  const isLoading = useLogin()
  const { register: registerAuth } = useAuth();
  const { register,formState, handleSubmit } = useForm()
  
 /* const handleFormSubmit = (data) => {
    registerAuth(data);
  };*/
  
  const { errors } = login;
  return (
    <section>
    <h1>Register Page</h1>
    {isLoading && <p>Loading...</p>}
    

    <form onSubmit={handleSubmit(registerAuth)}>
        <label htmlFor="email">Email:</label><br />
        <input id="email" placeholder="user@user.com"{...register("email", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.email?.type]}</p>


        <label htmlFor="username" >Username</label><br />
        <input id="username" placeholder="username"{...register("username", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.username?.type]}</p>


        <label htmlFor="password" >Password:</label><br />
        <input id="password" type="password" placeholder="******"{...register("password", { required: true, minLength: 4 })} />
        <p>{formState.errors && errors[formState.errors?.password?.type]}</p>

        <input type="submit" />
    </form>
</section>
  )
}
export default Register