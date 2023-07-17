import {StyledBotonLink, Button, Div} from './styles'

const BotonLink = ({ to, texto }) => {
    return (<>
      <Div>
      <StyledBotonLink to={to}>
        <Button>{texto}</Button>
      </StyledBotonLink>
      </Div>
      
      </>
    );
  };
  
  export default BotonLink;