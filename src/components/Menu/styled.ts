import { zoomIn } from "components/WinPopup/styled";
import styled from "styled-components";
import { ResetButtonStyles } from "styles/components/ResetButtonStyles";
import { IMenuWrapProps } from "./types";

export const MenuWrap = styled.div<IMenuWrapProps>`
  width: 700px;
  height: 660px;
  display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: linear-gradient(#7f75f0, #101f32);
  border-radius: 40px;
  padding: 20px;

  animation-name: ${zoomIn};
  animation-duration: 0.5s;
  animation-fill-mode: both;
`;

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 37px 0 32px;
  background: #ffffff;
  border-radius: 30px;
`;

export const MenuRangesWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

export const MenuButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 36px;
  margin-top: 73px;
`;

export const GameStartButton = styled(ResetButtonStyles)`
  padding: 4px 75px 12px;
  margin-top: 96px;
  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font: 600 32px/44px Helvetica;
  color: #ffffff;
  transition: all 0.25s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
