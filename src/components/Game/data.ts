import { IKeysSchema } from "./types";

export const letters: string[] = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

export const keysSchema: IKeysSchema = {
  9: {
    min: 1,
    max: 9,
  },
  19: {
    min: 10,
    max: 19,
  },
  50: {
    min: 20,
    max: 50,
  },
  99: {
    min: 51,
    max: 99,
  },
  999: {
    min: 100,
    max: 999,
  },
};
