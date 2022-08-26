import React from "react";
import styled from "styled-components/macro";

const StyledTitle = styled.h2<any>`
  font-weight: ${props => props.weight || 'inherit'};
  font-size: ${props => props.size || 'inherit'};
  line-height: ${props => props.height || 'inherit'};
  color: ${props => props.color || 'inherit'};
`;

const Title = ({...props} : any) : any => {
  console.log(props.color);
  
  return <StyledTitle {...props}>{props.text}</StyledTitle>;
};

export default Title;
