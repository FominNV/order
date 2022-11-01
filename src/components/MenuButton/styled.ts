import styled from "styled-components";
import { ResetButtonStyles } from "styles/components/ResetButtonStyles";
import { IMenuButtonStyledProps } from "./types";

export const MenuButtonStyled = styled(ResetButtonStyles)<IMenuButtonStyledProps>`
  height: 39px;
  background: ${({ active }) => active ? "#ffd748" : "rgba(255, 215, 72, 0.56)"};
  padding: 0 24px;
  border-radius: 20px;
  color: ${({ active }) => (active ? "#423f45" : "rgba(66, 63, 69, 0.56)")};
  font-family: Calibri;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  transition: all 0.25s;

  &:hover {
    filter: brightness(80%);
  }

  &:active {
    transform: scale(0.95);
  }
`;
