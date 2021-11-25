import React, { useState } from 'react'
import { Container, ContainerLogin } from './styles'
import { Input, Form, ButtonSignUp } from '../components/FormElements';
import logo from '../images/Logo.svg';
import '../App.css'
import SideBar from '../components/SideBar'


const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

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
                    <p><u>No account? Sign up now!</u></p>
                </Form>
            </Container>
        </>
    )
}

export default Login
