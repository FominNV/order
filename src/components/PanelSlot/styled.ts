import styled from "styled-components";
import { IPanelSlotItemProps } from "./types";

export const PanelSlotStyled = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
`;

export const PanelSlotItem = styled.div<IPanelSlotItemProps>`
  width: 130px;
  height: 130px;
  display: ${({ fullfield }) => (fullfield ? "flex" : "none")};
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

export const ItemImage = styled.img``;

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
