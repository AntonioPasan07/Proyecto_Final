import { useForm } from "react-hook-form";
import BotonLink from "../../components/Link";
import Title from "../../components/Title";
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

const Register = () => {
  const isLoading = useLogin();
  const { register: registerAuth } = useAuth();
  const { register, formState, handleSubmit } = useForm();
  const url = getCurrentUrl("/login");

  const { errors } = login;
  return (
    <FormContainer>
      <Title texto="Register" />
      {isLoading && <p>Loading...</p>}

      <form onSubmit={handleSubmit(registerAuth)}>
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

        <Label htmlFor="username">Username</Label>
        <br />
        <Input
          id="username"
          placeholder="username"
          {...register("username", { required: true })}
        />
        <ErrorMessage>
          {formState.errors && errors[formState.errors?.username?.type]}
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

      <BotonLink to={url} texto={"A login"} />
    </FormContainer>
  );
};
export default Register;
