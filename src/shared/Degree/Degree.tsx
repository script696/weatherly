import React from "react";
import styled from "styled-components/macro";

const StyledDegree = styled.div<any>`
  height: auto;
  position: relative;
  &::after {
    color: ${({ color }) => color || "#fff"};
    content: "O";
    position: absolute;
    top: -35%;
    right: -20%;
    width: auto;
    height: auto;
    font-size: 8px;
  }
`;
const Degree = ({ ...props }) => {
  return <StyledDegree {...props} />;
};

export default Degree;
