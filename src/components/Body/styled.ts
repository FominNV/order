import styled, { keyframes }  from "styled-components";
import { IBodyWrapProps } from "./types";

export const showIn = keyframes`
    0% {
  opacity: 0;
  }
  50% {
  opacity: 1;
  }
`;

export const BodyWrap = styled.div<IBodyWrapProps>`
  width: 100%;
  height: 100%;
  position: relative;
  display: ${({ showBody }) => (showBody ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: ${({ theme }) => theme.body.bgColor};
  overflow: hidden;

  animation-name: ${showIn};
  animation-duration: 0.5s;
  animation-fill-mode: both;
`;

export const ImageDecorLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

export const ImageDecorRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
