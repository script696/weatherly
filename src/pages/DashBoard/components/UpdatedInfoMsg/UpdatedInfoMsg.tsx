import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { setUpdateTime } from "../../../../store/slices/weatherSlice";

const StyledUpdatedInfoMsg = styled.div<any>`
  font-size: 11px;
  line-height: 100%;
`;

const UpdatedInfoMsg = ({ ...props }) => {
  const {
    updateData: { units, timeFromLastUpdate, iconColor },
  } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();


  useEffect(() => {
    const interval = setInterval(() => {

      dispatch(setUpdateTime(1));
    }, 1000);
    return(
      () => clearInterval(interval)
    )
  }, [dispatch]);

  return (
    <StyledUpdatedInfoMsg
      {...props}
    >{`Updated ${timeFromLastUpdate} ${units} ago`}</StyledUpdatedInfoMsg>
  );
};

export default UpdatedInfoMsg;
