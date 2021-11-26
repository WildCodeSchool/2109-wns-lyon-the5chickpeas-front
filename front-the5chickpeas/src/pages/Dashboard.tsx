import React from 'react';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

export const GET_PROFILE = gql`
    query getProfile {
        getProfile {
            id
            email
        }
    }
`;

function Dashboard() {
    const { data, error } = useQuery(GET_PROFILE);

    return (
        <>
            <h1>Dashboard</h1>
            {error && <p>Error</p>}
            {data && <div>
                <p>Hello {data.getProfile.email}</p>
            </div>}
        </>
    );
}

export default Dashboard
