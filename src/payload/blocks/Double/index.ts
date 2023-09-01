import type { Block } from "payload/types";

import { backgroundColor } from "../../fields/backgroundColor";
import richText from "../../fields/richText";
import { cssField } from "@/payload/fields/cssField";

export const DoubleBlock: Block = {
  slug: "double",
  fields: [
    {
      type: "row",
      fields: [],
    },
    { type: "text", name: "title" },
    richText({ name: "richTextA", required: false }),

    {
      name: "mediaA",
      type: "upload",
      relationTo: "media",
      admin: {
        width: "100%",
      },
    },

    richText({ name: "richTextB", required: false }),
    {
      name: "mediaB",
      type: "upload",
      relationTo: "media",
      admin: {
        width: "100%",
      },
    },
    cssField(),
  ],
};
