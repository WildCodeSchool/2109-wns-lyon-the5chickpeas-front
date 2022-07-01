import React from "react";
// styles
import styled from "styled-components";
import { Container } from "./styles";
// components
import HeadBar from "../components/HeadBar";
import SideBar from "../components/SideBar";

//import { Input, Form, ButtonSignUp } from '../components/FormElements';
import BordedContainer from "../components/BordedContainer";
import ProjectsTable from "../components/ProjectsTable";
import { CBHideDone, CBManagedByMe } from "../components/Checkboxes";

export type Project = {
  manager_id: number;
  name: string;
  status: number;
  due_date: string;
  description: string;
  intitial_time_estimee: number;
};

const ProjectsList = () => {
  return (
    <Container className='flex'>
      <HeadBar />
      <MainWithBox>
        <SideBar />
        <ContainerBordered>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <CBManagedByMe />
            <CBHideDone />
          </div>
          <ProjectsTable />
        </ContainerBordered>
      </MainWithBox>
    </Container>
  );
};

const MainWithBox = styled.main`
    margin-top: 80px;
    width: 100%
    display: flex;
    flex-position: row;
    align-item: flex-start;

`;
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
`;

export default ProjectsList;
