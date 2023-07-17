import {styled}from 'styled-components'

export const Imagenes = styled.img`
@media (max-width: 768px) {
    border: 2px solid;
    border-radius: 10px;
    width: 100%;}
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
   `
   
export const Div = styled.div`
display: flex;
    justify-content: space-around;
    align-items: center;
  padding: 10px;
 
`