import type { HTMLEntity, EntityGroup } from "./types";

const exclamationMark: HTMLEntity = {
  name: "exclamationMark",
  entityName: null,
  symbol: "!",
  code: "&#33;",
  group: "punctuation",
};

const period: HTMLEntity = {
  name: "period",
  entityName: null,
  symbol: ".",
  code: "&#46;",
  group: "punctuation",
};
const colon: HTMLEntity = {
  name: "colon",
  entityName: null,
  symbol: ":",
  code: "&#58;",
  group: "punctuation",
};
const semiColon: HTMLEntity = {
  name: "semi-colon",
  entityName: null,
  symbol: ";",
  code: "&#59;",
  group: "punctuation",
};
const singleQuote: HTMLEntity = {
  //apostrophe
  name: "single-quote",
  entityName: null,
  symbol: "'",
  code: "&#39",
  group: "punctuation",
};
const apostrophe: HTMLEntity = {
  ...singleQuote,
  name: "apostrophe",
};

const doubleQuote: HTMLEntity = {
  name: "double-quote",
  entityName: "&quoit",
  symbol: '"',
  code: "&#34;",
  group: "punctuation",
};
const questionMark: HTMLEntity = {
  name: "question-mark",
  entityName: null,
  symbol: "?",
  code: "&#63;",
  group: "punctuation",
};

const comma: HTMLEntity = {
  name: "comma",
  entityName: null,
  symbol: ",",
  code: "&#44;",
  group: "punctuation",
};
const ampersand: HTMLEntity = {
  name: "ampersand",
  entityName: "&amp;",
  symbol: "&",
  code: "&#38;",
  group: "punctuation",
};

const backSlash: HTMLEntity = {
  name: "backslash",
  entityName: null,
  symbol: "\\",
  code: "&#92;",
  group: "punctuation",
};

const sum: HTMLEntity = {
  name: "sum",
  entityName: null,
  symbol: "+",
  code: "&#38",
  group: "arithmetic",
};

const plusSign: HTMLEntity = {
  ...sum,
  name: "plusSign",
};

const difference: HTMLEntity = {
  name: "difference",
  entityName: null,
  symbol: "-",
  code: "&#45;",
  group: "arithmetic",
};

const subtract: HTMLEntity = {
  ...difference,
  name: "subtract",
};

const product: HTMLEntity = {
  name: "product",
  entityName: null,
  symbol: "*",
  code: "&#42;",
  group: "arithmetic",
};
const multiply: HTMLEntity = {
  ...product,
  name: "multiply",
};
const asterisk: HTMLEntity = {
  ...product,
  name: "multiply",
  group: "punctuation",
};

const quotient: HTMLEntity = {
  name: "quotient",
  entityName: null,
  symbol: "/",
  code: "&#47;",
  group: "arithmetic",
};
const division: HTMLEntity = {
  ...quotient,
  name: "division",
};
const forwardSlash: HTMLEntity = {
  ...quotient,
  name: "forwardSlash",
  group: "punctuation",
};

const percent: HTMLEntity = {
  name: "percent",
  entityName: null,
  symbol: "%",
  code: "&#37;",
  group: "arithmetic",
};

const modulus: HTMLEntity = {
  ...percent,
  name: "modulus",
};
const equal: HTMLEntity = {
  name: "equal",
  entityName: null,
  symbol: "=",
  code: "&#61;",
  group: "arithmetic",
};
const lessThan: HTMLEntity = {
  name: "less-than",
  entityName: "&lt;",
  symbol: "<",
  code: "&#60;",
  group: "arithmetic",
};
const greaterThan: HTMLEntity = {
  name: "greater-than",
  entityName: "&gt;",
  symbol: ">",
  code: "&#62;",
  group: "arithmetic",
};
const assignment: HTMLEntity = {
  ...equal,
  name: "assignment",
};

const atSign: HTMLEntity = {
  name: "at-sign",
  entityName: null,
  symbol: "@",
  code: "&#64;",
  group: "general",
};
const hashTag: HTMLEntity = {
  name: "hashtag",
  entityName: null,
  symbol: "#",
  code: "&#35;",
  group: "general",
};
const dollarSign: HTMLEntity = {
  name: "dollar-sign",
  entityName: null,
  symbol: "$",
  code: "&#36;",
  group: "general",
};
const caret: HTMLEntity = {
  name: "caret",
  entityName: null,
  symbol: "^",
  code: "&#94;",
  group: "general",
};
const openingParenthesis: HTMLEntity = {
  name: "openingParenthesis",
  entityName: null,
  symbol: "(",
  code: "&#40;",
  group: "general",
};
const closingParenthesis: HTMLEntity = {
  name: "closingParenthesis",
  entityName: null,
  symbol: ")",
  code: "&#41",
  group: "general",
};
const openingBracket: HTMLEntity = {
  name: "openingBracket",
  entityName: null,
  symbol: "[",
  code: "&#91;",
  group: "general",
};
const closingBracket: HTMLEntity = {
  name: "closingBracket",
  entityName: null,
  symbol: "]",
  code: "&#93;",
  group: "general",
};
const openingBrace: HTMLEntity = {
  name: "openingBrace",
  entityName: null,
  symbol: "{",
  code: "&#123;",
  group: "general",
};
const closingBrace: HTMLEntity = {
  name: "closingBrace",
  entityName: null,
  symbol: "}",
  code: "&#125;",
  group: "general",
};
const verticalBar: HTMLEntity = {
  name: "verticalBar",
  entityName: null,
  symbol: "|",
  code: "&#124;",
  group: "general",
};
const tilde: HTMLEntity = {
  name: "tilde",
  entityName: null,
  symbol: "~",
  code: "&#126;",
  group: "general",
};
const underscore: HTMLEntity = {
  name: "underscore",
  entityName: null,
  symbol: "_",
  code: "&#95;",
  group: "general",
};
const backtick: HTMLEntity = {
  name: "backtick",
  entityName: null,
  symbol: "`",
  code: "&#96;",
  group: "general",
};

const tab: HTMLEntity = {
  name: "tab",
  entityName: "&tab;",
  symbol: "\t",
  code: "&#9;",
  group: "general",
};
const newLine: HTMLEntity = {
  name: "newLine",
  entityName: "&NewLine;",
  symbol: "\n",
  code: "&#10;",
  group: "general",
};
const space: HTMLEntity = {
  name: "space",
  entityName: "&nbsp;",
  symbol: "\\s",
  code: "&#32;",
  group: "general",
};
const backSpace: HTMLEntity = {
  name: "backspace",
  entityName: "\b",
  symbol: "\b",
  code: "",
  group: "general",
};

const entities: EntityGroup = {
  exclamationMark,
  questionMark,
  period,
  atSign,
  hashTag,
  dollarSign,
  percent,
  caret,
  ampersand,
  openingParenthesis,
  closingParenthesis,
  openingBrace,
  closingBrace,
  openingBracket,
  closingBracket,
  singleQuote,
  doubleQuote,
  sum,
  plusSign,
  difference,
  subtract,
  product,
  multiply,
  asterisk,
  division,
  quotient,
  modulus,
  assignment,
  verticalBar,
  tab,
  backSpace,
  newLine,
  space,
  backtick,
  tilde,
  comma,
  underscore,
  colon,
  semiColon,
  greaterThan,
  lessThan,
  forwardSlash,
  backSlash,
  apostrophe,
};
export default entities;
