import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { setUpdateTime } from "../../../../store/slices/weatherSlice";

const StyledUpdatedInfoMsg = styled.div<any>`
  font-size: 11px;
  line-height: 100%;
`;

const UpdatedInfoMsg = ({ ...props }) => {
  const { timeFromLastUpdate } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(setUpdateTime(1))
    }, 1000);
  }, []);
  return (
    <StyledUpdatedInfoMsg
      {...props}
    >{`Updated ${timeFromLastUpdate}sec ago`}</StyledUpdatedInfoMsg>
  );
};

export default UpdatedInfoMsg;
