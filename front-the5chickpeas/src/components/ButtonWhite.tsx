import React from 'react';
import styled from 'styled-components';

export interface ButtonInterface {
    value: string;
}

function Button(props: ButtonInterface): JSX.Element {
    return (
        <BtnStyled>
            {props.value}
        </BtnStyled>
    )
}

const BtnStyled = styled.button`
    margin-right: 1rem;
    padding: .8rem 2rem;
    color:#000;
    background-color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        color: #FABB18;
    }
`;

export default Button;