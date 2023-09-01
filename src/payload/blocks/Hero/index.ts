import type { Block } from "payload/types";

import { backgroundColor } from "../../fields/backgroundColor";
import richText from "../../fields/richText";
import { cssField } from "@/payload/fields/cssField";

export const HeroBlock: Block = {
  slug: "hero",
  fields: [
    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
    cssField(),
  ],
};
