import React from 'react';
//import styled from 'styled-components';
import { StyledTable } from './TableElements'

type oneProject = {
  id: number,
  manager_id: number,
  name: string, 
  status_id: number,
  due_date: string,
  description: string, 
  intitial_time_estimee: number

}

const ListTable = () => {

  const projects: oneProject[] = [
    {id: 5, manager_id: 1, name: 'React', status_id: 1, due_date: '12/12/22', description: 'créer un projet react qui marche', intitial_time_estimee: 30 }, 
    {id: 4,manager_id: 2, name: 'Youtube Bis', status_id: 0, due_date: '12/01/22', description: 'cloner youtube', intitial_time_estimee: 120 },
    {id: 3,manager_id: 3, name: 'Minus & Cortex', status_id: 1, due_date: '02/01/23', description: 'conquérir le monde', intitial_time_estimee: 90 },
    {id: 2,manager_id: 4, name: 'Marie Carie', status_id: 1, due_date: '16/09/22', description: 'trouver un vaccin contre le cancer', intitial_time_estimee: 55 }, 
    {id: 1,manager_id: 5, name: 'Jeff Bezouz', status_id: 1, due_date: '04/07/25', description: 'devenir riche sans rien faire', intitial_time_estimee: 23 } 

  ]
  console.log('====================================');
  console.log(projects);
  console.log('====================================');


    
  
  return (
    <div >
    <h1 id='title'>Projects List</h1>
    <StyledTable id='projects'>
      <thead >
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Description</th>
          <th>Initial Time Estimee</th>
        </tr>
      </thead>
      <tbody>
      {projects.map((project: oneProject)=> (
        <tr key={project.id}>
          <td>{project.name}</td>
          <td>{project.status_id}</td>
          <td>{project.due_date}</td>
          <td>{project.description}</td>
          <td>{project.intitial_time_estimee} heures</td>
        </tr>
      ))}
      </tbody>
      </StyledTable>
      
    </div>
  )
}

export default ListTable