import styled, { keyframes } from "styled-components";
import { ResetButtonStyles } from "styles/components/ResetButtonStyles";
import { IStarImageProps, IWinPopupBackgroundProps } from "./types";

export const zoomIn = keyframes`
    0% {
  opacity: 0;
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }
`;

export const WinPopupBackground = styled.div<IWinPopupBackgroundProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ showPopup }) => (showPopup ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 50;
  background: rgba(32, 21, 54, 0.6);
`;

export const WinPopupWrap = styled.div`
  position: relative;
  width: 661px;
  height: 480px;
  display: flex;
  padding: 20px;
  background: linear-gradient(180deg, #67df89 0%, rgba(141, 103, 223, 0) 100%);
  border-radius: 40px;

  animation-name: ${zoomIn};
  animation-duration: 1s;
  animation-fill-mode: both;
`;

export const WinPopupContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 30px;
  background: radial-gradient(
    384.16% 384.16% at 50% 50%,
    #ffffff 12.29%,
    #aa92d2 21.15%
  );
  border-radius: 30px;
`;

export const WinPopupText = styled.p`
  max-width: 520px;
  font-family: CirceRounded Thin;
  color: #5f40a1;
  font-size: 40px;
  font-weight: 100;
  line-height: 51px;
  letter-spacing: 0px;
  text-align: center;
`;

export const WinPopupButton = styled(ResetButtonStyles)`
  margin-top: auto;
  padding: 8px 66px;
  background: #2bd600;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-family: CirceRounded Regular;
  font-size: 40px;
  font-weight: 400;
  line-height: 51px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
`;

export const StarImage = styled.img<IStarImageProps>`
  width: ${({ width }) => width};
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  z-index: 5;
`;
