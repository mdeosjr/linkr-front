import styled from 'styled-components';

const SearchContainer = styled.div`
    width: 100%;
    max-width: 30%;
    display: flex;
    z-index: 2;
    position: relative;
    @media (max-width: 620px) {
        display: none;
    }
`
const Input = styled.input`
    all: unset;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 5px 0 0 5px;
    font-size: 19px;
    color: #000;
    ::placeholder {
        color: #C6C6C6;
        font-size: 19px;
    }
`
const SearchButton = styled.button`
    all: unset;
    height: 40px;
    width: 50px;
    border-radius: 0 5px 5px 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & img {
        width: 30px;
        height: 30px;
    }
    &:hover{
        background-color: #F4F4F4;
    }
`
const Result = styled.ul`
    all: unset;
    display: ${props => props.active ? 'flex' : 'none'};
    width: 100%;
    border-radius: 5px 5px 5px 5px;
    max-height: 130px;
    background-color: #E7E7E7;
    position: absolute;
    z-index: -1;
    flex-direction: column;
`
const UserResult = styled.li `
    list-style: none;
    padding: 5px 10px;
    width: 100%;
    background-color: #e7e7e7;
    display: flex;
    align-items: center;
    gap: 10px;
    & p {
        color: #515151;
        font-size: 19px;
    }
    &:hover{
        background-color: #d7d7d7;
        cursor: pointer;
    }
    &:first-child{
        margin-top: 60px;
    }
    &:last-child {
        border-radius: 0 0 5px 5px;
    }
`
const UserSearchImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

export {
    SearchContainer,
    Input,
    SearchButton,
    Result,
    UserResult,
    UserSearchImg,
}