import { useLogin } from "../../hooks/useLogin"
import { useUserEvent } from "../../hooks/useUserEvent"

//import  { useState, useEffect } from "react"
//import {useForm} from 'react-hook-form'
const Dashboard = () => {
  const { data: user, isLoading } = useUserEvent()
  console.log('data que trae>',user)
  useLogin();
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{user.data.username}</h2>
      {user.data.length > 0 ? (
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
    </div>
  )
}
export default Dashboard