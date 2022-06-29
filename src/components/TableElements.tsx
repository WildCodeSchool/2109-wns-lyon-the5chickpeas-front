import styled from "styled-components";
//style du formulaire
// td: contenu
//thead title
//th: title
export const StyledTable = styled.table`
  margin-top: 40px;
  border: 1px solid black;
  border-radius: 15px;
  width: 100%;
  font-size: 22px;
  overflow: hidden;

  td:nth-child(6) {
    text-align: center;
  }
  td {
    border: 1px solid black;
    padding: 0px;
    margin: 0 px;
  }

  tbody {
    background-color: white;
  }

  th {
    height: 30px;
    background-color: grey;
  }
`;
