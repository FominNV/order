// variables
declare type Nullable<T> = T | null;

// functions
declare type VoidFunc<T> = (...arg: T[]) => void;
declare type EventFunc<T> = (event: T) => void;

declare module "react-drag-drop-container";

declare interface IGameTheme extends DefaultTheme {
  panel: {
    slot: string;
    bg: string;
  };
  body: {
    bgColor: string;
    decor: {
      left: string;
      right: string;
    };
    items: string[];
  };
  itemsDecor?: IThemeBodyDecorItem[];
}

declare interface IThemeBodyDecorItem {
  src: string;
  top: string;
  left: string;
}
