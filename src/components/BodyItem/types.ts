import { IThemeBodyDecorItem } from "styles/themes/types";

export interface IBodyItemProps {
  id: number;
  img: string;
  value: string;
  top: string;
  left: string;
  fullfield: boolean;
  dropItem: VoidFunc<string>;
  decorImg?: IThemeBodyDecorItem;
}

export interface IDecorImageProps {
  top: string
  left: string
}

export interface IBodyItemStyledProps {
  img: string;
}

export interface IDragEvent {
  dropElem: {
    offsetLeft: number;
    offsetTop: number;
  };
}

export interface IBodyItemWrapProps {
  top: string;
  left: string;
  hidden: boolean;
}
