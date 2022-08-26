import React from "react";
import styled from "styled-components/macro";

const StyledUpdateInfoContainer = styled.div<any>`
  margin: 0 0 25px 0;
`;

const UpdateInfoContainer = ({ ...props }) => {
  return <StyledUpdateInfoContainer {...props} />;
};

export default UpdateInfoContainer;
