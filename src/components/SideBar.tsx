import React from 'react';
import styled from 'styled-components';
import clipboard from '../images/icons/clipboard.png'
import user from '../images/icons/user.png'
import projectManagement from '../images/icons/project-management.png'
import documentsFolder from '../images/icons/documents-folder.png'
import { useNavigate } from 'react-router-dom';



function SideBar() {
    const navigate = useNavigate();

    return (
        <SideBarStyled>
            <LinksSideBar onClick={() => {navigate("/dashboard")}}  style={{fontSize: "25px"}}>
                <img src={projectManagement} alt={projectManagement}/>
                <p>Dashboard</p>
            </LinksSideBar>
            <LinksSideBar onClick={() => {navigate("/projectsList")}}>
                <img src={clipboard} alt={clipboard}/>
                <p>Projects List</p>
            </LinksSideBar>
            <LinksSideBar onClick={() => {navigate("/tasksList")}}>
                <img src={documentsFolder} alt={documentsFolder}/>
                <p>Tasks List</p>
            </LinksSideBar>
            <LinksSideBar onClick={() => {navigate("/profile")}}>
                <img src={user} alt={user}/>
                <p>User Settings</p>
            </LinksSideBar>
        </SideBarStyled>
    )
};


const SideBarStyled = styled.nav`

    height: 80%; 
    width: 17vw; 
    position: fixed; 
    margin-top: 80px;
    margin-right: 70px;
    z-index: 1;
    top: 40px;
    left: 0;
    font-size: 30px;
    overflow-x: hidden;


`;

const LinksSideBar = styled.a `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    padding: 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;

    p {
    font-size: 25px;
    }

    img {
        height: 30px;
        width: 30px;
        margin-right: 30px;
        
    }

    &:hover {
    
    color: #FFF;
    font-size: 40px;
    background-color: black;
    border-radius: 0px 20px 20px 0px;
    } 

`

export default SideBar;
