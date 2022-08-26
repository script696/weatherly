import React from "react";
import styled from "styled-components/macro";

const StyledTopMenuContainer = styled.div<any>`
  padding: 30px 30px 0 30px;
  margin: 0 0 11px 0;
`;

const TopMenuContainer = ({ ...props }) => {
  return <StyledTopMenuContainer {...props} />;
};

export default TopMenuContainer;
