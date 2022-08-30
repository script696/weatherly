import styled from "styled-components/macro";


const StyledWrapper = styled.div<any>`
display: ${({display}) => display || '100%'};
height: ${({height}) => height || '100%'};
width: ${({width}) => width || '100%'};
margin: ${({margin}) => margin || '0'};
padding: ${({padding}) => padding || '0'};
position: ${({position}) => position || 'static'};
top: ${({top}) => top || 'auto'};
bottom: ${({bottom}) => bottom || 'auto'};
left: ${({left}) => left || 'auto'};
right: ${({right}) => right || 'auto'};
transform: ${({transform}) => transform || 'none'};
`


const Wrapper = ({...props}) => {
  return (
     <StyledWrapper {...props}/>
  )
}

export default Wrapper