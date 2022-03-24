import styled from 'styled-components';

const ContainerModal=styled.div`
    width: 597px;
    height: 262px;
    border-radius:50px;
    background-color: #333333;
    font-size:34px;
    font-weight: bold;
    color:#FFFFFF;
    text-align: center;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
`
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
    ContainerModal,
    ButtonConfirm,
    ButtonDelete,
    Form   
}