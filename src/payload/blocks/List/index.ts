import type { Block } from "payload/types";

import { backgroundColor } from "../../fields/backgroundColor";
import richText from "../../fields/richText";

export const ListBlock: Block = {
  slug: "list",
  fields: [
    {
      type: "row",
      fields: [],
    },
    { type: "text", name: "title" },
    richText({ name: "richTextA", required: false }),
    richText({ name: "richTextB", required: false }),
    richText({ name: "richTextC", required: false }),
  ],
};
