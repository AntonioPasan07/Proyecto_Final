import { useForm } from 'react-hook-form'
//import {useUser}from '../../hooks/useUser'
import { createEvent } from '../../hooks/useEvento'
//import {useLogin}from '../../hooks/useLogin'
import { login } from '../../misc/templates'
import BottonLink from '../../components/Link'
const CreateEvent = () => {
  // useLogin()
  const { evento: doEvento, secreto } = createEvent()
  const { register, formState, handleSubmit } = useForm();







  const { errors } = login;
  return (
    <section>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit(doEvento)}>
        <label htmlFor="Evento">Evento:</label><br />
        <input id="evento" placeholder="Tipo de evento"{...register("evento", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.evento?.type]}</p>


        <label htmlFor="Telefono">Telefono:</label><br />
        <input id="telefono" placeholder="Telefono"{...register("telefono", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.telefono?.type]}</p>


        <label htmlFor="Direccion" >Dirección:</label><br />
        <input id="direccion" placeholder="Direccion del evento"{...register("direccion", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.direccion?.type]}</p>


        <label htmlFor="Descripcion" >Descripción:</label><br />
        <input id="descripcion" placeholder="Algo sobre el evento"{...register("descripcion", { required: true, maxLength: 100 })} />
        <p>{formState.errors && errors[formState.errors?.descripcion?.type]}</p>

        <label htmlFor="fechaEvento" >Dia del evento:</label><br />
        <input id="fechaEvento" type='date' placeholder="Fecha"{...register("fechaEvento", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.fecha?.type]}</p>


        <label htmlFor="Hora">Hora del evento:</label><br />
        <input id="hora" type='time' placeholder="Hora"{...register("hora", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.hora?.type]}</p>


        <input type="submit" />

      </form>
      {secreto ? <p>{secreto}</p> : <p>Cuando le des a enviar te doy codigo para tus amigos
        </p>}
      <BottonLink to ="/detalles" texto="Apuntate" />
    </section>

  )
}
export default CreateEvent