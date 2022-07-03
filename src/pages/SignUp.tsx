import React, { useState } from 'react'
import { Container } from './styles'
import { Input, Form, ButtonSignUp } from '../components/FormElements';
import logo from '../images/Logo.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';


const SignUp = () => {
    const [ pseudo, setPseudo] = useState('John')
    const [ email, setEmail ] = useState('john@gmail.com')
    const [ password, setPassword ] = useState('supersecret')
    const [ validAccountToken, ] = useState('')
    const [ failed, setFailed ] = useState(false);
    const [ loading, setLoading ] = useState(false);const { signup } = useAuth();
    const navigate = useNavigate();
    
    return (
        <>
            <Container>
                <div className="div-logo">
                    <img  src={logo} alt="5 chickpeas" />
                </div>
            
                <Form
                    onSubmit={async (e: React.SyntheticEvent) => {
                    e.preventDefault();
                    
                    const result = await signup(email, password, pseudo, validAccountToken);
                    if (result) {
                        setPseudo('');
                        setPassword('');
                        setEmail('');
                        navigate('/dashboard');
                        return
                    } else {
                        setFailed(true)
                    }
                    setLoading(false);
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
                    <ButtonSignUp disabled={loading}>Sign Up</ButtonSignUp>
                    <a href='/login'>Already have an account? Sign in!</a>
                </Form>
                {failed && <p>Error</p>}
            </Container>
        </>
    )
}

export default SignUp
