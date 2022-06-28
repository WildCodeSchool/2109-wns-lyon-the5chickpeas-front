import React, { useState } from "react";
import { Container } from "../../pages/styles";
import { Input, Form } from "../../components/FormElements";
import logo from "../../images/Logo.svg";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { ButtonCustom } from "../Button";
import AddProject from "../../pages/AddProject";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { gql } from "@apollo/client";

const ProjectForm = ({ onCloseModal }: { onCloseModal: any }) => {
  // Initialisation des champs pour l'entité PROJECT
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [estimatedTime, setEstimatedTime] = useState(0);

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
  const { signin } = useAuth();
  const navigate = useNavigate();

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
            onCloseModal();
            //console.log(result);
          }}
        >
          <Input
            id='name-input'
            type='text'
            placeholder='Le nom de votre projet...'
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />

          <Input
            id='description-input'
            type='text'
            placeholder='Une description du projet...'
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />

          <Input
            id='dueDate-input'
            type='date'
            placeholder='Le nom de votre projet...'
            value={dueDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDueDate(e.target.value)
            }
          />

          <Input
            id='estimatedTime-input'
            type='number'
            //placeholder="Votre estimation en heures du projet..."
            value={estimatedTime}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEstimatedTime(parseInt(e.target.value))
            }
          />

          <ButtonCustom color={"white"}>{"Ajouter"}</ButtonCustom>

          {error !== "" && { error }}
        </Form>
      </Container>
    </>
  );
};

export default ProjectForm;
