"use client";
import Layout from "@/components/Blog/Layout";
import HomepageIntro from "@/components/HomepageIntro";
import { UNCoreProvider, Wrapper } from "@un/react";
import React from "react";
import styles from "./content.module.scss";
import Home from "@/components/Home";

export default function Content({
  article,
  articles,
  children,
  options,
  font,
}: any) {
  console.log("Content: article", articles);
  return (
    <UNCoreProvider>
      <Layout options={options} font={font}>
        <Home article={article} />
      </Layout>
    </UNCoreProvider>
  );
}
