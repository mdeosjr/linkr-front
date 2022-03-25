import styled from 'styled-components';

const UserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
`;

const UserHeader = styled.div`
    display: flex;
    width: 100%;
    padding-left: 15px;
    gap: 10px;
    justify-content: flex-start;
`;

export {
    UserImage,
    UserHeader
}