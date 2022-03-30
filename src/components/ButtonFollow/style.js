import styled from "styled-components";

const ButtonFollows=styled.button`
    width:112px;
    height:31px;
    border-radius: 5px;
    border:none;
    background-color: ${props=>props.isFollow ? '#FFFFFF' : '#1877F2'};
    font-size: 14px;
    font-weight: bold;
    color:${props=>props.isFollow ? '#1877F2':'#FFFFFF'};
    right:25px;
    top:160px;
`
export default ButtonFollows;