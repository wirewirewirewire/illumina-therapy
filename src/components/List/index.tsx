import { Link, Story, Wrapper, List, ListItem } from "@un/react";
import React from "react";
import styles from "./list.module.scss";

import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import components from "../Blog/Mdx";
import Section from "../Section";

export default function ListWrapper({
  background,
  className,
  storyClassName,
  mdxA,
  mdxB,
  mdxC,
}: any) {
  return (
    <div>
      <Section className={styles.mentalHealth} kind="center" background="dark">
        <h2>Common themes I work with</h2>

        <div className={styles.listWrapper}>
          <MDXRemote {...mdxA} components={components} />
          <MDXRemote {...mdxB} components={components} />
          <MDXRemote {...mdxC} components={components} />
        </div>
      </Section>
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
