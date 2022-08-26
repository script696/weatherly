import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button<any>`
  border: none;
  background: none;
  cursor: pointer;
  color: ${({color}) => color || "#fff"};
  width: ${({width}) => width || "auto"};
  height: ${({height}) => height || "auto"};
  font-size: ${({fz}) => fz || "16px"};
  line-height: ${({lh}) => lh || "16px"};
`;




const Button = ({ ...props } :  any) => {
  
  return <StyledButton {...props}></StyledButton>;
};

export default Button;
