import React from 'react';
import styled, { css } from 'styled-components';

const StyledChip=styled.div<{background?: string, color?: string, width?: string, padding?: string}>`
    border-radius: 25px;
    background-color: transparent;
    color: black;
    min-width: 0px;
    width: max-content;
    font-size: medium;
    padding: .25rem .75rem;

    ${(props) => props.background && css`background-color: ${props.background};`}
    ${(props) => props.color && css`color: ${props.color};`}
    ${(props) => props.width && css`width: ${props.width};`}
    ${(props) => props.padding && css`padding: ${props.padding};`}

`;
export function Chip({children, background, padding}: {children: any, background?: string, padding?: string}){
    return(
        <>
            <StyledChip background={background} padding={padding}>
                {children}
            </StyledChip>
        </>
    )
}