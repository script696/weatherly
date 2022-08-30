import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button<any>`
  border: none;
  cursor: pointer;
  background: ${({background}) => background || "none"};
  border: ${({border}) => border || "0"};
  border-radius: ${({borderRadius}) => borderRadius || "none"};
  color: ${({color}) => color || "#fff"};
  width: ${({width}) => width || "auto"};
  height: ${({height}) => height || "auto"};
  font-size: ${({fz}) => fz || "16px"};
  line-height: ${({lh}) => lh || "16px"};
  z-index: ${({z}) => z || "none"};
  position: ${({position}) => position || "static"};
`;




const Button = ({ ...props } :  any) => {
  
  return <StyledButton {...props}></StyledButton>;
};

export default Button;
