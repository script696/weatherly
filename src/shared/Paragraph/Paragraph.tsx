import styled from "styled-components/macro";

const StyledParagraph = styled.p<any>`
  margin: ${({ margin }) => margin || "0"};
  font-weight: ${({ weight }) => weight || "inherit"};
  font-size: ${({ size }) => size || "inherit"};
  line-height: ${({ height }) => height || "inherit"};
  color: ${({ color }) => color || "inherit"};
`;



const Paragraph = ({ ...props }: any) => {
  return <StyledParagraph {...props}>{props.text}</StyledParagraph>;
};

export default Paragraph;
