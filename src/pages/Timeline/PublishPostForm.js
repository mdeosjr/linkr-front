import { useState } from 'react';
import api from '../../services/api';
import {
    SubmitButton,
    InputLink,
    InputText,
    FormInputs,
    TitleForm,
    PublishForm,
    UserProfile
} from '../../components/PublishPost';
import validator from 'validator';
import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PublishPostForm() {
    let navigate = useNavigate();

    const {auth} = useContext(AuthContext);

    const [button, setButton] = useState(true);
    const [input, setInput] = useState(true);
    const [link, setLink] = useState('');
    const [text, setText] = useState('');

    async function publish(e) {
        e.preventDefault();
        if(!validator.isURL(link, {require_tld: false, require_protocol: true})) {
            setButton(true);
            setInput(true);
            alert('O campo link do seu post deve conter uma URL válida.');
            return
        }
        console.log(auth.token);
        
        setButton(false);
        setInput(false);
        const promise = api.publishPost({link, text}, auth.token);

        promise.then(response => submitSucess(response));
        promise.catch(error => submitFailure(error));

      }

      function submitSucess(response) {
        setButton(true);
        setInput(true);
        setLink('');
        setText('');
      }

      function submitFailure(error) {
        alert("Houve um erro no seu envio, tente novamente.");
        setButton(true);
        setInput(true);
      }

    return (
        <PublishForm>
            <UserProfile src={auth.image}></UserProfile>
            <FormInputs onSubmit={publish}>
                <TitleForm>What are you going to share today?</TitleForm>
                <InputLink 
                    ativo={input}
                    placeholder="http://..."
                    value={link}
                    onChange={(e) => setLink(e.target.value)}>
                </InputLink>
                <InputText 
                    ativo={input}
                    placeholder="Awesome article about #javascript"
                    value={text}
                    onChange={(e) => setText(e.target.value)}>
                </InputText>
                <SubmitButton type='submit' ativo={button}>
                    {button 
                    ? "Publish"
                    : "Publishing..."
                    }
                </SubmitButton>
            </FormInputs>
        </PublishForm>
    )
}