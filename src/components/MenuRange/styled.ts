import styled from "styled-components";
import { IMarksWrapProps, IRangeWrapProps } from "./types";

export const MenuRangeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuRangeTitle = styled.p`
  font-family: Helvetica;
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0px;
  text-align: center;
`;

export const MarksWrap = styled.div<IMarksWrapProps>`
  width: ${({ width }) => `calc(${width} - 10px)` || "calc(100% - 10px)"};
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const MarkItem = styled.p`
  width: 12px;
  display: flex;
  justify-content: center;
  font-family: Calibri;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0px;
`;

export const RangeWrap = styled.div<IRangeWrapProps>`
  width: ${({ width }) => `calc(${width} - 20px)` || "calc(100% - 20px)"};
  height: 21px;
  margin-top: 2px;
`;

export const trackStyle = {
  height: "21px",
  background: "transparent",
};

export const railStyle = {
  width: "calc(100% + 20px)",
  background: "#FFD748 ",
  height: "21px",
  borderRadius: "10px",
};

export const handleStyle = {
  top: "4px",
  background: "#104987",
  height: "23px",
  width: "23px",
  borderRadius: "50%",
  border: "none",
  ":active": {
    background: "red",
  },
};
