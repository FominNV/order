import styled from "styled-components";
import { IDivProps } from "./types";

const Div = styled.div<IDivProps>`
  width: ${({ width }) => width || "auto"};
  min-width: ${({ minWidth }) => minWidth || "none"};
  height: ${({ height }) => height || "auto"};
  min-height: ${({ minHeight }) => minHeight || "none"};
  background: ${({ background }) => background || "transparent"};
  border: ${({ border }) => border || "transparent"};
`;

export default Div;
