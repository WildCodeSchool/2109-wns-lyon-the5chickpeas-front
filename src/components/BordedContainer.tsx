import React from 'react'
import styled from 'styled-components';
import CheckBox from '../components/Checkbox';
import ListTable from '../components/ListTable';

function BordedContainer() {
  return (
    <ContainerBordered>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <CheckBox/>
        <CheckBox/>
      </div>   
      <ListTable/>
    </ContainerBordered>
  )
}

export default BordedContainer

const ContainerBordered = styled.div`
    margin: 2rem 1rem 3rem 10rem;
    background-color: #FFF;
    border-radius: 25px;
    min-width: 83vw;
    min-height: 90vh;
    border: 2px solid black;
    margin-left: 250px;
    margin-right: 10px;
    padding: 30px
    //flex-direction: row;

`;