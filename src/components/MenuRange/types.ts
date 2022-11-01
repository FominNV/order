import { Dispatch, SetStateAction } from "react";

export interface IMenuRangeProps {
  title: string;
  dotCount: number;
  dataMarks: string[];
  setState: Dispatch<SetStateAction<string>>;
  width?: string;
}

export interface IMarksWrapProps {
  width?: string
}

export interface IRangeWrapProps {
  width?: string;
}

export type OnChangeRangeType = (value: number | number[]) => void;
