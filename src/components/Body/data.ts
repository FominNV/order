import bg1 from "assets/images/item-bg-coin-1.png";
import bg2 from "assets/images/item-bg-coin-2.png";
import bg3 from "assets/images/item-bg-coin-3.png";
import bg4 from "assets/images/item-bg-coin-4.png";
import { IDataBodyItem } from "./types";

export const dataBodyItems: IDataBodyItem[] = [
  {
    top: "130px",
    left: "30%",
    img: bg1.src,
    value: "1",
  },
  {
    top: "130px",
    left: "60%",
    img: bg2.src,
    value: "2",
  },
  {
    top: "280px",
    left: "45%",
    img: bg3.src,
    value: "3",
  },
  {
    top: "230px",
    left: "8%",
    img: bg2.src,
    value: "4",
  },
  {
    top: "230px",
    left: "80%",
    img: bg4.src,
    value: "5",
  },
];
