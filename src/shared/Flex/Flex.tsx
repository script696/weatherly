import styled from "styled-components/macro";

const StyledFlex = styled.div<any>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin || "0"};
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  gap: ${({ gap }) => gap || "0"};
  flex: ${({ flex }) => flex || "0 0 auto"};
`;

const Flex = (props: any) => {
  return <StyledFlex {...props} />;
};

export default Flex;
