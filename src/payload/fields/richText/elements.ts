import type { RichTextElement } from "payload/dist/fields/config/types";

import label from "./label";

const elements: RichTextElement[] = [
  "blockquote",
  "h2",
  "h3",
  "h4",
  "h5",
  // "h6",
  "link",
  //"code",
  "ul",
  "ol",
  "textAlign",
  // largeBody,
  // label,
];

export default elements;
