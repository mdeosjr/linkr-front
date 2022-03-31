import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

export default function LoadingScroll() {
    return (
        <Loading>
            <TailSpin  
                    color="#6D6D6D"
                    height={36} width={36} 
            />
            <h1>Loading more posts...</h1>
        </Loading>
    )
}
const Loading = styled.div`
    width: 100%;
    margin: 80px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h1 {
        font: normal 20px 'Lato';
        line-height: 26px;
        letter-spacing: 0.05em;

        color: #6D6D6D;
    }
`;
