import slot from "assets/images/slot-bg-coin.png";
import panelBg from "assets/images/panel-bg-coin.png";
import decorLeft from "assets/images/decor-coin-left.png";
import decorRight from "assets/images/decor-coin-right.png";
import item1 from "assets/images/item-bg-coin-1.png";
import item2 from "assets/images/item-bg-coin-2.png";
import item3 from "assets/images/item-bg-coin-3.png";
import item4 from "assets/images/item-bg-coin-4.png";
import { IGameTheme } from "../types";

export const coin: IGameTheme = {
  panel: {
    slot: slot.src,
    bg: panelBg.src,
  },
  body: {
    bgColor: "#3A1F36",
    decor: {
      left: decorLeft.src,
      right: decorRight.src,
    },
    items: [item1.src, item2.src, item3.src, item4.src, item3.src],
  },
};
