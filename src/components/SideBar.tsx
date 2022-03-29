import React from 'react';
import styled from 'styled-components';
import clipboard from '../images/icons/clipboard.png'
import user from '../images/icons/user.png'
import gear from '../images/icons/gear.png'
import projectManagement from '../images/icons/project-management.png'
import documentsFolder from '../images/icons/documents-folder.png'



function SideBar() {
    return (
        
        <SideBarStyled>
            <LinksSideBar href="/dashboard" style={{fontSize: "25px"}}>
                <img src={projectManagement} alt={projectManagement}/>
                <p>Dashboard</p>
            </LinksSideBar>
            <LinksSideBar href="/projectsList" >
                <img src={clipboard} alt={clipboard}/>
                <p>Projects List</p>
            </LinksSideBar>
            <LinksSideBar href="/tasksList" >
                <img src={documentsFolder} alt={documentsFolder}/>
                <p>Tasks List</p>
            </LinksSideBar>
            <LinksSideBar href="/profile">
                <img src={user} alt={user}/>
                <p>User Settings</p>
            </LinksSideBar>
            <LinksSideBar href="/Miscellanious" >
                <img src={gear} alt={gear}/>
                <p>Miscellanious</p>
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
