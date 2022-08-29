import React from "react";
import styled from "styled-components/macro";

const StyledScreen = styled.div<any>`
  position: relative;
  height: ${({height} ) => height || '613px'};
  border-radius: 65px;
  background: linear-gradient(193.87deg, #82daf4 4.96%, #126cf4 97.35%);
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 331px;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -48%);
    background: #053f8d;
    opacity: 0.6;
    border-radius: 53px;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    z-index: 1;
    width: 264px;
    height: 37px;
    background: rgba(44, 134, 245, 0.62);
    filter: blur(40px);
  }
`;

const Screen = ({...props} : any) => {
  return <StyledScreen {...props}/>;
};

export default Screen;
