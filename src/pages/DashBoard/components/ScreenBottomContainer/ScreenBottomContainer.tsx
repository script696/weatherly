import React from "react";
import styled from "styled-components/macro";

const StyledScreenBottomContainer = styled.div<any>`
  padding: 0 40px;
`;

const ScreenBottomContainer = ({ ...props }) => {
  return <StyledScreenBottomContainer {...props} />;
};

export default ScreenBottomContainer;
