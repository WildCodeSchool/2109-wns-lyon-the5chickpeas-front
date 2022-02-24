import React, { useState } from 'react';
import PropTypes from "prop-types";
import styled, {css} from 'styled-components';
import { ButtonCustom } from './Button';
import { CarrouselTask } from '../components/CarousselTask';
import Carousel from 'react-elastic-carousel';
import ReactElasticCarousel from 'react-elastic-carousel';

const StyledCaroussel=styled.div`
    min-width: 75%;
    display: flex;
    justify-content: space-between;
    margin: 3rem auto 5em auto;
`;

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export function Caroussel({children, priorTasks}:{children?: any, priorTasks?: any}){

    return(     
        
         <ReactElasticCarousel isRTL breakPoints={breakPoints}>
            {priorTasks.length > 0 ? 
            
                priorTasks.map((task: any) => (
                    <CarrouselTask title={task.title} date={task.date} taskMessage={task.text} label1={task.label1} label2={task.label2}>
                    </CarrouselTask>
                ))
            : <CarrouselTask taskMessage={'No urgent taks.'} padding={'0px'}></CarrouselTask>
            } 
       </ReactElasticCarousel>
    )
}