import React from "react";
import styled from "styled-components/macro";

const StyledBottomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 18px 0;
`;

const BottomHeader = ({...props} : any) => {
  return <StyledBottomHeader {...props}></StyledBottomHeader>;
};

export default BottomHeader;
