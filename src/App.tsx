import styled from "styled-components/macro";
import DashBoard from "./pages/DashBoard/DashBoard";
import Flex from "./shared/Flex/Flex";
import Phone from "./shared/Phone/Phone";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(129, 217, 244, 0.6) 0%,
      rgba(33, 123, 245, 0.6) 100%
    ),
    #ffffff;
`;

function App() {
  return (
    <AppWrapper>
      <Flex height="100%">
        <Phone>
          <DashBoard />
        </Phone>
      </Flex>
    </AppWrapper>
  );
}

export default App;
