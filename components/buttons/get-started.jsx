"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Target, Sparkles, Zap, Palette, Code } from "lucide-react";

import { BUTTONS_CATALOG } from "@/constants/buttons-catalog";
import Section from "@/components/buttons/section";
import { Timeline } from "../timeline";
import { DATA } from "@/constants/timeline";
import SpotlightBlur from "../ui/spotlight-blur";
import { HorizontalBorder } from "../ui/decoration";


const GetStarted = () => {
  const t = useTranslations("get-started");

  const featuredButtons = BUTTONS_CATALOG("Get Started", "Explore", t).slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };



  return (
    <motion.div
      className="relative mx-auto w-full max-w-4xl flex-col space-y-8 px-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >

      <Section title={t("welcome.title")}>
        <motion.div variants={itemVariants} className="text-left">
          <h1 style={{ fontFamily: "var(--font-varien)" }} className="text-4xl font-bold dark:text-accent text-muted text-balance md:text-5xl">
            {t("welcome.subtitle")}.
          </h1>
          <p className="mt-4 text-lg text-muted dark:text-accent/80">
            {t("welcome.description")}
          </p>
        </motion.div>
      </Section>

      <div className="relative top-0 left-0 max-w-xs  text-left sm:max-w-sm md:max-w-md lg:max-w-lg  xl:max-w-2xl 2xl:max-w-3xl ">
        <HorizontalBorder position="top" className="-left-[100vw]" />
        <Timeline data={DATA} />

      </div>




    </motion.div>
  );
};

export default GetStarted;