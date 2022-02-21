import { useState } from 'react';
// styles
import styled from 'styled-components';
import { Container } from './styles';
// components
import HeadBar from '../components/HeadBar';
import SideBar from '../components/SideBar';
import { Input, Form, ButtonSignUp } from '../components/FormElements';

const Profile = () => {

    const [ pseudo, setPseudo] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confPassword, setConfPassword ] = useState('')
    // const [ error, setError ] = useState('')

    return (
        <Container className="flex">
            <HeadBar />
            <Main className="flex">
                {/* Sidebar */}
                <SideBar />
                
                    <NewForm
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
                            id="pseudo-input"
                            type="text"
                            placeholder="Enter your new pseudo"
                            value={pseudo}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPseudo(e.target.value)
                            }
                        />
                        <Input
                            id="email-input"
                            type="text"
                            placeholder="Enter your new user@email.com"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                            }
                        />
                        <Input
                            id="password-input"
                            type="password"
                            placeholder="Enter your new password"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                            }
                        />
                        <Input
                            id="confPassword-input"
                            type="password"
                            placeholder="Confirme your new password"
                            value={confPassword}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setConfPassword(e.target.value)
                            }
                        />
                        {/*  {error !== '' && <Error>{error}</Error>} */}
                        <ButtonSignUp>Update</ButtonSignUp>
                    </NewForm>
               
            </Main>
        </Container>
    )
}

const Main = styled.main`
    margin-top: 80px;
`;

const NewForm = styled(Form)`
    display: block;
    padding: 2rem;
    margin: 4rem auto;
    border: solid 2px #000;
    border-radius: 20px;
    text-align: center;

`;

export default Profile;
