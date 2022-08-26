import React from "react";
import styled from "styled-components/macro";

const StyledUpdatedInfoMsg = styled.div<any>`
  font-size: 11px;
  line-height: 100%;
  
`;

const UpdatedInfoMsg = ({ ...props }) => {
  return (
    <StyledUpdatedInfoMsg
      {...props}
    >{`Updated ${props.value}min ago`}</StyledUpdatedInfoMsg>
  );
};

export default UpdatedInfoMsg;
