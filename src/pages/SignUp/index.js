import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, StyledLink, Input, Button } from '../../components/Form';
import TitleSide from '../../components/TitleSide';
import Container from '../../components/Container';
import { TailSpin } from 'react-loader-spinner';
import api from '../../services/api';

function SignUp() {
  const [userData, setUserData] = useState({
      name: '',
      email: '',
      password: '',
      image: ''
  });
  const [button, setButton] = useState(true);
  const [input, setInput] = useState(true);
  let navigate = useNavigate();

  function handleInput(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  function registerError(error) {
    alert(error.response.data);
    setButton(true);
    setInput(true);
  }

  function register(e) {
    e.preventDefault();

    const promise = api.createUser({...userData})
    
    setButton(false);
    setInput(false);
    
    promise.then(() => navigate("/"));
    promise.catch(error => registerError(error));
  }

  return (
    <Container>
        <TitleSide>
            <div className="textContainer">
                <h1>linkr</h1>
                <h2>
                    save, share and discover<br/>
                    the best links on the web
                </h2>
            </div>
        </TitleSide>
        <Form>
            <form onSubmit={register}> 
                <Input
                ativo={input} 
                type="email" 
                placeholder="e-mail" 
                name="email"
                onChange={handleInput}
                value={userData.email}
                />
                <Input 
                ativo={input}
                type="password" 
                placeholder="password" 
                name="password"
                onChange={handleInput}
                value={userData.password}
                />
                <Input 
                ativo={input}
                type="text" 
                placeholder="username" 
                name="name"
                onChange={handleInput}
                value={userData.name}
                />
                <Input 
                ativo={input}
                type="url" 
                placeholder="picture url" 
                name="image"
                onChange={handleInput}
                value={userData.image}
                />
                <Button 
                type="submit"
                ativo={button}>
                {button ? "Sign Up" 
                    : 
                    <TailSpin 
                    ariaLabel="loading-indicator"  
                    color="#FFFFFF" 
                    height={35} width={35} 
                    />}
                </Button>
            </form>
            <StyledLink to="/">Switch back to log in</StyledLink>
        </Form>
    </Container>
  );
}

export default SignUp;