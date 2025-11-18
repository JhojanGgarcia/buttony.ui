"use client";

import React, { useMemo, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { BUTTONS_CATALOG } from "@/constants/buttons-catalog";
import Badge from "./badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { LinePattern } from "./decoration";

export default function Card() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const currentLocale = router.locale || "en";

  const t = useTranslations("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const clickText = t("buttons.action");
  const hoverText = t("buttons.hover");

  const buttonsList = useMemo(
    () => BUTTONS_CATALOG(clickText, hoverText, t),
    [clickText, hoverText, t],
  );

  if (!mounted) {
    return null;
  }

  return (
    <>
      {buttonsList.map((btn, index) => (
        <CardItem
          key={btn.id}
          btn={btn}
          index={index}
          router={router}
          currentLocale={currentLocale}
        />
      ))}
    </>
  );
}

function CardItem({ btn, index, router, currentLocale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: 0.3,
  });

  const handleClick = () => {
    router.push(`/buttons/${btn.slug}`, undefined, {
      locale: currentLocale,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
          filter: "blur(8px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.6,
            delay: index * 0.05,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className="border-muted/10 dark:border-accent/10 dark:hover:border-accent/20 hover:border-muted/20 relative h-[200px] w-[250px] overflow-hidden rounded-3xl border border-dashed backdrop-blur-xl transition-all hover:shadow-lg"
    >
      <button
        type="button"
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={`View ${btn.name} button by ${btn.creator}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <span className="sr-only">View {btn.name} button</span>
      </button>
      <LinePattern className="absolute h-full w-full" />

      {/* Header con info del botón */}
      <div className="absolute top-1 right-1 left-1 z-20 flex h-12 items-start gap-1">
        <Link
          href={btn.creatorGithubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-12 w-12 shrink-0 items-center justify-center"
          onClick={(e) => e.stopPropagation()}
          aria-label={`View ${btn.creator}'s GitHub profile`}
        >
          <AvatarWithSkeleton src={btn.avatar} alt={btn.creator} />
        </Link>

        <div className="flex min-w-0 flex-1 flex-col justify-center py-1.5 pr-4">
          {btn.page ? (
            <Link
              href={btn.page}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group flex w-full items-start justify-start gap-1 overflow-hidden text-[13px] leading-[18px] font-medium text-ellipsis whitespace-nowrap text-black transition-colors hover:text-black/90 dark:text-white dark:hover:text-white/90"
              aria-label={`Visit ${btn.creator}'s website`}
            >
              {btn.creator}
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ) : (
            <span className="flex w-full items-start justify-start gap-1 overflow-hidden text-[13px] leading-[18px] font-medium text-ellipsis whitespace-nowrap text-black dark:text-white">
              {btn.creator}
            </span>
          )}
          <div className="flex items-start gap-1.5 text-[13px] leading-[18px] font-normal text-black/70 dark:text-white/70">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              {btn.name} {"∙"} <Badge text={btn.category} /> {"∙"} {btn.id}
            </p>
          </div>
        </div>
      </div>

      {/* Preview del botón */}
      <div
        aria-label="Button preview"
        className="border-muted/10 dark:border-accent/10 absolute top-14 right-1 bottom-1 left-1 flex items-center justify-center overflow-hidden rounded-3xl border focus:outline-none focus-visible:outline-none"
      >
        <div className="bg-foreground dark:bg-background absolute inset-0 flex h-full w-full items-center justify-center">
          {btn.button}
        </div>
      </div>
    </motion.article>
  );
}

function AvatarWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-8 w-8">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse rounded-full bg-gray-300/60 dark:bg-gray-700/50" />
      )}

      {src && (
        <Image
          src={src}
          alt={`${alt} avatar`}
          width={32}
          height={32}
          className={`border-muted/10 dark:border-accent/10 rounded-full border object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          // Habilitar optimización para mejor caché
          priority={false}
        />
      )}
    </div>
  );
}
