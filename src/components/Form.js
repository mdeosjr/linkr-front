import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Form = styled.div`
    height: 100vh;
    width: 535px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 14px;
   
    form {
        display: flex;
        flex-direction: column;
        gap: 13px;
    }
`;

const Input = styled.input`
    all: unset;
    width: 429px;
    height: 65px;
    padding-left: 16px;
    box-sizing: border-box;
    background: ${props => props.ativo ? '#FFFFFF' : '#F2F2F2'};
    border-radius: 5px;
    font: normal 20px 'Oswald';
    color: ${props => props.ativo ? '#000000' : '#AFAFAF'};
    ${props => !props.ativo && "pointer-events: none;"}
    &::placeholder {
        font: bold 27px 'Oswald';
        line-height: 40px;
    
        color: #9F9F9F;
    }
`;

const Button = styled.button`
    all: unset;
    width: 429px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1877F2;
;
    border-radius: 5px;
    font: bold 27px 'Oswald';
    line-height: 23px;
    color: #FFFFFF;
    cursor: pointer;
    ${props => !props.ativo && "pointer-events: none;"}
    ${props => !props.ativo && "opacity: 0.7;"}
`;

const StyledLink = styled(Link)`
    all: unset;
    font: normal 20px 'Lato';
    line-height: 24px;
    cursor: pointer;
    color: #FFFFFF;
    text-decoration: underline;
`;

export {
    Form,
    StyledLink,
    Input,
    Button
}