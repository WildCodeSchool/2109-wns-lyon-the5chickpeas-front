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
            <LinksSideBar href="#" >
                <img src={clipboard} alt={clipboard}/>
                <p>Projects List</p>
            </LinksSideBar>
            <LinksSideBar href="#" >
                <img src={documentsFolder} alt={documentsFolder}/>
                <p>Tasks List</p>
            </LinksSideBar>
            <LinksSideBar href="#" >
                <img src={projectManagement} alt={projectManagement}/>
                <p>Project Management</p>
            </LinksSideBar>
            <LinksSideBar href="#">
                <img src={user} alt={user}/>
                <p>User</p>
            </LinksSideBar>
            <LinksSideBar href="#" >
                <img src={gear} alt={gear}/>
                <p>Settings</p>
            </LinksSideBar>
            
        </SideBarStyled>
    )
};


const SideBarStyled = styled.nav`

    height: 60%; 
    width: 22rem; 
    position: fixed; 
    margin-top: 100px;
    z-index: 1;
    top: 40px;
    left: 0;
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
    font-size: 25px;
    color: black;


    img {
        height: 30px;
        width: 30px;
        margin-right: 30px;
    }

    &:hover {
    
    color: #FFF;
    font-size: 25px;
    background-color: black;
    border-radius: 0px 20px 20px 0px;
    } 

`

export default SideBar;
