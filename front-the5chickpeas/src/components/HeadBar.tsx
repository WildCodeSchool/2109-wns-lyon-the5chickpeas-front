import React from 'react';
import styled from 'styled-components';
import logo from '../images/Logo.svg';
import ButtonYellow from './ButtonYellow';

const HeadBarStyled = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5em;
    color: "#000";
    background-color: #FABB18;
    width: 100%;
    height: 80px;
    img{
        max-height: calc(80px - 2rem);
        margin: 1rem;
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

function HeadBar() {
    return (
        <HeadBarStyled>
            <div>
                <img src={logo} alt="5 chickpeas"/>
                <span>WildMine</span>
            </div>
            <div>
                <ButtonYellow value="Login"/>
                <ButtonYellow value="Sign up"/>
            </div>
        </HeadBarStyled>
    )
};

export default HeadBar;
