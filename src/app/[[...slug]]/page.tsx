import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { getArticle, getArticles } from "@/lib/api";

import { getPayloadClient } from "../../payload/payloadClient";
import { ArticleJsonLd, BreadcrumbJsonLd, NextSeo } from "next-seo";
import Layout from "@/components/Blog/Layout";
import { Wrapper } from "@un/react";
import HomepageIntro from "@/components/HomepageIntro";
import Resources from "@/components/Resources";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/ContactLegacy";
import Home from "@/components/Home";
import { mediaResize } from "@/lib/cloudinaryHelper";
import Content from "./content";

import "../../scss/a-global.scss";
import { slateToMdx } from "@/lib/slateToMdx";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const articles = (await getArticles()) || [];

  return [
    [
      articles.docs.map((post: any) => ({
        slug: [post.slug],
      })),
    ],
  ];
}

async function generateMdx(text: object) {
  const mdxText = await slateToMdx(text);

  const mdxSource = await serialize(mdxText, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
  return mdxSource;
}

async function getData({ params: { slug } }: any) {
  const payload = await getPayloadClient();

  const page = (await getArticle(slug?.[0] || "home")) || [];

  // Options
  const options = await payload.findGlobal({
    slug: "header",
  });

  const promises = await page.layout.map(async (layout: any) => {
    const mdxSource = await generateMdx(layout.richText);
    const mdxA = layout.richTextA
      ? await generateMdx(layout.richTextA)
      : undefined;
    const mdxB = layout.richTextB
      ? await generateMdx(layout.richTextB)
      : undefined;
    const mdxC = layout.richTextC
      ? await generateMdx(layout.richTextC)
      : undefined;

    return { ...layout, mdx: mdxSource, mdxA, mdxB, mdxC };
  });

  const layout = await Promise.all(promises);

  return { page: { ...page, layout }, options };
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  // fetch data
  const { page } = await getData({ params });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const postUrl = page.slug;
  const imageUrl = "";

  return {
    title: page.meta.title || page.title,
    description: page.meta?.description,
    // canonical: postUrl,
    openGraph: {
      url: postUrl,
      title: page.meta.title || page.title,
      description: page.meta?.description,
      images: [
        {
          url: page.meta?.image?.filename
            ? `https://res.cloudinary.com/di13i8ts4/image/upload/c_fill,h_630,w_1200/${page.meta.image.filename}.jpg`
            : "https://defaultimage", // 1200:630
          alt: page.meta?.image?.alt,
        },
      ],
      type: "article",
    },
  };
}

export default async function Page(args: any) {
  const data: any = await getData(args);

  const { page, mdxSource, options, font, footer } = data;

  const article = page;

  const src = article.image?.file?.publicUrl.startsWith("/")
    ? process.env.NEXT_PUBLIC_API + article.image?.publicUrl
    : article.image?.file?.publicUrl;

  const imageUrl = mediaResize(src, { width: 620 * 2, crop: "pad" });

  const postUrl = `${article.slug}`;

  const storage = globalThis?.sessionStorage;
  const hasBack =
    storage && storage.getItem("prevPath")
      ? storage.getItem("prevPath") === process.env.NEXT_PUBLIC_BLOG_FOLDER
      : false;

  const articles = (await getArticles()) || [];

  return (
    <>
      <Content
        article={page}
        page={page}
        options={options}
        font={font}
        articles={articles}
      >
        {article.layout.map((layout: any, i: number) => {
          return <div key={i}></div>;
        })}
      </Content>
    </>
  );
}
