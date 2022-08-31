import React from "react";
import styled from "styled-components/macro";

const StyledDegree = styled.div<any>`
  height: auto;
  position: relative;
  &::after {
    color: ${({ color }) => color || "#fff"};
    top: ${({ top }) => top || "-35%"};
    right: ${({ right }) => right || "-20%"};
    font-size: ${({ size }) => size || "8px"};
    content: "0";
    position: absolute;
    width: auto;
    height: auto;
  }
`;
const Degree = ({ ...props }) => {
  return <StyledDegree {...props} />;
};

export default Degree;
