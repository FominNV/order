import slot from "assets/images/slot-bg-green.png";
import panelBg from "assets/images/panel-bg-green.png";
import decorLeft from "assets/images/decor-green-left.png";
import decorRight from "assets/images/decor-green-right.png";
import item1 from "assets/images/item-bg-green-1.png";
import item2 from "assets/images/item-bg-green-2.png";
import item3 from "assets/images/item-bg-green-3.png";
import item4 from "assets/images/item-bg-green-4.png";
import item5 from "assets/images/item-bg-green-5.png";
import itemDecor1 from "assets/images/item-decor-green-1.png";
import itemDecor2 from "assets/images/item-decor-green-2.png";
import itemDecor3 from "assets/images/item-decor-green-3.png";
import itemDecor4 from "assets/images/item-decor-green-4.png";
import itemDecor5 from "assets/images/item-decor-green-5.png";
import { IGameTheme } from "../types";

export const green: IGameTheme = {
  panel: {
    slot: slot.src,
    bg: panelBg.src,
  },
  body: {
    bgColor: "#2D3539",
    decor: {
      left: decorLeft.src,
      right: decorRight.src,
    },
    items: [item1.src, item2.src, item3.src, item4.src, item5.src],
  },
  itemsDecor: [
    {
      src: itemDecor1.src,
      top: "140px",
      left: "90px",
    },
    {
      src: itemDecor2.src,
      top: "140px",
      left: "20px",
    },
    {
      src: itemDecor3.src,
      top: "140px",
      left: "70px",
    },
    {
      src: itemDecor4.src,
      top: "130px",
      left: "120px",
    },
    {
      src: itemDecor5.src,
      top: "135px",
      left: "-75px",
    },
  ],
};
