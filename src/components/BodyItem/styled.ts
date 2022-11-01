import styled from "styled-components";
import { IBodyItemStyledProps, IBodyItemWrapProps, IDecorImageProps } from "./types";

export const BodyItemWrap = styled.div<IBodyItemWrapProps>`
  width: 160px;
  height: 160px;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
`;

export const BodyItemStyled = styled.div<IBodyItemStyledProps>`
  width: 160px;
  height: 160px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrap = styled.div`
  width: 1px;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemImage = styled.img`
`;

export const ItemDecorImage = styled.img<IDecorImageProps>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: 0;
  z-index: 2;
`;

export const ItemText = styled.p`
  position: relative;
  z-index: 5;
  user-select: none;
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 68px;
  letter-spacing: 2px;
  box-sizing: border-box;
  color: #ffffff;
  text-shadow: -0 -3px 3px #242546, 0 -3px 3px #242546, -0 3px 3px #242546,
    0 3px 3px #242546, -3px -0 3px #242546, 3px -0 3px #242546,
    -3px 0 3px #242546, 3px 0 3px #242546, -1px -3px 3px #242546,
    1px -3px 3px #242546, -1px 3px 3px #242546, 1px 3px 3px #242546,
    -3px -1px 3px #242546, 3px -1px 3px #242546, -3px 1px 3px #242546,
    3px 1px 3px #242546, -2px -3px 3px #242546, 2px -3px 3px #242546,
    -2px 3px 3px #242546, 2px 3px 3px #242546, -3px -2px 3px #242546,
    3px -2px 3px #242546, -3px 2px 3px #242546, 3px 2px 3px #242546,
    -3px -3px 3px #242546, 3px -3px 3px #242546, -3px 3px 3px #242546,
    3px 3px 3px #242546, -3px -3px 3px #242546, 3px -3px 3px #242546,
    -3px 3px 3px #242546, 3px 3px 3px #242546;
`;
