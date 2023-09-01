import {
  Link,
  Story,
  Wrapper,
  List,
  ListItem,
  TextInput,
  TextArea,
  Button,
} from "@un/react";
import React from "react";
import styles from "./contact.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons";

import Image from "next/image";

export default function Contact({
  background,
  className,
  storyClassName,
  image,
  children,
  kind,
}: any) {
  return (
    <div className={`${styles.contact} ${className}`}>
      <Wrapper className={styles.wrapper} pageWidth="md">
        <div className={styles.imageWrapper}>
          {image && (
            <Image
              className={`${styles.image} imageElement`}
              src={`https://res.cloudinary.com/di13i8ts4/image/upload/${image.filename}.png`}
              alt="Illumina Therapy"
              width={image.width}
              height={image.height}
            />
          )}
        </div>
        <div className={styles.textWrapper}>
          <Story className={`${styles.story} ${storyClassName}`}>
            {children}
          </Story>

          <div className={styles.form}>
            <TextInput labelText="Name" />
            <TextInput labelText="Email" />
            <TextInput labelText="Subject" />
            <TextArea labelText="How can I support you?" />
            <Button icon={<FontAwesomeIcon icon={faArrowRight} />}>
              Send message
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
