import React, { useEffect } from 'react'
import {
    // ApolloClient,
    // InMemoryCache,
    // ApolloProvider,
    useMutation,
    gql
  } from "@apollo/client";
import {useParams} from "react-router-dom";

function ValidateAccount() {

    const { token } = useParams();

    const [mutateFunction, { data, loading, error }] = useMutation(gql`
        mutation ValidateAccount($validAccountToken: String!) {
            validateAccount(validAccountToken: $validAccountToken)
        }
        `
    );

    const validateResponse = async () => await mutateFunction({
        variables: {
            validAccountToken: token
        }
        
    });

    useEffect(() => {
        
    }, [data]);

    useEffect(() => {
        validateResponse().then((result) => {

            // False 2 => No user found for the given JWT  
            if(result.data.validateAccount === 'Invalid token'){
                // Flash message
                console.log('The given token is invalid');
            }

            // False 1 => JWT Expires - Ask if we send a new one => Yes : Send new one => Flash Bag : An email have been sent to renew
            if(result.data.validateAccount === 'Expired token'){
                // Flash message
                console.log('Your token has expired, a new one have been sent into your email account');
            }

            // Account valid
            if(result.data.validateAccount === 'Account validated'){
                // Flash message
                console.log('Your account is now valid... You can now log in !');
            }
            
        }).catch((err) => {
            console.log(err);
        });
    }, [token]);

    return (
        <div>
            <p>Route to validate Account</p> 
        </div>
    )
}

export default ValidateAccount;
