import { IDivProps } from "../Div/types";

export interface IFlexProps extends IDivProps {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  rowGTap?: string;
  columnGap?: string;
}
