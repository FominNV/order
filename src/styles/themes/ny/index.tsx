import slot from "assets/images/slot-bg-ny.png";
import panelBg from "assets/images/panel-bg-ny.png";
import decorLeft from "assets/images/decor-ny-left.png";
import decorRight from "assets/images/decor-ny-right.png";
import item1 from "assets/images/item-bg-ny-1.png";
import item2 from "assets/images/item-bg-ny-2.png";
import item3 from "assets/images/item-bg-ny-3.png";
import item4 from "assets/images/item-bg-ny-4.png";
import { IGameTheme } from "../types";

export const ny: IGameTheme = {
  panel: {
    slot: slot.src,
    bg: panelBg.src,
  },
  body: {
    bgColor: "#132738",
    decor: {
      left: decorLeft.src,
      right: decorRight.src,
    },
    items: [item1.src, item2.src, item3.src, item2.src, item4.src],
  },
};
