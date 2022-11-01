import { GameMode } from "components/Game/types";
import { Dispatch, SetStateAction, MouseEvent } from "react";

export interface IMenuProps {
  showMenu: boolean;
  gameMode: GameMode;
  setCountItem: Dispatch<SetStateAction<string>>;
  setValueRange: Dispatch<SetStateAction<string>>;
  setGameMode: Dispatch<SetStateAction<GameMode>>;
  startGame: EventFunc<MouseEvent>
}

export interface IMenuWrapProps {
  showMenu: boolean;
}

export interface IDataMenuRangeItem {
  title: string;
  dotCount: number;
  dataMarks: string[];
  width: string;
}

export interface IDataMenuButtonItem {
  name: string;
  gameMode: GameMode;
}
