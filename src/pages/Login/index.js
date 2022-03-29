import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, StyledLink, Input, Button } from '../../components/Form';
import { TailSpin } from 'react-loader-spinner';
import useAuth from '../../hooks/useAuth';
import TitleSide from '../../components/TitleSide';
import Container from '../../components/Container';
import api from '../../services/api';

function Login() {
  const [button, setButton] = useState(true);
  const [input, setInput] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  function login(e) {
    e.preventDefault();

    if (auth) {
      return navigate("/timeline");
    }

    const promise = api.login({email, password})

    setButton(false);
    setInput(false);

    promise.then(response => loginSucess(response))
    promise.catch(error => loginError(error))
  }

  function loginError(error) {
    alert(error.response.data);
    setButton(true);
    setInput(true);
    setEmail('');
    setPassword('');
  }

  function loginSucess(response) {
    localStorage.setItem("auth", JSON.stringify(response.data));
    setAuth(response.data);
    navigate("/timeline");
  }

  return (
    <Container>
        <TitleSide>
                    <h1>linkr</h1>
                    <h2>
                        save, share and discover<br/>
                        the best links on the web
                    </h2>
        </TitleSide>
        <Form>
            <form onSubmit={login}>
                <Input
                ativo={input} 
                type="email" 
                placeholder="e-mail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                ativo={input}
                type="password" 
                placeholder="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                type="submit"
                ativo={button}>
                {button ? "Log In" 
                    : 
                    <TailSpin  
                    color="#FFFFFF" 
                    height={35} width={35} 
                    />}
                </Button>
            </form>
            <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
        </Form>
    </Container>
  );
}

export default Login;