import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { Input, Form, ButtonSignUp } from '../components/FormElements';
import logo from '../images/Logo.svg';

import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

    const Login = () => {

        const [ email, setEmail ] = useState('john@gmail.com');
        const [ failed, setFailed ] = useState(false);
        const [ loading, setLoading ] = useState(false);
        const [ password, setPassword ] = useState('supersecret');
        const [ validAccountToken, setValidAccountToken] = useState('');
        const {signin} = useAuth();
        const navigate = useNavigate()

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
                            const result = await signin(email, password, validAccountToken);
                            if(result) {
                                // Reinitialize values
                                setEmail('');
                                setPassword('');
                                setValidAccountToken('');
                                // Redirection dashboard
                                navigate('/dashboard', {replace:true});
                                return
                            } else {
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
                        <ButtonSignUp disabled={loading}>Login</ButtonSignUp>
                        <a href='/signup'>No account? Sign up now!</a>
                    </Form>
                    {failed && <p>You failed</p>}
                </Container>
            </>
        )
    }
    
export default Login