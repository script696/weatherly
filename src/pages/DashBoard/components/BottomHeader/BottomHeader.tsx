import React from "react";
import styled from "styled-components/macro";

const StyledBottomHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomHeader = ({...props} : any) => {
  return <StyledBottomHeader {...props}></StyledBottomHeader>;
};

export default BottomHeader;
