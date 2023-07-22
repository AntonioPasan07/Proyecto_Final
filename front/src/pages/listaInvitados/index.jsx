
import BottonLink from '../../components/Link';
import Navbar from '../../components/Navbar';
import { useListaUser } from '../../hooks/useLista'
import {List,ListItem, Section,NoInvitadosMessage} from './styles'
import Title from '../../components/Title';
const ListaInvitados = ({ params }) => {
  console.log('listaInvitados >>>>>', params.id)
  const { data, isLoading } = useListaUser(params.id)
  console.log('data>>>',data)
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Section>
      <Navbar />
      <div>
        <Title texto ='Lista de invitados'/>
        {data?.length > 0 ? (
          <List>
            {data?.map((invitado) => (
              <ListItem key={invitado.username}>{invitado.username}</ListItem>
            ))}
          </List>
        ) : (
          <NoInvitadosMessage>No hay invitados.</NoInvitadosMessage>
        )}
      </div>
      <BottonLink to="/" texto="Si quieres crear eventos, regístrate" />
    </Section>
  );
};

export default ListaInvitados;


