import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 80%;
`;

export const EventItem = styled.li`
background-color: aliceblue;
    border-radius: 7px;
    margin-bottom: 10px;
    border: 2px solid red;
    padding: 10px;
`;

export const EventTitle = styled.strong`
  font-size: 18px;
`;

export const EventInfo = styled.p`
  margin-top: 5px;
`;
export const DashboardButton = styled.button`
  background-image: linear-gradient(to left, #575795, #4f52ac, #444cc2, #3345d8, #143dee);
  color: white; 
  margin: 10px; 
`;
export const DashboardTitle = styled.h2`
margin: 10%;
color: white;
font-size: 24px; 
`;
