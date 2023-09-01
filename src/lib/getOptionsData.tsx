import { serialize } from "next-mdx-remote/serialize";
import React from "react";
import { getOptions } from "./api";
import components from "../components/Blog/Mdx";
import remarkGfm from "remark-gfm";
import { slateToMdx } from "./slateToMdx";

export default async function getOptionsData() {
  const options = (await getOptions()) || null;

  const navigationText: any = slateToMdx(
    options?.option?.mainNavigation?.document
  );
  /* const navigation: any = await serialize(navigationText, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  const footerText = slateToMdx(options?.option?.footer?.document);
  const footer: any = await serialize(footerText, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });*/

  return options;
}
