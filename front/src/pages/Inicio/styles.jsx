

import styled from "styled-components";

export const Div = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Parrafo = styled.p`
margin: 17px;
font-size: 17px;
text-align: center;
color: white;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const BotonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: flex;
    align-items: baseline;
    align-content: stretch;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

 