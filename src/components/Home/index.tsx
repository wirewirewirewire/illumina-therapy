import { Story, Link, Wrapper, List, ListItem, Button } from "@un/react";
import React from "react";
import styles from "./home.module.scss";
import image from "./_Illumina-home-expertise-half_column 2.png";
import imageHands from "./hands.png";
import imageWomenSittingLegs from "./women-sitting-legs.png";
import Image from "next/image";
import Hero from "../Hero";
import Section from "../Section";
import ListWrapper from "../List";
import Contact from "../Contact";
import welcome from "./welcome.png";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons";
import { MDXRemote } from "next-mdx-remote";
import components from "../Blog/Mdx";
import Double from "../Double";

export default function Home({ article }: any) {
  console.log("article", article);
  return (
    <>
      {article.layout.map((layout: any, i: number) => {
        if (layout.blockType === "hero") {
          return (
            <Hero
              key={i}
              background={layout.mediaBlockBackgroundColor}
              image={...layout.media}
              {...layout}
            />
          );
        } else if (layout.blockType === "section") {
          return (
            <Section
              key={i}
              background={layout.mediaBlockBackgroundColor}
              image={...layout.media}
              {...layout}
            >
              <MDXRemote {...layout.mdx} components={components} />
            </Section>
          );
        } else if (layout.blockType === "list") {
          return <ListWrapper key={i} {...layout} />;
        } else if (layout.blockType === "contact") {
          return (
            <Contact
              key={i}
              kind={layout.kind}
              background={layout.mediaBlockBackgroundColor}
              image={...layout.media}
            >
              <MDXRemote {...layout.mdx} components={components} />
            </Contact>
          );
        } else if (layout.blockType === "double") {
          return (
            <Double
              key={i}
              background={layout.mediaBlockBackgroundColor}
              image={...layout.media}
              {...layout}
            ></Double>
          );
        }

        return <div key={i}>{layout.blockType}</div>;
      })}
      {/* <Section className={styles.hero} kind="center" background>
        <div className={styles.heroImage}>
          <Image
            src={welcome}
            priority
            placeholder="blur"
            alt="Welcome to Illumina therapy"
          />
        </div>
      </Section>

      <Section className={styles.intro} kind="center">
        <h2>Modern Therapy for Mental Well-Being</h2>
        <p>
          Through collaboration, creativity and compassion, we’ll develop a
          realistic plan to support you in feeling more at peace within yourself
          and more confident and fulfilled in your choices and relationships.
        </p>
        <NextLink href="/contact">
          <Button icon={<FontAwesomeIcon icon={faArrowRight} />}>
            Contact
          </Button>
        </NextLink>
      </Section>
      <Section kind="center" className={styles.twoImagesWrapper}>
        <div className={styles.twoImages}>
          <div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.areasOfExpertiseImage}
                src={imageWomenSittingLegs}
                alt="Picture of the author"
              />
            </div>
            <h3>Approach & Background</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              dolor et jomen bin sulamen dat moman nonumy eirmod.
            </p>
            <Link href="./services-and-rates">Learn more</Link>
          </div>
          <div className={styles.areasOfExpertise}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.areasOfExpertiseImage}
                src={imageHands}
                alt="Picture of the author"
              />
            </div>
            <h3>Areas of expertice</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              dolor et jomen bin sulamen dat moman nonumy eirmod.
            </p>
            <Link href="./services-and-rates">Learn more</Link>
          </div>
        </div>
    </Section>*/}
    </>
  );
}
