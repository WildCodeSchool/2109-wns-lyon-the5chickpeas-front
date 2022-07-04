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

const GET_STATUS = gql`
  query GetStatus {
    getStatus {
      name
      id
    }
  }
`;
const GET_PROJECTS = gql`
  query GetProjects {
    getProjects {
      id
      name
      description
      dueDate
      estimatedTime
      status {
        name
      }
      managers {
        id
      }
    }
  }
`;
const GET_PROJECT = gql`
  query GetProject($getProjectId: ID!) {
    getProject(id: $getProjectId) {
      id
      name
      description
      dueDate
      estimatedTime
      status {
        name
      }
      managers {
        id
      }
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation DeleteProject($deleteProjectId: ID!) {
    deleteProject(id: $deleteProjectId)
  }
`;

const UPDATE_PROJECT = gql`
  mutation UpdateProject($updateProjectId: ID!) {
    updateProject(id: $updateProjectId) {
      name
      description
      status {
        name
      }
      managers {
        id
      }
    }
  }
`;

const ProjectsTable = () => {
  const navigation = useNavigate();

  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number>();

  const titles: Title[] = [
    { title: "Name" },
    { title: "Description" },
    { title: "Status" },
    { title: "Due Date" },
    { title: "Time estimation" },
    { title: "Managers" },
    { title: "Actions" },
  ];

  // Preparation de la requete GraphQL
  const { data, loading, error, refetch } = useQuery(GET_PROJECTS);

  //ne pas executer la query tant que selectedProjectId est undefined
  const { data: dataGetProject } = useQuery(GET_PROJECT, {
    variables: {
      getProjectId: selectedProjectId,
    },
    skip: selectedProjectId === undefined,
  });
  const { data: dataGetStatus } = useQuery(GET_STATUS);

  useEffect(() => {
    if (dataGetProject) {
      //updatePro(selectedProjectId);
      handleOpen();
    }
  }, [dataGetProject]);

  // Rechargement de la page
  useEffect(() => {
    if (data?.getProjects) {
      // <=> data?.getProjects
      setProjectList(data?.getProjects);
    }
  }, [data]);

  // Delete a project query
  const [deleteProject] = useMutation(DELETE_PROJECT);

  // Delete a project query
  const [updateProject] = useMutation(UPDATE_PROJECT);

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
  // useEffect(() => {
  //   console.log("selectedProjectId", selectedProjectId);
  // });
  const updatePro = async (projectId: number): Promise<void> => {
    setIsUpdated(true);
    setSelectedProjectId(projectId);
    <BasicModal open={open} handleClose={handleClose}>
      <ProjectForm
        dataGetStatus={dataGetStatus.getStatus}
        dataGetProject={dataGetProject?.getProject}
        isUpdated={isUpdated}
        onCloseModal={() => {
          handleCloseModal();
        }}
      />
    </BasicModal>;
    // const result = await updateProject({
    //   variables: { updateProjectId: projectId },
    //   refetchQueries: ["GetProjects"],
    // });
    // if (result.data.updateProject) {
    //   setOpenAlert(true);
    // }
  };

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
          Project has been successfully deleted!
        </Alert>
      </Snackbar>
      <div className='flex-custom flex row'>
        <h1 id='title'>Projects List</h1>
        <ButtonCustom onClick={handleOpen}>Add a project</ButtonCustom>
        {isModal && (
          <BasicModal open={open} handleClose={handleClose}>
            <ProjectForm
              isUpdated={isUpdated}
              dataGetProject={dataGetProject?.getProject}
              dataGetStatus={dataGetStatus.getStatus}
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
          onClickEdit={updatePro}
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
