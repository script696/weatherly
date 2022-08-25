import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button<any>`
  border: 0;
  background: none;
  cursor: pointer;
  color: ${({color}) => color || "#fff"};
  width: ${({w}) => w || "auto"};
  height: ${({h}) => h || "auto"};
  font-size: ${({fz}) => fz || "16px"};
  line-height: ${({lh}) => lh || "16px"};
`;




const Button = ({ ...props } :  any) => {
  
  return <StyledButton {...props} >{props.text}</StyledButton>;
};

export default Button;
