import type { Field } from "payload/types";

import linkGroup from "./linkGroup";
import richText from "./richText";
import label from "./richText/label";

export const hero: Field = {
  name: "hero",
  label: false,
  type: "group",
  fields: [
    // richText(),
    /*linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),*/
    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "private",
      type: "checkbox",
      label: "Private Seite",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
