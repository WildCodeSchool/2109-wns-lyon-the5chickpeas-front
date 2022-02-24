import React from 'react';
import styled, {css} from 'styled-components';



const StyledTitle=styled.h2`
    font-weight: bold;
    text-align: center;
    color: black;
`;

export function Title({children, titletext}:{children?: any, titletext: any}){
    return(
        <>
            <StyledTitle>
                {titletext}
            </StyledTitle>
        </>
    )
}