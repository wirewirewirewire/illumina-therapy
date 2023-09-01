import { Link, Story, Wrapper, List, ListItem } from "@un/react";
import React from "react";
import styles from "./hero.module.scss";

import Image from "next/image";
import convertToSlug from "@/lib/convertToSlug";
import InlineCss from "@/lib/InlineCss";

export default function Section({
  background = "dark",
  blockName,
  className,
  storyClassName,
  image,
  children,
  kind,
  css,
}: any) {
  return (
    <div
      className={`${styles.resources} ${styles[kind]} ${
        background === "dark" ? styles.background : styles.noBackground
      } ${className} ${convertToSlug(blockName)} `}
    >
      <InlineCss css={css} />
      <Wrapper className={styles.heroImage} pageWidth="md">
        {image && (
          <Image
            className={`${styles.image} imageElement`}
            src={`https://res.cloudinary.com/di13i8ts4/image/upload/${image.filename}.png`}
            alt="Illumina Therapy"
            width={image.width}
            height={image.height}
          />
        )}
      </Wrapper>
    </div>
  );
}
