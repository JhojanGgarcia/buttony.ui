import React from "react";
import Head from "next/head";

import BasePage from "@/layout/Page";
import HeroSection from "@/components/layout/hero";
import Features from "@/components/layout/features";

import { withMessages } from "@/lib/with-messages";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Buttony</title>
        <meta
          name="description"
          content="Discover our collection of animated buttons, perfect for adding a dynamic touch to your web projects"
        />
      </Head>
      <BasePage>
        <HeroSection />
        <Features />
      </BasePage>
    </React.Fragment>
  );
}

export const getStaticProps = withMessages();
