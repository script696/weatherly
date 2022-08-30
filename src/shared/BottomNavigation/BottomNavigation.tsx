import React from "react";
import styled from "styled-components/macro";

const StyledBottomNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 18px 0;
`;

const BottomNavigation = ({...props} : any) => {
  return <StyledBottomNavigation {...props}></StyledBottomNavigation>;
};

export default BottomNavigation;
