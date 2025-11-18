"use client";

import React from "react";

import SpotlightBlur from "../ui/spotlight-blur";

import { useTranslations } from "next-intl";
import PreviewButtons from "./preview";

export default function Features() {
  const t = useTranslations("features");
  return (
    <section className="bg-foreground dark:bg-background">
      <div className="dark:border-accent/10 border-muted/10 relative container mx-auto overflow-hidden border-x px-4 py-12">
        <SpotlightBlur
          color="var(--color-chart)"
          position="top-right"
          skew={-12}
          opacity={50}
        />
        <SpotlightBlur
          color="var(--color-chart)"
          position="top-left"
          skew={12}
          opacity={50}
        />
        <div className="relative grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"></div>

        {/* Section Footer Heading */}
        <div className="mt-6 ml-auto max-w-2xl px-4 text-right">
          <h2
            style={{ fontFamily: "var(--font-varien)" }}
            className="text-muted dark:text-accent mb-4 text-4xl font-bold md:text-6xl"
          >
            {t("title")}
          </h2>
        </div>
        <PreviewButtons />
      </div>
    </section>
  );
}
