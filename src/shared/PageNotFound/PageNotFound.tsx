import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import Title from "../Title/Title";

const StyledAppWrapper = styled.div`
  position: fixed;
  z-index: 200;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
`;

const PageNotFound = () => {
  const history = useHistory()
  return (
    <StyledAppWrapper>
      <Flex direction="column" margin='5% 0' gap='15vh'>
        <Title text='Page not found' size='60px' color='#fff' height='100%'/>
        <Button 
        onClick={() => history.goBack()}
        width='200px' height='50px' border='2px solid #fff' borderRadius='10px'>Go Back</Button>
      </Flex>
    </StyledAppWrapper>
  );
};

export default PageNotFound;
