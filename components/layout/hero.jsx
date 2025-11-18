"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  ArrowRight,
  Box,
  Folder,
  FolderOpen,
  Power,
  Target,
} from "lucide-react";

import { Icons } from "@/constants/icons";

import {
  VerticalBorder,
  HorizontalBorder,
  LinePattern,
} from "@/components/ui/decoration";

import SpotlightBlur from "@/components/ui/spotlight-blur";

import { FloatingIconsHero } from "../floating-icons";
import { Button } from "@/components/ui/button";
import { ButtonLuxe } from "../ui/buttons/buttons.luxe/variants";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("hero");
  const [hovered, setHovered] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center py-20 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <VerticalBorder side="left" px={0} />
      <VerticalBorder side="right" px={0} />

      <FloatingIconsHero icons={Icons} />

      <div className="relative z-10 mx-auto w-full max-w-2xl">
        {/* Top pattern border */}
        <motion.div className="relative" variants={itemVariants}>
          <HorizontalBorder position="top" className="-left-[100vw]" />
          <LinePattern />
        </motion.div>

        <motion.div className="relative" variants={itemVariants}>
          <HorizontalBorder position="top" className="-left-[100vw]" />
          <HorizontalBorder position="bottom" className="-left-[100vw]" />

          <h1
            style={{ fontFamily: "var(--font-varien)" }}
            className="text-accent relative overflow-hidden text-5xl font-medium text-balance"
          >
            <SpotlightBlur
              color="var(--color-chart)"
              position="top-left"
              skew={12}
            />
            <SpotlightBlur
              color="var(--color-chart)"
              position="top-right"
              skew={-12}
            />

            <motion.span
              className="text-muted dark:text-accent relative mx-auto block max-w-2xl p-2 text-3xl font-medium tracking-tight md:text-6xl"
              variants={titleVariants}
            >
              {t("title")}
            </motion.span>
          </h1>
        </motion.div>

        {/* Bottom pattern border */}
        <motion.div className="relative" variants={itemVariants}>
          <HorizontalBorder position="bottom" className="-left-[100vw]" />
          <LinePattern />
        </motion.div>

        <motion.div className="relative p-2" variants={itemVariants}>
          <HorizontalBorder position="bottom" className="-left-[100vw]" />
          <motion.p
            className="text-muted dark:text-accent mt-4 mb-6 text-balance"
            variants={itemVariants}
          >
            {t("desc")}
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ButtonLuxe
            href={"/buttons/get-started"}
            variant="animated-border"
            className="-top-5 mx-auto cursor-pointer"
          >
            <Target size={16} />
            {t("cta")}
            <ArrowRight
              size={12}
              className="-rotate-45 transition group-hover:translate-x-0.5"
            />
          </ButtonLuxe>
        </motion.div>
      </div>
    </motion.section>
  );
}
