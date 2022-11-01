import { GameMode } from "components/Game/types";
import { IDataMenuButtonItem, IDataMenuRangeItem } from "./types";

export const dataMenuRanges: IDataMenuRangeItem[] = [
  {
    title: "Кол-во предметов",
    dotCount: 4,
    dataMarks: ["2", "3", "4", "5"],
    width: "366px",
  },
  {
    title: "Значения",
    dotCount: 6,
    dataMarks: ["A", "9", "19", "50", "99", "999"],
    width: "531px",
  },
];

export const dataMenuButtons: IDataMenuButtonItem[] = [
  {
    name: "По возрастанию",
    gameMode: GameMode.INCREASE,
  },
  {
    name: "По убыванию",
    gameMode: GameMode.DECREASE,
  },
];
