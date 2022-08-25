import React from "react";
import styled from "styled-components/macro";
import Button from "../../shared/Button/Button";
import Flex from "../../shared/Flex/Flex";
import Bottom from "./components/Bottom/Bottom";
import BottomHeader from "./components/BottomHeader/BottomHeader";
import Screen from "./components/Screen/Screen";
import Title from "./components/Title/Title";

const StyledDashBoard = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 65px;
  overflow: hidden;
`;

const DashBoard = () => {
  return (
    <StyledDashBoard>
      <Screen>
        
      </Screen>
      <Bottom>
        <BottomHeader>
          <Flex justify="space-between">
            <Title size="18px" height="22px" text="Today" weight="800" />
            <Button text="7 days" color="#687B92" fz="12px" lh="15px" />
          </Flex>
        </BottomHeader>
      </Bottom>
    </StyledDashBoard>
  );
};

export default DashBoard;
