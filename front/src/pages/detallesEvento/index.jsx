import { useForm } from "react-hook-form";
import BottonLink from "../../components/Link";
import Title from "../../components/Title";
import { useEventInvitado } from "../../hooks/useGetEvent";
import useInvitados from "../../hooks/useInvitados";
import { useUser } from "../../hooks/useUser";
import { login } from "../../misc/templates";
import { useLocation } from "wouter";
import {
  ErrorMessage,
  EventoSection,
  FormContainer,
  Input,
  Label,
  SectionParrafo,
  SubmitButton,
} from "./styles";
import { useEffect } from "react";

const DetallesEvento = ({ params }) => {
  const { data: user } = useUser();
  const { data, isLoading } = useEventInvitado(params.id);
  const [location, setLocation] = useLocation();
  console.log("me trae el secreto>>>", data);
  const { register, formState, handleSubmit } = useForm();
  const { invitacion: doInvitados } = useInvitados(params.id);

  useEffect(() => {
    if (user && !user.success) {
      setLocation(`/login?origin=${location}`);
    }
  }, [user]);

  const handleSubmitForm = (data) => {
    doInvitados({ confirmacion: null, eventToken: params.id, ...data });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.info("> user: ", user);

  const evento = data?.data?.evento;
  const { errors } = login;

  return (
    <>
      <Title texto="Detalles Del Evento" />
      <EventoSection>
        <SectionParrafo>
          Evento al que estas invitado: {evento?.evento}
        </SectionParrafo>
        <SectionParrafo>
          Fecha del evento: {evento?.fecha_evento}
        </SectionParrafo>
        <SectionParrafo>Hora del evento: {evento?.hora}</SectionParrafo>
        <SectionParrafo>Teléfono: {evento?.telefono}</SectionParrafo>
        <SectionParrafo>Dirección: {evento?.direccion}</SectionParrafo>
      </EventoSection>

      <FormContainer>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Label htmlFor="pagoBizum">Donacion al Anfitrion:</Label>
          <br />
          <Input
            id="pagoBizum"
            type="number"
            placeholder="Donación"
            {...register("pagoBizum", { required: true })}
          />
          <ErrorMessage>
            {formState.errors && errors[formState.errors?.pagoBizum?.type]}
          </ErrorMessage>

          <Label htmlFor="estadoBizum">
            Dime si esta pendiente o realizado:
          </Label>
          <br />
          <Input
            id="estadoBizum"
            placeholder="Estado de la donación"
            {...register("estadoBizum", { required: true })}
          />
          <ErrorMessage>
            {formState.errors && errors[formState.errors?.estadoBizum?.type]}
          </ErrorMessage>

          <SubmitButton type="submit" />
        </form>

        <BottonLink to={`/lista/${params.id}`} texto="Lista de asistentes" />
      </FormContainer>
    </>
  );
};
export default DetallesEvento;
