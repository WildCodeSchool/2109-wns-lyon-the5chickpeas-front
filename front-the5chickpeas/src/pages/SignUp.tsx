import React, { useState } from 'react'
import { Container } from './styles'
import { Input, Form, ButtonSignUp } from '../components/FormElements';
import logo from '../images/Logo.svg';
import '../App.css'


const SignUp = () => {

    const [ pseudo, setPseudo] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confPassword, setConfPassword ] = useState('')
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
                    console.log('submiiiiited', pseudo, email, password)
                    }}
                >
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
                    <p><u>Already have an account? Sign in!</u></p>
                </Form>
            </Container>
        </>
    )
}

export default SignUp
