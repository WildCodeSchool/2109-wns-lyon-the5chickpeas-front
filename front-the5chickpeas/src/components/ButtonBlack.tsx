import React from 'react';
import styled from 'styled-components';

export interface ButtonInterface {
    value: string;
}

function ButtonBlack(props: ButtonInterface): JSX.Element {
    return (
        <BtnBlackStyled>
            {props.value}
        </BtnBlackStyled>
    )
}

const BtnBlackStyled = styled.button`
    margin: 1rem;
    padding: 1rem 3rem;
    color:#FFF;
    background-color: #000;
    border: none;
    border-radius: 30px;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover{
        color: #FABB18;
    }
`;

export default ButtonBlack;