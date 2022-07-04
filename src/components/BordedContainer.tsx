import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ProjectsTable from "./ProjectsTable";
import TasksTable from "./TasksTable";

function BordedContainer() {
  return (
    <ContainerBordered>
      {/* <ProjectsTable/> */}
      <TasksTable />
    </ContainerBordered>
  );
}

export default BordedContainer;

const ContainerBordered = styled.div`
  margin: 2rem 1rem 3rem 10rem;
  background-color: #fff;
  border-radius: 25px;
  min-width: 83vw;
  min-height: 90vh;
  border: 2px solid black;
  margin-left: 250px;
  margin-right: 10px;
  padding: 30px;
  //flex-direction: row;
`;
