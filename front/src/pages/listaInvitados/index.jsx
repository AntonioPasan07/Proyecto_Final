
import BottonLink from '../../components/Link';
import Navbar from '../../components/Navbar';
import { useListaUser } from '../../hooks/useLista'
const ListaInvitados = ({ params }) => {
  console.log('listaInvitados', params.id)
  const { data, isLoading } = useListaUser(params.id)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Navbar />
      <div>
        <h1>Lista de invitados</h1>
        {data?.username.length > 0 ? (
          <ul>
            {data?.username.map((invitado) => (
              <li key={invitado.username}>{invitado.username}</li>
            ))}
          </ul>
        ) : (
          <p>No hay invitados.</p>
        )}
      </div>
      <BottonLink to="/" texto="Si quieres crear eventos, regístrate" />
    </section>
  );
};

export default ListaInvitados;


