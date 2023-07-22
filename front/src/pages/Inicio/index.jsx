import Title from "../../components/Title";
import Imagen from "../../components/img";
import BotonLink from "../../components/Link";
import { Parrafo, BotonContainer } from "./styles";

const Inicio = () => {
  return (
    <>
      <section>
        <Title texto="Gestiona tus Eventos" />
        <Parrafo>
          Esta Aplicación está diseñada para que crees tus propios eventos y
          invites a tus amigos.
        </Parrafo>
        <Imagen
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BYRIPIRSsSxY29QVWjQzWvzOuuK7DEG9pw&usqp=CAU"
          alt="Imagen de la página de Inicio"
        />
        <Parrafo>Regístrate si no tienes cuenta.</Parrafo>
        <BotonContainer>
          <BotonLink to="/register" texto="Registrarse" />
          <Parrafo>¿Ya estás registrado?</Parrafo>
          <BotonLink to="/login" texto="Iniciar sesión" />
        </BotonContainer>
      </section>
    </>
  );
};

export default Inicio;
