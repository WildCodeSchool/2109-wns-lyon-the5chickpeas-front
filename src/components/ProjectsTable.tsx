import React, { useEffect, useState } from "react";
//import styled from 'styled-components';
import { StyledTable } from "./TableElements";
import { CBHideDone, CBManagedByMe } from "./Checkboxes";
import { Container } from "../pages/styles";
import { ButtonCustom } from "./Button";
import { useNavigate } from "react-router-dom";
import BasicModal from "./Modal";
import ProjectForm from "./forms/ProjectForm";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import TableList from "../components/forms/Table";

export interface ProjectType {
  id: number;
  manager_id: number;
  name: string;
  status_id: number;
  due_date: string;
  description: string;
  inititial_time_estimee: number;
}
export interface Title {
  title: string;
}
const ProjectsTable = () => {
  const navigation = useNavigate();

  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const titles: Title[] = [
    { title: "Name" },
    { title: "Status" },
    { title: "Description" },
    { title: "Due Date" },
    { title: "Time estimation" },
    { title: "Actions" },
  ];

  // Preparation de la requete GraphQL
  const { data, loading, error, refetch } = useQuery(gql`
    query GetProjects {
      getProjects {
        id
        name
        description
      }
    }
  `);
  // Edit Project

  // Rechargement de la page
  useEffect(() => {
    if (data?.getProjects) {
      // <=> data?.getProjects
      setProjectList(data?.getProjects);
    }
  }, [data]);

  // Delete a project query
  const [deleteProject] = useMutation(gql`
    mutation DeleteProject($deleteProjectId: ID!) {
      deleteProject(id: $deleteProjectId)
    }
  `);

  // Delete a project query
  const [updateProject] = useMutation(gql`
    mutation UpdateProject($updateProjectId: ID!) {
      updateProject(id: $updateProjectId)
    }
  `);

  const deletePro = async (projectId: number): Promise<void> => {
    const result = await deleteProject({
      variables: { deleteProjectId: projectId },
      refetchQueries: ["GetProjects"],
    });

    if (result.data.deleteProject) {
      // Flash message
      setOpenAlert(true);
      //refetch();
    }
  };

  const updatePro = async () => {};

  const handleOpen = () => {
    setIsModal(true);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleCloseAlert = () => setOpenAlert(false);
  // gerer le close du formulaire
  const handleCloseModal = () => {
    setIsModal(false);
    setOpen(false);
  };

  useEffect(() => {
    handleCloseModal();
  }, []);

  // Gestion des erreurs de l'appel
  if (error) {
    setMessage("Une erreur est survenue, pensez à vous identifier !");
  }

  return !loading || !error ? (
    <Container>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity='success'
          sx={{ width: "100%" }}
        >
          Le project a été supprimé avec succès !
        </Alert>
      </Snackbar>
      <div className='flex-custom flex row'>
        <h1 id='title'>Projects List</h1>
        <ButtonCustom onClick={handleOpen}>Ajouter un projet</ButtonCustom>
        {isModal && (
          <BasicModal open={open} handleClose={handleClose}>
            <ProjectForm
              onCloseModal={() => {
                handleCloseModal();
              }}
            />
          </BasicModal>
        )}
      </div>

      {loading ? (
        <CircularProgress />
      ) : (
        <TableList
          titles={titles}
          data={projectList}
          onClickClear={deletePro}
        />
      )}
    </Container>
  ) : (
    <Container>
      {message ? <p className='alert warning'>{message}</p> : ""}
    </Container>
  );
};

export default ProjectsTable;
