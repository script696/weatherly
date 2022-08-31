import styled from "styled-components/macro";


const StyledUpdateIndicator = styled.div<any>`
width: 6px;
height: 6px;
border-radius: 50%;
background: ${({ background }) => background || "red"};

`



const UpdateIndicator = ({...props}) => {
  return <StyledUpdateIndicator {...props}/>
}

export default UpdateIndicator