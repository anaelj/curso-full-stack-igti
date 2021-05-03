import styled from "styled-components";
import Select from "react-select";

// Styled component named StyledButton
export const StyledSelect = styled(Select)`
  background-color: black;
  font-size: 14px;
  width: 200px;
  border: 0px;
  
  /* height: 20px; */
`;

export const StyledDiv = styled.div ` 
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: stretch;
  justify-items: center;
`;

export const StyledListItem = styled.li ` 
  list-style: none;
  /* display: flex;
  flex-direction: row;
  align-items: center;
  align-content: stretch;
  justify-items: center;
  div {
    display: flex;
    flex-direction: column;
  }
  & < div {
    width: 250px;
  } */
`;

