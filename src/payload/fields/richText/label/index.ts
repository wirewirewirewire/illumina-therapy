import type { RichTextCustomElement } from "payload/types";

import Button from "./Button";
import Element from "./Element";
//import withLabel from "./plugin.ts.legacy";

const richTextLabel: RichTextCustomElement = {
  name: "label",
  Button,
  Element,
  //plugins: [withLabel],
};

export default richTextLabel;
