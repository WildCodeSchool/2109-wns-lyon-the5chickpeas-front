import React, {useEffect, useState} from 'react';
//import styled from 'styled-components';
import { StyledTable } from './TableElements'
import { CBHideDone, CBManagedByMe } from './Checkboxes';
import { Container } from '../pages/styles';
import { ButtonCustom } from './Button';
import { useNavigate } from "react-router-dom";
import BasicModal from './Modal';
import ProjectForm from './forms/ProjectForm';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';


type projectType = {
  id: number,
  manager_id: number,
  name: string, 
  status_id: number,
  due_date: string,
  description: string, 
  intitial_time_estimee: number

}

const ProjectsTable = () => {

  const navigation = useNavigate();

  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState('');
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [projectList, setProjectList] = useState([]);


  // Preparation de la requete GraphQL
  const {data, loading, error, refetch} = useQuery(gql`
    query GetProjects {
      getProjects {
        id,
        name,
        description
      }
    }` 
  );

   // Rechargement de la page
   useEffect(() => {
     if(data?.getProjects){ // <=> data?.getProjects
      setProjectList(data?.getProjects);
     }
   },[data]);

   // Delete a project query
   const [deleteProject] = useMutation(gql`
      mutation DeleteProject($deleteProjectId: ID!) {
        deleteProject(id: $deleteProjectId)
      }` 
   );

   const deletePro = async (projectId: number) =>{

      const result = await deleteProject({variables:{deleteProjectId: projectId}, refetchQueries: ['GetProjects']});

      if(result.data.deleteProject){
          // Flash message 
          setOpenAlert(true); 
          //refetch();
      }
   }


  const handleOpen = () => {
    setIsModal(true)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const handleCloseAlert = () => setOpenAlert(false);


  // Gestion des erreurs de l'appel 
  if(error){
    setMessage('Une erreur est survenue, pensez à vous identifier !');
  }

  return (
      !loading || !error ?
        <Container>
          <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
              Le project a été supprimé avec succès !
            </Alert>
          </Snackbar>
        <div className='flex-custom flex row'>
          <h1 id='title'>Projects List</h1>    
          <ButtonCustom onClick={handleOpen}>Ajouter un projet</ButtonCustom>
          {isModal && 
          
          <BasicModal open={open} handleClose={handleClose}>
            <ProjectForm />
          </BasicModal> } 
        </div>

        {loading ?  <CircularProgress /> :
        <StyledTable id='projects'>
            <><thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Description</th>
                <th>Initial Time Estimee</th>
                <th>Action(s)</th>
              </tr>
            </thead>
            
            <tbody>

                {projectList && projectList.map((project: projectType) => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.status_id}</td>
                    <td>{project.due_date}</td>
                    <td>{project.description}</td>
                    <td>{project.intitial_time_estimee} heures</td>
                    <td>
                      <ClearIcon onClick={() => deletePro(project.id)}></ClearIcon>
                      <EditIcon></EditIcon>
                    </td>
                  </tr>
                ))}

            </tbody>
            </>
          </StyledTable>
           }
        </Container> : <Container>{message ? <p className='alert warning'>{message}</p> : ''}</Container>

      
  )
}

export default ProjectsTable