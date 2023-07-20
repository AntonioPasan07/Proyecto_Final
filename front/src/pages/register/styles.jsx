import styled from "styled-components";

export const FormContainer = styled.section`
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
font-size: 20px;
color: white;
display: block;
margin-bottom: 10px;
`;

export const Input = styled.input`
width: 98%;
/* padding: 8px; */
margin-bottom: 20px;
border: 3px solid #ccc;
border-radius: 4px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const SubmitButton = styled.input`
margin-left: 25%;
width: 50%;
padding: 12px;
background-image: linear-gradient(to left, #575795, #4f52ac, #444cc2, #3345d8, #143dee);
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
}
`;
