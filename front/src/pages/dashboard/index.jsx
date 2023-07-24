import { useLogin } from "../../hooks/useLogin";
import { useUserEvent } from "../../hooks/useUserEvent";
import { Link, useLocation } from "wouter";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import {
  DashboardWrapper,
  EventList,
  EventItem,
  EventTitle,
  DashboardButton,
  DashboardTitle,
  StyledParagraph
} from "./styles";


const Dashboard = () => {
  const { data: user, isLoading } = useUserEvent();
  const { logout} = useAuth();//preguntar por que no me esta funcionamdo
  const [, setLocation] = useLocation();
  const [clicked, setClicked] = useState('');
  console.log("data que trae>", user);
  useLogin();

  if (isLoading || !user.success) {
    return <p>Loading...</p>;
  }

  const handleLogout = () => {
    logout();
    
  };

  const handleClick = (event) => {
    setLocation(`/lista/${event.secreto_password}`);
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setClicked(url);
  };
 
  return (
    <>
      <DashboardWrapper>
        <DashboardTitle>Tus Eventos: {user.data.username}</DashboardTitle>
        <EventList>
          {!!user.data?.data?.length ? (
            user.data.data.map((event) => {
              const urlToCopy = `${import.meta.env.VITE_URL_SECRET}/${
                event.secreto_password
              }`;
              return (
                <section>
                  <EventItem
                    onClick={() => handleClick(event)}
                    key={event.eventId}
                  >
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

                  <StyledParagraph clicked={urlToCopy === clicked} onClick={() => handleCopy(urlToCopy)}>
                    Haz click para copiar el enlace: {urlToCopy}
                  </StyledParagraph>
                </section>
              );
            })
          ) : (
            <p>No events found.</p>
          )}
        </EventList>
        <Link href="/createEvent">
          <DashboardButton>Crear Evento</DashboardButton>
        </Link>
        <DashboardButton onClick={() => handleLogout()}>Salir</DashboardButton>
      </DashboardWrapper>
    </>
  );
};
export default Dashboard;
