import { useLogin } from "../../hooks/useLogin"
import { useUserEvent } from "../../hooks/useUserEvent"
import { Link } from 'wouter'
import { useAuth } from '../../hooks/useAuth'
import { DashboardWrapper, EventList, EventItem, EventTitle, DashboardButton, DashboardTitle } from './styles';

const Dashboard = () => {
  const { data: user, isLoading } = useUserEvent()
  const { logout } = useAuth();//preguntar por que no me esta funcionamdo 
  console.log('data que trae>', user)
  useLogin();

  if (isLoading || !user.success) {
    return <p>Loading...</p>;
  }
  const handleLogout = () => {
    logout()
  }

  return (<>
    <DashboardWrapper>
      <DashboardTitle>Tus Eventos: {user.data.username}</DashboardTitle>
      <EventList>
        {user.data?.data?.length > 0 ? (
          user.data.data.map((event) => (
            <EventItem key={event.eventId}>
              <EventTitle>Evento:</EventTitle> {event.evento}
              <br />
              <EventTitle>Fecha:</EventTitle> {event.fecha_evento}
              <br />
              <EventTitle>Hora:</EventTitle> {event.hora}
              <br />
              <EventTitle>Dirección:</EventTitle> {event.direccion}
              <br />
              <EventTitle>Descripción:</EventTitle> {event.descripcion}
            </EventItem>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </EventList>
      <Link href="/createEvent">
        <DashboardButton>Crear Evento</DashboardButton>
      </Link>
      <DashboardButton onClick={handleLogout}>Salir</DashboardButton>
    </DashboardWrapper>
  </>
  )
}
export default Dashboard