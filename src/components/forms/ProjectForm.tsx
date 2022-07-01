import React, { useEffect, useState } from "react";
import { Container } from "../../pages/styles";
import {
  Form,
  InputModal,
  InputModalTextArea,
} from "../../components/FormElements";
import "../../App.css";
import { ButtonCustom } from "../Button";
//import { useMutation, useQuery } from "@apollo/client/react/hooks/useMutation";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ProjectType } from "../ProjectsTable";

interface Status {
  name: string;
  id: number;
}

const ProjectForm = ({
  onCloseModal,
  dataGetStatus,
  isUpdated,
}: //dataGetProject,
{
  onCloseModal: Function;
  dataGetStatus: Array<Status>;
  isUpdated: boolean;
  //dataGetProject: ProjectType;
}) => {
  // Initialisation des champs pour l'entité PROJECT
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [estimatedTime, setEstimatedTime] = useState<number>();
  const [managers, setManagers] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<number>();
  const [error, setError] = useState("");

  // Preparation de la requete GraphQL
  const [AddProject, { data, loading }] = useMutation(gql`
    mutation AddProject($data: ProjectInput!) {
      addProject(data: $data) {
        name
        status {
          name
        }
        description
        dueDate
        estimatedTime
      }
    }
  `);

  return (
    <>
      <Container>
        <Form
          onSubmit={async (e: React.SyntheticEvent) => {
            e.preventDefault();

            // Traitement ==> Fetch en grapgQL
            const data = {
              description,
              name,
              status_id: selectedStatus,
              dueDate,
              estimatedTime,
            };

            await AddProject({ variables: { data: data } });
          }}
        >
          <InputModal
            id='name-input'
            type='text'
            placeholder='Name of your project...'
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <Box display='flex' width='100%' alignItems='center'>
            <InputLabel id='demo-simple-select-standard-label' sx={{ mr: 1 }}>
              Status
            </InputLabel>
            <Select
              sx={{ flex: 1 }}
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              value={"" + selectedStatus}
              label='Status'
              onChange={(event: SelectChangeEvent) =>
                setSelectedStatus(parseInt(event.target.value))
              }
            >
              {dataGetStatus.map((s) => (
                <MenuItem value={s.id}>{s.name}</MenuItem>
              ))}
            </Select>
          </Box>

          <InputModalTextArea
            id='description-input'
            placeholder='Description of your project...'
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            rows={3}
          />

          <InputModal
            id='dueDate-input'
            type='date'
            placeholder='Due date...'
            value={dueDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDueDate(e.target.value)
            }
          />

          <InputModal
            id='estimatedTime-input'
            type='number'
            placeholder='Time Estimation of your project...'
            value={estimatedTime}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEstimatedTime(parseInt(e.target.value))
            }
          />
          {/* {isUpdated && <InputModal
            id='manager-input'
            type='string'
            placeholder='Manager'
            value={managers}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setManagers(e.target.value)
            }
          />} */}
          <div>
            <ButtonCustom color={"white"}>Add</ButtonCustom>
            <ButtonCustom color={"white"} onClick={() => onCloseModal()}>
              Cancel
            </ButtonCustom>
          </div>

          {error !== "" && { error }}
        </Form>
      </Container>
    </>
  );
};

export default ProjectForm;
