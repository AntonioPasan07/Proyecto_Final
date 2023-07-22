import { useForm } from "react-hook-form";
import BotonLink from "../../components/Link";
import Title from "../../components/Title";
import Imagen from "../../components/img";
import { useAuth } from "../../hooks/useAuth";
import { useLogin } from "../../hooks/useLogin";
import { login } from "../../misc/templates";
import { getCurrentUrl } from "../../utils";
import {
  ErrorMessage,
  FormContainer,
  Input,
  Label,
  SubmitButton,
} from "./styles";

const Login = () => {
  const isLoading = useLogin("/dashboard");
  const { login: doLogin } = useAuth();
  const { register, formState, handleSubmit } = useForm();
  const url = getCurrentUrl("/register");

  const { errors } = login;

  return (
    <FormContainer>
      <div>
        <Imagen
          src="https://www.rotularte.com.ar/wp-content/uploads/ideas-fiestas-eventos-empresariales.jpg"
          alt="Imagen de la página de Inicio"
        />
        <Title texto="Login Page" />
      </div>
      {isLoading && <p>Loading...</p>}
      <form onSubmit={handleSubmit(doLogin)}>
        <Label htmlFor="email">Email:</Label>
        <br />
        <Input
          id="email"
          placeholder="user@user.com"
          {...register("email", { required: true })}
        />
        <ErrorMessage>
          {formState.errors && errors[formState.errors?.email?.type]}
        </ErrorMessage>

        <Label htmlFor="password">Password:</Label>
        <br />
        <Input
          id="password"
          type="password"
          placeholder="******"
          {...register("password", { required: true, minLength: 4 })}
        />
        <ErrorMessage>
          {formState.errors && errors[formState.errors?.password?.type]}
        </ErrorMessage>

        <SubmitButton type="submit" />
      </form>

      <BotonLink to={url} texto={"A registro"} />
    </FormContainer>
  );
};

export default Login;
