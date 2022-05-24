import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarrouselTask } from './CarousselTask';
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Chip } from './Chip';

const StyledCaroussel = styled.div`
    min-width: 75%;
    margin: 3rem auto 5em auto;
    background-color: gray;
`;

const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    p:first-child {
        font-weight: bold;
    }
`;

export const GET_TASKS = gql`
    query GetTasks {
        getTasks {
        subject
        description
        }
    }
`;

export function Caroussel() {
    const { loading, error, data } = useQuery(GET_TASKS);

    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        ;(async() => {
            try{
                const tasksData = await data.getTasks;
                if (tasksData) {
                    setTasks(tasksData)
                }
                console.log(tasksData);
                
            } catch(e) {
                console.log(e);
            }
        })
    ()},[data])

    return (
        <StyledCaroussel>
            {loading ? <p>loading</p> : tasks && tasks.length > 0 ? (
                <Carousel>
                    {tasks?.map((task: any) => (
                        <FlexSpaceBetween>
                            <Chip background={'blue'}>
                                {task.subject}
                            </Chip>
                        </FlexSpaceBetween>
                    ))}
                </Carousel>

            ) : <CarrouselTask taskMessage={'No urgent taks.'} padding={'0px'}></CarrouselTask>
                // (
                // <Carousel>
                //     { tasks && tasks?.length > 0 ?  
                //         tasks?.map((task: any) => (
                //             <CarrouselTask title={task.title} date={task.date} taskMessage={task.text} label1={task.label1} label2={task.label2}>
                //             </CarrouselTask>
                //         ))
                //     : <CarrouselTask taskMessage={'No urgent taks.'} padding={'0px'}></CarrouselTask>
                //     } 
                // </Carousel>
                // )
            }
        </StyledCaroussel>
    )
}