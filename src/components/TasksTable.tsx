import React from 'react'
import { Container } from '../pages/styles'
import { StyledTable } from './TableElements'
import { CBAssignedToMe, CBHideDone, CBHighPriority } from './Checkboxes'
import { useNavigate } from "react-router-dom";

const TasksTable = () => {

  const navigation = useNavigate();

  interface tasksType {
    id: number,
    subject: string,
    project: string,
    status_id: number,
    assignee: string,
    due_date: string

  }
  const tasks: tasksType[] = [
      {
        id: 1,
        subject: "Faire UI",
        project: "React",
        status_id: 1,
        assignee: "Maurice",
        due_date: "12/03/22"
      },
      {
        id: 2,
        subject: "Créer la db",
        project: "React",
        status_id: 1,
        assignee: "Sean",
        due_date: "12/04/22"
      },
      {
        id: 3,
        subject: "Faire le css",
        project: "Youtube Bis",
        status_id: 0,
        assignee: "Bernadette",
        due_date: "02/03/22"
      }, 
      {
        id: 4,
        subject: "Faut s'y mettre",
        project: "Jeff Bezouz",
        status_id: 0,
        assignee: "Cerise",
        due_date: "02/06/22"
      } 
      
  ];

    console.log('====================================');
    console.log(tasks);
    console.log('====================================');
  return (
    <Container>
      <h1 id='title'>Tasks List</h1>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}> 
        {/* Select */}
        <CBAssignedToMe/>
        <CBHideDone/>
        <CBHighPriority/>
      </div>
    
    <StyledTable id='tasks'>
      <thead >
        <tr>
          <th>Subject</th>
          <th>Project</th>
          <th>Status</th>
          <th>Assignee</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
      {tasks.map((task: tasksType)=> (

        
          <tr onClick={() =>  navigation(`/project/${task.project}/task/${task.id}`)} key={task.id}>
            <td>{task.subject}</td>
            <td>{task.project}</td>
            <td>{task.status_id}</td>
            <td>{task.assignee}</td>
            <td>{task.due_date}</td>
          </tr>


      ))}
      </tbody>
      </StyledTable>
      
    </Container>
  )
}

  

export default TasksTable