import { IGameItem } from "components/Game/types";

export interface IBodyProps {
  showBody: boolean;
  dataBody: IGameItem[];
  dataPanel: IGameItem[];
  dropItem: VoidFunc<string>
}

export interface IBodyWrapProps {
  showBody: boolean;
}

export interface IDataBodyItem {
  top: string;
  left: string;
  img: string;
  value: string;
}
