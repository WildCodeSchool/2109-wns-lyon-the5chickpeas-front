import React, { useEffect, useState } from 'react'
import { Container, ContainerLogin } from './styles'
import { Input, Form, ButtonSignUp } from '../components/FormElements';
import logo from '../images/Logo.svg';
import '../App.css'
import SideBar from '../components/SideBar'
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

const Login = () => {

    const [ email, setEmail ] = useState('test@test.com');
    const [ failed, setFailed ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ password, setPassword ] = useState('test');
    const [ error, setError ] = useState('');
    const [ validAccountToken, setValidAccountToken] = useState('');

    const {signin} = useAuth();

    const navigate = useNavigate();

    return (
        <>
            <Container>
                <div className="div-logo">
                    <img  src={logo} alt="5 chickpeas" />
                </div>
                
                <Form
                    onSubmit={async (e: React.SyntheticEvent) => {
                        setFailed(false);
                        setLoading(true);
                        e.preventDefault();
                        
                        // Traitement 
                        const result = await signin(email, password, validAccountToken);
                        //const result = null;
                        console.log(result);
                        
                        if(result){

                            // Ré-initialisation des valeurs 
                            setEmail('');
                            setPassword('');
                            setValidAccountToken('');

                            // Garder en session le token 
                            //const token = result.data.signin;
                            //localStorage.setItem('token', token);

                            // Redirection dashboard
                            navigate('/dashboard');

                            return;
                        }else{
                            // traitement des messages d'erreurs => Affichage des msg retournés par le back
                            setFailed(true);
                        }

                        setLoading(false);
                    
                        }
                    }
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
                        id="password-input"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                        }
                    />
                    {error !== '' && {error}} 
                    <ButtonSignUp>Login</ButtonSignUp>
                    <a href='/signup'>No account? Sign up now!</a>
                    
                </Form>
            </Container>
        </>
    )
}

export default Login
