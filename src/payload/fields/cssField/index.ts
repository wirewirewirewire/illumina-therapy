import type { Field } from "payload/types";

import deepMerge from "../../utilities/deepMerge";

type CssField = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

export const cssField: CssField = (fieldToUse = "title", overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "css",
      label: "CSS",
      type: "textarea",
      index: true,
    },
    overrides
  );
