import { RandonIntType } from "./types";

export const getRandomInt: RandonIntType = (min, max) => Math.floor(Math.random() * (max - min)) + min;
