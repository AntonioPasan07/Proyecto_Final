import {useInvitacion}from '../../hooks/useInvitados'
import {useForm}from 'react-hook-form'
import {login} from '../../misc/templates'
import BottonLink from '../../components/Link'
import {useEventInvitado }from '../../hooks/useGetEvent'
const DetallesEvento = () => {
  const {data, isLoading} = useEventInvitado()
  console.log('me trae el secreto>>>',data)
  const {invitacion: doInvitados} = useInvitacion()
  const { register, formState, handleSubmit } = useForm();


  if (isLoading) {
    return <p>Loading...</p>;
  }


  const evento = data?.data?.evento
  const { errors } = login;
    return (<>
  <h1>Detalles del evento</h1>
  <section>
        <p>Evento al que estas invitado: {evento?.evento}</p>
        <p>Fecha del evento: {evento?.fecha_evento}</p>
        <p>Hora del evento: {evento?.hora}</p>
        <p>Teléfono: {evento?.telefono}</p>
        <p>Dirección: {evento?.direccion}</p>
      </section>
  
   
  <section>
  <form onSubmit={handleSubmit(doInvitados)}>


        <label htmlFor="eventToken" >Pega el codigo a qui:</label><br />
        <input id="eventToken" placeholder="Pega a qui el token"{...register("eventToken", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.eventToken?.type]}</p>

        <label htmlFor="confirmacion">Confirma tu asistencia:</label><br />
        <input id="confirmacion" placeholder="Confirma tu asistencia"{...register("confirmacion", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.confirmacion?.type]}</p>


        <label htmlFor="pagoBizum" >Donacion al Anfitrion:</label><br />
        <input id="pagoBizum" type = 'number' placeholder="Donación"{...register("pagoBizum", { required: true })} />
        <p>{formState.errors && errors[formState.errors?.pagoBizum?.type]}</p>


        <label htmlFor="estadoBizum" >Dime si esta pendiente o realizado:</label><br />
        <input id="estadoBizum" placeholder="Estado de la donación"{...register("estadoBizum", { required: true,})} />
        <p>{formState.errors && errors[formState.errors?.estadoBizum?.type]}</p>

        <input type="submit" />
    </form>
    <BottonLink to ="/lista" texto="Lista de asistentes" />
  </section>
  </>
    )
}
export default DetallesEvento