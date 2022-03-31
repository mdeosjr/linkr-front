import styled from 'styled-components';

const LoadingBarStyle = styled.div`
    width: 611px;
    height: 61px;
    margin-top: 25px;
    margin-bottom: 20px;
    gap: 15px;
    cursor: pointer;
    
    display: ${props => props.quantity === 0 ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;

    background: #1877F2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    font: normal 16px 'Lato';
    line-height: 19px;

    color: #FFFFFF;
`;

export default LoadingBarStyle;