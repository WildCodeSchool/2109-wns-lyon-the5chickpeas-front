import React from 'react';
import styled from 'styled-components';

export interface ButtonInterface {
    value: string;
}

function ButtonYellow(props: ButtonInterface): JSX.Element {
    return (
        <BtnYellowStyled>
            {props.value}
        </BtnYellowStyled>
    )
}

const BtnYellowStyled = styled.button`
    margin-right: 1rem;
    padding: .8rem 2rem;
    color:#000;
    background-color: #FABB18;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        color: #FFF;
    }
`;

export default ButtonYellow;