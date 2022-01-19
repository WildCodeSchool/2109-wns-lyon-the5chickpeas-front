import React, { useState } from 'react'
import { Container } from './styles'
import { Input, Form, ButtonSignUp } from '../components/FormElements';
import logo from '../images/Logo.svg';
import '../App.css'
import {
    gql,
    useMutation
} from "@apollo/client";
//import { useHistory } from 'react-router-dom'; // replace by useNavigate in react-router-dom V6 
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const [ pseudo, setPseudo] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confPassword, setConfPassword ] = useState('')
    const [ isSaved, setIsSaved ] = useState(false)
    const [ validAccountToken, setValidAccountToken] = useState('')
    //const [ error, setError ] = useState('')

    const navigate = useNavigate();

    const [signup, { data, loading, error }] = useMutation(gql`
    mutation Signup($pseudo: String!, $password: String!, $email: String!, $validAccountToken: String!) {
    signup(pseudo: $pseudo, password: $password, email: $email, validAccountToken: $validAccountToken) {
        pseudo
        password
        email
        validAccountToken
        }
    }   
    ` 
);

    return (
        <>
            <Container>
                <div className="div-logo">
                    <img  src={logo} alt="5 chickpeas" />
                </div>
            
                <Form
                    onSubmit={async (e: React.SyntheticEvent) => {
                    e.preventDefault();
                    /* const result = await post('http://localhost:3000', {
                        email,
                        password,
                        confPassword
                    });
                    console.log(result); // eslint-disable-line no-console
                    if (result.data.success) {
                        setError('');
                    } */
                    console.log('info from form', pseudo, email);
                    signup({variables:{email: email, pseudo: pseudo, password:password, validAccountToken:validAccountToken},
                    });
                    setEmail('');
                    setPseudo('');
                    setPassword('');
                    setValidAccountToken('');
                    setIsSaved(true);
                    navigate('/profile');
                    console.log('data:', data, isSaved)

                
                    }}
                >
                    <Input
                        id="email-input"
                        type="text"
                        placeholder="user@email.com"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                        }
                    />
                    <Input
                        id="pseudo-input"
                        type="text"
                        placeholder="Pseudo"
                        value={pseudo}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPseudo(e.target.value)
                        }
                    />
                    <Input
                        id="password-input"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                        }
                    />
                    <Input
                        id="confPassword-input"
                        type="password"
                        placeholder="Confirme your password"
                        value={confPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setConfPassword(e.target.value)
                        }
                    />
                    {/*  {error !== '' && <Error>{error}</Error>} */}
                    <ButtonSignUp>Sign Up</ButtonSignUp>
                    <a href='/login'>Already have an account? Sign in!</a>
                    
                </Form>
            </Container>
        </>
    )
}

export default SignUp
