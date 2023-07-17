import Title from '../../components/Title'
import Imagen from '../../components/img';
import BotonLink from '../../components/Link'
import Div from './styles'

const Inicio = () => {

  return (
    <>
    <section>
      <Title texto="Gestiona tus Eventos" />
      <p>Esta Aplicacion esta diseñada para que crees tus propios eventos y invites a tus amigos.</p>
      <Imagen src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BYRIPIRSsSxY29QVWjQzWvzOuuK7DEG9pw&usqp=CAU" alt="Imagen de la página de Inicio" />
      <p>Registrate si no tienes cuenta.</p>
      <BotonLink to="/register" texto="Registrarse" />
      <Div>
        <p>¿Ya estás registrado?</p>
        <BotonLink to="/login" texto="Iniciar sesión" />
      </Div>
      </section>  
    </>
  )
}

export default Inicio