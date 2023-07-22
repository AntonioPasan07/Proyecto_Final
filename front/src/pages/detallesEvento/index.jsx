import { useInvitacion } from '../../hooks/useInvitados'
import { useForm } from 'react-hook-form'
import { login } from '../../misc/templates'
import BottonLink from '../../components/Link'
import { useEventInvitado } from '../../hooks/useGetEvent'
import { FormContainer, Label, Input, ErrorMessage, SubmitButton, EventoSection, SectionParrafo } from './styles';
import Title from '../../components/Title'

const DetallesEvento = ({ params }) => {
  const { data, isLoading } = useEventInvitado(params.id)
  console.log('me trae el secreto>>>', data)
  const { register, formState, handleSubmit, reset } = useForm();
  const { invitacion: doInvitados, nombresInvitados } = useInvitacion(reset)

  /* const handleSubmitForm = () =>{
     handleSubmit(doInvitados)
     setLocalStorage("invitado",nombresInvitados)
   }*/

  if (isLoading) {
    return <p>Loading...</p>;
  }


  const evento = data?.data?.evento
  const { errors } = login;
  return (<>
    <Title texto='Detalles Del Evento' />
    <EventoSection>
      <SectionParrafo>Evento al que estas invitado: {evento?.evento}</SectionParrafo>
      <SectionParrafo>Fecha del evento: {evento?.fecha_evento}</SectionParrafo>
      <SectionParrafo>Hora del evento: {evento?.hora}</SectionParrafo>
      <SectionParrafo>Teléfono: {evento?.telefono}</SectionParrafo>
      <SectionParrafo>Dirección: {evento?.direccion}</SectionParrafo>
    </EventoSection>


    <FormContainer>
      <form onSubmit={handleSubmit(doInvitados)}>


        <Label htmlFor="eventToken" >Pega el codigo a qui:</Label><br />
        <Input id="eventToken" placeholder="Pega a qui el token"{...register("eventToken", { required: true })} />
        <ErrorMessage>{formState.errors && errors[formState.errors?.eventToken?.type]}</ErrorMessage>

        <Label htmlFor="confirmacion">Confirma tu asistencia:</Label><br />
        <Input id="confirmacion" placeholder="Confirma tu asistencia"{...register("confirmacion", { required: true })} />
        <ErrorMessage>{formState.errors && errors[formState.errors?.confirmacion?.type]}</ErrorMessage>


        <Label htmlFor="pagoBizum" >Donacion al Anfitrion:</Label><br />
        <Input id="pagoBizum" type='number' placeholder="Donación"{...register("pagoBizum", { required: true })} />
        <ErrorMessage>{formState.errors && errors[formState.errors?.pagoBizum?.type]}</ErrorMessage>


        <Label htmlFor="estadoBizum" >Dime si esta pendiente o realizado:</Label><br />
        <Input id="estadoBizum" placeholder="Estado de la donación"{...register("estadoBizum", { required: true, })} />
        <ErrorMessage>{formState.errors && errors[formState.errors?.estadoBizum?.type]}</ErrorMessage>

        <SubmitButton type="submit" />
      </form>
      <BottonLink to={`/lista`} texto="Lista de asistentes" />
    </FormContainer>
  </>
  )
}
export default DetallesEvento