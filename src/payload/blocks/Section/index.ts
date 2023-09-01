import type { Block } from "payload/types";

import { backgroundColor } from "../../fields/backgroundColor";
import richText from "../../fields/richText";
import { cssField } from "@/payload/fields/cssField";

export const SectionBlock: Block = {
  slug: "section",
  fields: [
    {
      type: "row",
      fields: [
        backgroundColor({ overrides: { name: "mediaBlockBackgroundColor" } }),
        {
          name: "position",
          type: "select",
          defaultValue: "default",
          options: [
            {
              label: "Default",
              value: "default",
            },
            {
              label: "Fullscreen",
              value: "fullscreen",
            },
          ],
        },
        {
          name: "kind",
          type: "select",
          defaultValue: "default",
          options: [
            {
              label: "Default",
              value: "default",
            },
            {
              label: "Center",
              value: "center",
            },
            {
              label: "Large",
              value: "large",
            },
            {
              label: "Left",
              value: "left",
            },
            {
              label: "image left",
              value: "imageLeft",
            },
            {
              label: "image right",
              value: "imageRight",
            },
          ],
        },
      ],
    },
    richText({ required: false }),
    cssField(),
    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
  ],
};
