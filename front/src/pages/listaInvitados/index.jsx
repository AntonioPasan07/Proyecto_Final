
import { useUserEvent } from '../../hooks/useUserEvent';

const ListaInvitados = () => {
  const { data: userEvent, isLoading } = useUserEvent();
   
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (<section>
    
    <div>
      <h1>Lista invitados</h1>
      <ul>
        {userEvent.data?.data?.map((invitado, id) => (
          <li key={invitado.id}>{invitado.username}</li>
        ))}
      </ul>
     
    </div>
    </section>
    
  );
};

export default ListaInvitados;

