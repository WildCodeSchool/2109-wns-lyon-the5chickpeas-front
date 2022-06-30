import React, { useState } from "react";
import { Container } from "../../pages/styles";
import {
  Input,
  Form,
  InputModal,
  InputModalTextArea,
} from "../../components/FormElements";
import logo from "../../images/Logo.svg";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { ButtonCustom } from "../Button";
import AddProject from "../../pages/AddProject";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { gql } from "@apollo/client";
import {
  autocompleteClasses,
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextareaAutosize,
} from "@mui/material";

const ProjectForm = ({
  onCloseModal,
  statusList,
}: {
  onCloseModal: Function;
  statusList: string[];
}) => {
  // Initialisation des champs pour l'entité PROJECT
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [estimatedTime, setEstimatedTime] = useState<number>();
  const [selectedStatus, setSelectedStatus] = useState("");

  // Preparation de la requete GraphQL
  const [AddProject, { data, loading }] = useMutation(gql`
    mutation AddProject($data: ProjectInput!) {
      addProject(data: $data) {
        name
        description
      }
    }
  `);

  const [error, setError] = useState("");

  return (
    <>
      <Container>
        <Form
          onSubmit={async (e: React.SyntheticEvent) => {
            e.preventDefault();

            // Traitement ==> Fetch en grapgQL
            const data = {
              description: description,
              name: name,
              dueDate: dueDate,
              estimatedTime: estimatedTime,
            };

            const result = await AddProject({ variables: { data: data } });
            //console.log(result);
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
              value={statusList[0]}
              label='Status'
              onChange={(event: SelectChangeEvent) =>
                setSelectedStatus(event.target.value)
              }
            >
              {statusList.map((status) => (
                <MenuItem value={status}>{status}</MenuItem>
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
