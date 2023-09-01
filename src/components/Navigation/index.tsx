"use client";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import {
  Button,
  MainNavigation,
  MainNavigationItem,
  BannerNavigation,
  Link,
  SubNavigation,
  SubNavigationItem,
  SubNavigationHeader,
  SubNavigationContent,
  SubNavigationList,
  SubNavigationGroup,
  SubNavigationTitle,
  User,
} from "@un/react";
import { MDXRemote } from "next-mdx-remote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/pro-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/pro-light-svg-icons";
import { faRocketLaunch } from "@fortawesome/pro-solid-svg-icons";
import logo from "./logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import TriggerMenu from "./TriggerMenu";

const MobileButton = ({ toggleMenu, openMobileMenu }: any) => {
  return (
    <Button
      className={styles.mobileButton}
      onClick={toggleMenu}
      icon={
        openMobileMenu ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )
      }
    />
  );
};

export default function Navigation({ children, options }: any) {
  return (
    <>
      <MainNavigation
        logo={
          <NextLink href="./" legacyBehavior>
            <a>
              <Image
                alt="illumina therapy"
                src={logo}
                className={styles.logo}
              />
            </a>
          </NextLink>
        }
        components={{ MobileButton }}
        className={styles.mainNavigation}
        pageWidth="full"
      >
        <TriggerMenu />

        <div className={styles.centerMenu}>
          {options?.navItems?.map((item: any) => {
            return (
              <MainNavigationItem key={item.link.reference.value.slug}>
                <NextLink href={`/${item.link.reference.value.slug}`}>
                  {item.link.label}
                </NextLink>
              </MainNavigationItem>
            );
          })}
        </div>
        <MainNavigationItem>
          <NextLink href="/contact" legacyBehavior>
            <Button href="/contact" className={styles.contactButton}>
              Contact
            </Button>
          </NextLink>
        </MainNavigationItem>

        {/*navigation && (
            <div className={styles.navigationCenter}>
              <MDXRemote {...navigation} components={componentsNavigation} />
            </div>
          )*/}
      </MainNavigation>
    </>
  );
}
