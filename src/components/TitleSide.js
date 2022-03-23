import styled from 'styled-components';

const TitleSide = styled.div`
    width: 905px;
    height: 100vh;
    background-color: #151515;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;

    .textContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 90vh;
        margin-left: 144px;
    }

    h1 {
        font: normal 700 106px 'Passion One';
        line-height: 117px;

        letter-spacing: 0.05em;

        color: #FFFFFF;
    }

    h2 {
        font: normal 700 43px 'Oswald';

        color: #FFFFFF;
    }
`;

export default TitleSide;