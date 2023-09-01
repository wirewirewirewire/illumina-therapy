"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faExternalLink,
  faFilm,
  faPhone,
} from "@fortawesome/pro-light-svg-icons";
import {
  faInstagram,
  faVimeo,
  faVimeoSquare,
} from "@fortawesome/free-brands-svg-icons";
import { MDXRemote } from "next-mdx-remote";

import { Button, Wrapper } from "@un/react";
import Image from "next/image";
import therapyForEveryone from "./therapy-for-everyone.png";

export default function Footer({ footer }: any) {
  return (
    <footer className={styles.footer}>
      <Wrapper className={styles.footerInside} pageWidth="lg">
        <ul className={styles.linkList}>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/services" legacyBehavior>
              <a>Services</a>
            </Link>
          </li>

          <li>
            <Link href="/lorem-ipsum" legacyBehavior>
              <a>Lorem Ipsum</a>
            </Link>
          </li>

          <li>
            <Link href="/lorem-ipsum" legacyBehavior>
              <Button>Contact</Button>
            </Link>
          </li>
        </ul>
        <div className={styles.madeIn}>
          <Image
            src={therapyForEveryone}
            alt="Therapy for Everyone"
            className={styles.infoIcon}
          />
          <p>© 2023 illumina therapy LLC All rights reserved.</p>
        </div>
        <div className={styles.footerInfo}>
          If you or someone you know is experiencing an emergency and needs
          immediate help, call 911, go to the nearest emergency room, or reach
          out to the{" "}
          <a
            href="https://www.multco.us/behavioral-health/mental-health-crisis-intervention"
            target="_blank"
          >
            Multnomah Crisis Line
          </a>
          .
        </div>
      </Wrapper>
    </footer>
  );
}
