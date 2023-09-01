import { Link, Story, Wrapper, List, ListItem, Button } from "@un/react";
import React from "react";
import styles from "./section.module.scss";

import Image from "next/image";
import NextLink from "next/link";
import convertToSlug from "@/lib/convertToSlug";
import InlineCss from "@/lib/InlineCss";
import imageLadanPortraitBackgroundCircle from "./ladan-portrait-background-circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons";

export default function Section({
  background,
  className,
  storyClassName,
  image,
  children,
  blockName,
  css,
  kind,
}: any) {
  return (
    <div
      className={`${styles.resources} ${styles[kind]} ${
        background === "dark" ? styles.background : styles.noBackground
      } ${className} ${convertToSlug(blockName)}`}
    >
      <InlineCss css={css} />
      <Wrapper className={styles.wrapper} pageWidth="md">
        {blockName === "Background" && (
          <Image
            className={styles.imageLadanPortraitBackgroundCircle}
            src={imageLadanPortraitBackgroundCircle}
            priority
            alt="About us"
          />
        )}

        {image && (
          <Image
            className={`${styles.image} imageElement`}
            src={`https://res.cloudinary.com/di13i8ts4/image/upload/${image.filename}.png`}
            alt="Illumina Therapy"
            width={image.width}
            height={image.height}
          />
        )}
        <Story className={`${styles.story} ${storyClassName}`}>
          {children}
          {kind === "large" && (
            <NextLink href="/contact">
              <Button icon={<FontAwesomeIcon icon={faArrowRight} />}>
                Contact
              </Button>
            </NextLink>
          )}
        </Story>
      </Wrapper>
    </div>
  );
}
