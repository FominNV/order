import { DefaultTheme } from "styled-components";

export interface IGameTheme extends DefaultTheme {
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

export interface IThemeBodyDecorItem {
  src: string;
  top: string;
  left: string;
}
