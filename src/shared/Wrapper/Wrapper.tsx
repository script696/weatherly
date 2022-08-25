import styled from "styled-components/macro";


const StyledWrapper = styled.div<any>`
height: ${props => props.h || '100%'};
width: ${props => props.w || '100%'};
margin: ${props => props.m || '0'};
mpadding: ${props => props.p || '0'};
`


const Wrapper = ({...props}) => {
  return (
     <StyledWrapper {...props}/>
  )
}

export default Wrapper