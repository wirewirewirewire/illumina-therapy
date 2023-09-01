import type { CollectionConfig } from "payload/types";

import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
import { CallToAction } from "../../blocks/CallToAction";
import { Content } from "../../blocks/Content";
import { FormBlock } from "../../blocks/Form";
import { MediaBlock } from "../../blocks/Media";
import { SectionBlock } from "../../blocks/Section";
import { hero } from "../../fields/hero";
import { slugField } from "../../fields/slug";
//import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedDate } from "../../hooks/populatePublishedDate";
import { formatAppURL, revalidatePage } from "../../hooks/revalidatePage";
import payload from "payload";
import { HeroBlock } from "@/payload/blocks/Hero";
import { ListBlock } from "@/payload/blocks/List";
import { DoubleBlock } from "@/payload/blocks/Double";
import { ContactBlock } from "@/payload/blocks/Contact";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    preview: (doc) =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({
        doc,
      })}`,
  },
  hooks: {
    beforeChange: [populatePublishedDate],
    // afterRead: [populateArchiveBlock],
    afterChange: [revalidatePage],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  endpoints: [
    {
      path: "/slug/:slug",
      method: "get",
      handler: async (req, res, next) => {
        const data = await payload.find({
          collection: "pages",
          where: { slug: { equals: req.params.slug } },
          limit: 1,
        });
        if (data) {
          res.status(200).send({ data });
        } else {
          res.status(404).send({ error: "not found" });
        }
      },
    },
  ],
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "publishedDate",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [hero],
        },
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              required: true,
              blocks: [
                HeroBlock,
                ListBlock,
                DoubleBlock,
                ContactBlock,
                CallToAction,
                Content,
                FormBlock,
                MediaBlock,
                SectionBlock,
              ],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
};
