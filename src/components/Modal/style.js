import styled from 'styled-components';


const ButtonConfirm = styled.button`
    width: 134px;
    height: 37px;
    border:none;
    font-size: 18px;
    font-weight: bold;
    color:#1877F2;
    background-color: #FFFFFF;
    border-radius: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
`
const ButtonDelete = styled.button`
    width: 134px;
    height: 37px;
    border:none;
    font-size: 18px;
    font-weight: bold;
    color:#FFFFFF;
    background-color: #1877F2;
    border-radius: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
`
const Form=styled.form`
    width: 300px;
    height:37px;
    display: flex;
    justify-content: space-between;
`
export{
    ButtonConfirm,
    ButtonDelete,
    Form   
}