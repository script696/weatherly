import styled from "styled-components/macro";


const StyledUpdateIndicator = styled.p<any>`
width: 6px;
height: 6px;
border-radius: 50%;
background: #FFF30F;
`



const UpdateIndicator = ({...props}) => {
  return <StyledUpdateIndicator {...props}/>
}

export default UpdateIndicator