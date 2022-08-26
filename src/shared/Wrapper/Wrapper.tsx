import styled from "styled-components/macro";


const StyledWrapper = styled.div<any>`
display: ${({display}) => display || '100%'};
height: ${({height}) => height || '100%'};
width: ${({width}) => width || '100%'};
margin: ${({margin}) => margin || '0'};
padding: ${({padding}) => padding || '0'};
`


const Wrapper = ({...props}) => {
  return (
     <StyledWrapper {...props}/>
  )
}

export default Wrapper