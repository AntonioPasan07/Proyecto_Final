import {Imagenes, Div} from './styles'


const Imagen = ({ src, alt }) => {
    return(<>
    <Div>
    <Imagenes src={src} alt={alt} />
    </Div>
    </>
    )
  }
  
  export default Imagen