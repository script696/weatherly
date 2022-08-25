import styled from "styled-components/macro";


const StyledFlex = styled.div<any>`
height: 100%;
width: 100%;
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'center'};
justify-content: ${props => props.justify|| 'center'};
`

const Flex = (props: any) => {
  return (
    <StyledFlex {...props}/>
  )
}

export default Flex