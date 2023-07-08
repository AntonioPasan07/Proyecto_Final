
import Imagen from '../../components/img';
import { Link } from 'wouter';
const Inicio = ()=> {

    return(
        <>
        <h1>Gestiona tus Eventos</h1>
        <p>Esta Aplicacion esta diseñada para que crees tus propios eventos y invites a tus amigos.</p>
        <Imagen src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BYRIPIRSsSxY29QVWjQzWvzOuuK7DEG9pw&usqp=CAU" alt="Imagen de la página de Inicio" />
        <div>
          
        <Link to="/register">
          <button>Registrarse</button>
        </Link>
        
        </div>
        <p>¿Ya estás registrado?</p>
        <div>
         
        <Link to="/login">
          <button>Iniciar sesión</button>
        </Link>
        
        </div>
      </>
    )
}

export default Inicio