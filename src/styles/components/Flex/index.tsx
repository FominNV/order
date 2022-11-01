import styled from "styled-components";
import Div from "styles/components/Div";
import { IFlexProps } from "./types";

const Flex = styled(Div)<IFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  row-gap: ${({ rowGTap }) => rowGTap};
  column-gap: ${({ columnGap }) => columnGap};
`;

export default Flex;
