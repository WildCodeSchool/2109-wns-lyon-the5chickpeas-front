import React from 'react';
import PropTypes from "prop-types";
import styled, {css} from 'styled-components';


const StyledButton = styled.button<{color?: string, background?: string}>`
    background: black;
    padding: .75rem .5rem;
    color: white;
    border-radius: 25px;
    width: 8rem;
    font-size: medium;
    border: 1.5px solid orange;
    
    ${(props) => props.color && css`color: ${props.color};`}
    ${(props) => props.background && css`background: ${props.background};`}
`

/**
 * 
 * @returns Button to customize
 */
export function ButtonCustom ({children, color, background}:{children : any , color? : string, background? : string}){
     return (
        <StyledButton color={color} background={background}>
            {children}
        </ StyledButton >
     )
}


ButtonCustom.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string
};
ButtonCustom.defaultProps = {
    color: null,
    background: null
}


