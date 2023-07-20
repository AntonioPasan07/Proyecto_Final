import styled from 'styled-components'
import { Link } from 'wouter'

const StyledBotonLink = styled(Link)`

`;

export  {
    StyledBotonLink,
}

export const Button = styled.button`
color: white;
  background-color: red;
  padding: 10px 20px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: blue;
    color: white;
  }

`


export const Div = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around
`