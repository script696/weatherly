import React from "react";
import styled from "styled-components/macro";

const StyledBottom = styled.div`
  padding: 20px 30px 15px
`;

const Bottom = (props: any) => {
  return <StyledBottom>{props.children}</StyledBottom>;
};

export default Bottom;
