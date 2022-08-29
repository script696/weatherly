import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span<any>`
  margin: ${({ margin }) => margin || "0"};
  font-weight: ${({ weight }) => weight || "inherit"};
  font-size: ${({ size }) => size || "inherit"};
  line-height: ${({ height }) => height || "inherit"};
  color: ${({ color }) => color || "inherit"};
`;

const Span = ({ ...props }) => {
  const test = '\u00B0'
  console.log(test);
  
  return <StyledSpan {...props}>{props.text}</StyledSpan>;
};

export default Span;
