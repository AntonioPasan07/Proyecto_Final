import { useForm } from 'react-hook-form'
import { createEvent } from '../../hooks/useEvento'
import { login } from '../../misc/templates'
import BottonLink from '../../components/Link'
import Title from '../../components/Title'
import {SectionEvent,Input,SubmitButton,ErrorMessage, Label}from './styles'
const CreateEvent = () => {
  const URL = import.meta.env.VITE_URL_SECRET;
  const { register, formState, handleSubmit , reset } = useForm();
  const { evento: doEvento, secreto } = createEvent(reset)






  const { errors } = login;
  return (
    <SectionEvent>
      <Title texto = 'Crea Evento'/>
      <form onSubmit={handleSubmit(doEvento)}>
        <Label htmlFor="Evento">Evento:</Label><br />
        <Input id="evento" placeholder="Tipo de evento"{...register("evento", { required: true })} />
        <ErrorMessage>{formState.errors && errors[formState.errors?.evento?.type]}</ErrorMessage>


        <Label htmlFor="Telefono">Telefono:</Label><br />
        <Input id="telefono" placeholder="Telefono"{...register("telefono", { required: true })} />
        <ErrorMessage>{formState.errors && errors[formState.errors?.telefono?.type]}</ErrorMessage>


        <Label htmlFor="Direccion" >Dirección:</Label><br />
        <Input id="direccion" placeholder="Direccion del evento"{...register("direccion", { required: true })} />
        <ErrorMessage>{formState.errors && errors[formState.errors?.direccion?.type]}</ErrorMessage>


        <Label htmlFor="Descripcion" >Descripción:</Label><br />
        <Input id="descripcion" placeholder="Algo sobre el evento"{...register("descripcion", { required: true, maxLength: 100 })} />
        <ErrorMessage>{formState.errors && errors[formState.errors?.descripcion?.type]}</ErrorMessage>

        <Label htmlFor="fechaEvento" >Dia del evento:</Label><br />
        <Input id="fechaEvento" type='date' placeholder="Fecha"{...register("fechaEvento", { required: true })} />
        <ErrorMessage>{formState.errors && errors[formState.errors?.fecha?.type]}</ErrorMessage>


        <Label htmlFor="Hora">Hora del evento:</Label><br />
        <Input id="hora" type='time' placeholder="Hora"{...register("hora", { required: true })} />
        <ErrorMessage>{formState.errors && errors[formState.errors?.hora?.type]}</ErrorMessage>


        <SubmitButton type="submit" />

      </form>
      {secreto ? <p>{secreto}</p> : <p>Cuando le des a enviar te doy codigo para tus amigos
        </p>}
      <BottonLink to ={`${URL}/${secreto}`} texto="Apuntate" />
    </SectionEvent>


  )
}
export default CreateEvent