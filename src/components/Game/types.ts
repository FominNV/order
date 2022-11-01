export interface IGameItem {
  id: number;
  fullfield: boolean;
  value: string;
}

export interface IKeysSchema {
  [index: string]: {
    min: number;
    max: number;
  };
}

export enum GameMode {
  INCREASE = "increase",
  DECREASE = "decrease",
}

export type CreateKeysType = (count: number, value: string) => string[];
export type CheckResultType = (data: IGameItem[]) => boolean;
