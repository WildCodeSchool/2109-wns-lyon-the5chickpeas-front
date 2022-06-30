import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Input, Form, ButtonSignUp } from "../components/FormElements";
import logo from "../images/Logo.svg";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { ButtonCustom } from "../components/Button";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("test");
  const [validAccountToken, setValidAccountToken] = useState("");
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { signin, error } = useAuth();
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseAlert = () => setOpenAlert(false);
  return (
    <>
      <Container>
        <div className='div-logo'>
          <img src={logo} alt='5 chickpeas' />
        </div>
        <Form
          onSubmit={async (e: React.SyntheticEvent) => {
            setFailed(false);
            setLoading(true);
            e.preventDefault();
            const result = await signin(email, password, validAccountToken);
            if (result) {
              // Reinitialize values
              setEmail("");
              setPassword("");
              setValidAccountToken("");
              // Redirection dashboard
              navigate("/dashboard");
              return;
            } else {
              // traitement des messages d'erreurs => Affichage des msg retournés par le back
              setFailed(true);
              setOpenAlert(true);
            }
            setLoading(false);
          }}
        >
          <Input
            id='email-input'
            type='text'
            placeholder='user@email.com'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input
            id='password-input'
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <ButtonSignUp onClick={handleOpen}>Login</ButtonSignUp>
          <a href='/signup'>No account? Sign up now!</a>
        </Form>
        {error && error === "validation_to_be_done" ? (
          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
          >
            <Alert
              onClose={handleCloseAlert}
              severity='error'
              sx={{ width: "100%" }}
            >
              Go check your email to validate your validAccountToken
            </Alert>
          </Snackbar>
        ) : error === "validation_token_expired" ? (
          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
          >
            <Alert
              onClose={handleCloseAlert}
              severity='error'
              sx={{ width: "100%" }}
            >
              We have just sent you a new email, please check it to validate
              your account
            </Alert>
          </Snackbar>
        ) : error === "server_error" ? (
          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
          >
            <Alert
              onClose={handleCloseAlert}
              severity='error'
              sx={{ width: "100%" }}
            >
              An error occured
            </Alert>
          </Snackbar>
        ) : null}
      </Container>
    </>
  );
};

export default Login;
