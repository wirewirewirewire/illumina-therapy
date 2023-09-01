import type { Block } from "payload/types";

import richText from "../../fields/richText";

export const ContactBlock: Block = {
  slug: "contact",
  fields: [
    richText({ required: false }),
    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
  ],
};
