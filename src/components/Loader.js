import SyncLoader from "react-spinners/PulseLoader";
import styled from "styled-components";

function Loader() {
  return (
    <Container>
      <p>Loading Posts</p>
      <SyncLoader color="white" size={5} />
    </Container>
  );
}

export default Loader;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    color: var(--white);
    margin: 10px;
  }
`;
