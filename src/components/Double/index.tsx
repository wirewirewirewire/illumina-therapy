import { Link, Story, Wrapper, List, ListItem } from "@un/react";
import React from "react";
import styles from "./double.module.scss";

import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import components from "../Blog/Mdx";
import convertToSlug from "@/lib/convertToSlug";
import InlineCss from "@/lib/InlineCss";

export default function Double({
  background,
  blockName,
  className,
  css,
  storyClassName,
  image,
  children,
  kind,
  mediaA,
  mediaB,
  mdxA,
  mdxB,
}: any) {
  return (
    <div>
      <Wrapper
        className={`${styles.wrapper} ${convertToSlug(blockName)}`}
        pageWidth="md"
      >
        <InlineCss css={css} />
        <div className={styles.twoImages}>
          <div className="wrapperA">
            <div className={styles.imageWrapper}>
              {mediaA && (
                <Image
                  className={`${styles.mediaA} imageElement imageElementA`}
                  src={`https://res.cloudinary.com/di13i8ts4/image/upload/${mediaA.filename}.png`}
                  alt="Illumina Therapy"
                  width={mediaA.width}
                  height={mediaA.height}
                />
              )}
            </div>
            <div className="textBlockA">
              <MDXRemote {...mdxA} components={components} />
            </div>
          </div>
          <div className="wrapperB">
            <div className={styles.imageWrapper}>
              {mediaB && (
                <Image
                  className={`${styles.mediaA} imageElement imageElementB`}
                  src={`https://res.cloudinary.com/di13i8ts4/image/upload/${mediaB.filename}.png`}
                  alt="Illumina Therapy"
                  width={mediaB.width}
                  height={mediaB.height}
                />
              )}
            </div>
            <div className="textBlockB">
              <MDXRemote {...mdxB} components={components} />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

/*



        {mediaA && (
          <Image
            className={`${styles.mediaA} imageElement`}
            src={`https://res.cloudinary.com/di13i8ts4/image/upload/${mediaA.filename}.png`}
            alt="Illumina Therapy"
            width={mediaA.width}
            height={mediaA.height}
          />
        )}
        {mediaB && (
          <Image
            className={`${styles.mediaA} imageElement`}
            src={`https://res.cloudinary.com/di13i8ts4/image/upload/${mediaB.filename}.png`}
            alt="Illumina Therapy"
            width={mediaB.width}
            height={mediaB.height}
          />
        )}
        <Story className={`${styles.story} ${storyClassName}`}>
          <MDXRemote {...mdxA} components={components} />
        </Story>
        <Story className={`${styles.story} ${storyClassName}`}>
          <MDXRemote {...mdxB} components={components} />
        </Story>
      </Wrapper>
    </div>
    */
