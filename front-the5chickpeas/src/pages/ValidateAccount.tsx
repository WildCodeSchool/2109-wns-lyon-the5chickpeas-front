import React, { useEffect } from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useMutation,
    gql
  } from "@apollo/client";

function ValidateAccount() {

    const [mutateFunction, { data, loading, error }] = useMutation(gql`
        mutation ValidateAccount($validAccountToken: String!) {
            validateAccount(validAccountToken: "mettre la valeur du parametre ici")
        }
        ` 
    );

    // Retenir
    useEffect(() => {
        console.log(data);
    }, [data]);

    // True => You can now log in
    // False 1 => JWT Expires - Send new one
    // False 2 => No user found for the given JWT - 

    return (
        <div>
            <p>Route to validate Account</p> 
        </div>
    )
}

export default ValidateAccount
