import { useLogin } from "../../hooks/useLogin"
import { useUserEvent } from "../../hooks/useUserEvent"
import {Link}from 'wouter'
import {useAuth}from '../../hooks/useAuth'
//import  { useState, useEffect } from "react"
//import {useForm} from 'react-hook-form'
const Dashboard = () => {
  const { data: user, isLoading } = useUserEvent()
  const { logout } = useAuth();//preguntar por que no me esta funcionamdo 
  console.log('data que trae>',user)
  useLogin();
  
  if (isLoading || !user.success) {
    return <p>Loading...</p>;
  }
  const handleLogout = () => {
    logout()
  }

  return (<>
    <h2>{user.data.username}</h2>
    <section>
      {user.data?.data?.length > 0 ? (
        <ul>
          {user.data.data.map((event) => (
            <li key={event.eventId}>
              <strong>Evento:</strong> {event.evento}
              <br />
              <strong>Fecha:</strong> {event.fecha_evento}
              <br />
              <strong>Hora:</strong> {event.hora}
              <br />
              <strong>Dirección:</strong> {event.direccion}
              <br />
              <strong>Descripción:</strong> {event.descripcion}
              <br />
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found.</p>
      )}
    </section>

    <Link href="/unirseEvento">
      <button>Unirse a Evento</button>
    </Link>
    <Link href="/createEvent">
      <button>Crear Evento</button>
    </Link>
    <button onClick={handleLogout}>Salir</button>
    </>
  )
}
export default Dashboard