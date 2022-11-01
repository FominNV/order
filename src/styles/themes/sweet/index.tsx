import slot from "assets/images/slot-bg-sweet.png";
import panelBg from "assets/images/panel-bg-sweet.png";
import decorLeft from "assets/images/decor-sweet-left.png";
import decorRight from "assets/images/decor-sweet-right.png";
import item1 from "assets/images/item-bg-sweet-1.png";
import item2 from "assets/images/item-bg-sweet-2.png";
import item3 from "assets/images/item-bg-sweet-3.png";
import item4 from "assets/images/item-bg-sweet-4.png";
import { IGameTheme } from "../types";

export const sweet: IGameTheme = {
  panel: {
    slot: slot.src,
    bg: panelBg.src,
  },
  body: {
    bgColor: "#DEC6AA",
    decor: {
      left: decorLeft.src,
      right: decorRight.src,
    },
    items: [item1.src, item2.src, item2.src, item3.src, item4.src],
  },
};
