import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 100vh;
    }
`;

export default Container;