const consonantArray = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const doubleConsonantEnd = [
  "bt",
  "bs",
  "ct",
  "ch",
  "cs",
  "ck",
  "dd",
  "ds",
  "ft",
  "fs",
  "ff",
  "gh",
  "gs",
  "ks",
  "lb",
  "ld",
  "lf",
  "lk",
  "lm",
  "ln",
  "lp",
  "ls",
  "ll",
  "lt",
  "mb",
  "mp",
  "ms",
  "nd",
  "ng",
  "nk",
  "ns",
  "nt",
  "pt",
  "ps",
  "ph",
  "rb",
  "rd",
  "rf",
  "rg",
  "rk",
  "rm",
  "rn",
  "rp",
  "rs",
  "rt",
  "sh",
  "sh",
  "sk",
  "sm",
  "sp",
  "ss",
  "st",
  "th",
  "ts",
  "wd",
  "wl",
  "wn",
  "ws",
  "zz",
];
const doubleConsonantStart = [
  "bl",
  "br",
  "cl",
  "cr",
  "ch",
  "dr",
  "fl",
  "fr",
  "gl",
  "gr",
  "kn",
  "pl",
  "pr",
  "ph",
  "sc",
  "sh",
  "sk",
  "sl",
  "sm",
  "sn",
  "sp",
  "sq",
  "st",
  "sw",
  "th",
  "tr",
  "tw",
  "wr",
];
const tripleConsonantStart = [
  "chr",
  "str",
  "scr",
  "scr",
  "shr",
  "spl",
  "spr",
  "thr",
];
const tripleConsonantEnd = [
  "cts",
  "cks",
  "dds",
  "fts",
  "ffs",
  "ghs",
  "lbs",
  "lds",
  "lfs",
  "lgs",
  "lks",
  "lms",
  "lns",
  "lps",
  "lls",
  "lts",
  "mbs",
  "mps",
  "nds",
  "ngs",
  "nks",
  "nns",
  "nts",
  "pts",
  "pps",
  "phs",
  "rbs",
  "rds",
  "rgs",
  "rks",
  "rms",
  "rns",
  "rps",
  "rrs",
  "rts",
  "sks",
  "sms",
  "sps",
  "sts",
  "tch",
  "ths",
];

export default function getConsonant(next, length, position) {
  //if next is false, this segment cannot end with q. If it is true, it can.

  switch (length) {
    case 1:
      return consonantArray[Math.floor(Math.random() * consonantArray.length)];
    case 2:
      if (position === "end") {
        return doubleConsonantEnd[
          Math.floor(Math.random() * doubleConsonantEnd.length)
        ];
      }
      return doubleConsonantStart[
        Math.floor(Math.random() * doubleConsonantStart.length)
      ];
    case 3:
      if (position === "end") {
        return tripleConsonantEnd[
          Math.floor(Math.random() * tripleConsonantEnd.length)
        ];
      }
      return tripleConsonantStart[
        Math.floor(Math.random() * tripleConsonantStart.length)
      ];
    default:
      return "?";
  }
}
