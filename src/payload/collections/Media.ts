import path from "path";
import type { CollectionConfig, Field } from "payload/types";

const urlField: Field = {
  name: "url",
  type: "text",
};

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    disableLocalStorage: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "richText",
      admin: {
        elements: ["link"],
      },
    },
    urlField,
  ],
};
