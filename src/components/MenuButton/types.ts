import { GameMode } from "components/Menu/types";
import { Dispatch, SetStateAction } from "react";

export interface IMenuButtonProps {
  name: string;
  gameMode: GameMode;
  active: boolean;
  setState: Dispatch<SetStateAction<GameMode>>;
}

export interface IMenuButtonStyledProps {
  active: boolean;
}

export type SetGameMode = () => void;
