import styled from 'styled-components';

const TitleSide = styled.div`
    height: 100vh;
    width: 65vw;
    background-color: #151515;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding-left: 144px;
    padding-top: 290px;

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

    @media (max-width: 600px) {
        flex-direction: column;
        width: 100vw;
        height: 30%;
        padding: 10px 69px;
        text-align: center;

        h1 {
            font-size: 76px;
            line-height: 84px;
        }

        h2 {
            font-size: 23px;
            line-height: 34px;
        }
    }
`;

export default TitleSide;