import React from 'react';
import PropTypes from "prop-types";
import styled, {css} from 'styled-components';


export function DateTime({date, time} : {date: string, time: string}){
    return(
        <>
            {date} {time}
        </>
    )
}