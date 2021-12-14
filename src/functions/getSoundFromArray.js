const vCCvArray = [
  "bl",
  "br",
  "cc",
  "ch",
  "ck",
  "cl",
  "cr",
  "ct",
  "cs",
  "dd",
  "dg",
  "dr",
  "fl",
  "fr",
  "ff",
  "ft",
  "gh",
  "gl",
  "gr",
  "kn",
  "lb",
  "ld",
  "lf",
  "lk",
  "ll",
  "lm",
  "lp",
  "ls",
  "lt",
  "lv",
  "ln",
  "mb",
  "mp",
  "mm",
  "nd",
  "ng",
  "nk",
  "nn",
  "ph",
  "pl",
  "pp",
  "pr",
  "rb",
  "rc",
  "rd",
  "rf",
  "rg",
  "rk",
  "rl",
  "rm",
  "rn",
  "rp",
  "rq",
  "rr",
  "rs",
  "rt",
  "rv",
  "sc",
  "sh",
  "sk",
  "sl",
  "sm",
  "sn",
  "sp",
  "ss",
  "st",
  "sw",
  "th",
  "tr",
  "tt",
  "wh",
  "wr",
];
const cVVcArray = [
  "ai",
  "au",
  "ea",
  "ee",
  "ei",
  "ia",
  "ie",
  "io",
  "iu",
  "ua",
  "ue",
  "ui",
  "uo",
];
const xCCArray = [
  "bl",
  "br",
  "ch",
  "cl",
  "cr",
  "dr",
  "fl",
  "fr",
  "gl",
  "gr",
  "kn",
  "ph",
  "pl",
  "pr",
  "sc",
  "sh",
  "sk",
  "sl",
  "sm",
  "sn",
  "sp",
  "st",
  "sw",
  "th",
  "tr",
  "tw",
  "wh",
  "wr",
];
const xVVArray = ["ai", "au", "ea", "eu", "ia", "io"];

const CCxArray = [
  "ng",
  "nd",
  "bt",
  "bs",
  "ct",
  "ch",
  "ds",
  "ff",
  "ft",
  "gh",
  "gs",
  "ck",
  "lk",
  "nk",
  "sk",
  "rk",
  "ll",
  "lm",
  "lt",
  "lp",
  "ld",
  "ls",
  "lb",
  "mp",
  "mb",
  "nt",
  "ms",
  "ns",
  "pt",
  "ps",
  "rt",
  "rs",
  "rp",
  "rb",
  "st",
  "sh",
  "ss",
  "sp",
  "ts",
  "th",
  "wl",
  "wd",
  "zz",
];
const VVxArray = ["ue", "ea"];

export default function getSoundFromArray(props) {
  let array = props;
  let soundValue;
  if (
    array === vCCvArray.join("") ||
    array === cVVcArray.join("") ||
    array === xVVArray.join("") ||
    array === xCCArray.join("") ||
    array === VVxArray.join("") ||
    array === CCxArray.join("")
  ) {
    soundValue = 2 * Math.floor(Math.random() * (array.length / 2));
  } else {
    soundValue = Math.floor(Math.random() * array.length);
  }
  let sound = array[soundValue];
  if (
    array === vCCvArray.join("") ||
    array === cVVcArray.join("") ||
    array === xVVArray.join("") ||
    array === xCCArray.join("") ||
    array === VVxArray.join("") ||
    array === CCxArray.join("")
  ) {
    sound = sound + array[soundValue + 1];
  }
  return sound;
}
