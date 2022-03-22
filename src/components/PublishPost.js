import styled from 'styled-components';

const PublishForm = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 50px 5fr;
    grid-template-rows: 1fr;
    gap: 20px;
    font-family: 'Lato', sans-serif;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const UserProfile = styled.div`
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 50%;
`;
const FormInputs = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-end;
`;
const TitleForm = styled.h1`
    width: 100%;
    font-size: 20px;
    font-weight: lighter;
    color: #707070;
    margin-bottom: 10px;
`;
const InputLink = styled.input`
    width: 100%;
    background-color: #EFEFEF;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    height: 30px;
    font-family: 'Lato', sans-serif;
    ::placeholder {
        font-weight: 100;
        color: #949494;
        font-size: 15px;
    }
`;
const InputText = styled.textarea`
    width: 100%;
    background-color: #EFEFEF;
    height: 60px;
    resize: none;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    ::placeholder {
        text-align: start;
        font-weight: 100;
    }
`;
const SubmitButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 7px 30px;
    background-color: #1877F2;
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`;

export {
    SubmitButton, 
    InputLink, 
    InputText, 
    FormInputs, 
    TitleForm, 
    PublishForm, 
    UserProfile
}