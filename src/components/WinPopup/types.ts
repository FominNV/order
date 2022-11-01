import { MouseEvent } from "react";

export interface IWinPopupProps {
  showPopup: boolean;
  goToMenu: EventFunc<MouseEvent>;
}

export interface IWinPopupBackgroundProps {
  showPopup: boolean;
}

export interface IStarImageProps {
  width: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}
