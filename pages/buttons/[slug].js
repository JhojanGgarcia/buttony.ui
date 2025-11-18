import Head from "next/head";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { CircleEllipsis, Eye, Code, Info } from "lucide-react";

import { BUTTONS_CATALOG } from "@/constants/buttons-catalog";
import { routing } from "@/i18n/routing";

import Section from "@/components/buttons/section";
import dynamic from "next/dynamic";
import Sidebar from "@/components/buttons/sidebar";

const CodeBlock = dynamic(() => import("@/components/buttons/code-block"), {
  ssr: false,
  loading: () => (
    <div className="dark:border-accent/10 border-muted/10 bg-background/5 dark:bg-foreground/5 relative z-0 mx-auto flex w-full flex-col items-center rounded-3xl border p-4 backdrop-blur-sm">
      <div className="bg-muted/10 dark:bg-accent/10 h-32 w-full animate-pulse rounded-lg" />
    </div>
  ),
});

import CopyToClipboard from "@/components/ui/copy-to-clipboard";
import useClickOutside from "@/hooks/use-click-outside";

import { ButtonDetails } from "@/components/buttons/button-details";
import { generateComponentName } from "@/helpers/generate-component-name";
import { generateImportPath } from "@/helpers/generate-import-path";
import { getCopyText } from "@/helpers/get-copy-text";
import { withMessages } from "@/lib/with-messages";
import { LinePattern } from "@/components/ui/decoration";
import SpotlightBlur from "@/components/ui/spotlight-blur";
import GetStarted from "@/components/buttons/get-started";

generateComponentName;
generateImportPath;

const groupButtonsByCreator = (buttons) =>
  buttons.reduce((acc, btn) => {
    (acc[btn.creator] ??= []).push(btn);
    return acc;
  }, {});

export default function ButtonDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const t = useTranslations();

  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState("md");
  const [toolOpen, setToolOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");
  const dropdownRef = useRef(null);

  const clickText = t("buttons.action");
  const hoverText = t("buttons.hover");

  const buttons = useMemo(
    () => BUTTONS_CATALOG(clickText, hoverText, t, isLoading, size),
    [clickText, hoverText, t, isLoading, size],
  );

  // Add get-started as a special button for sidebar
  const buttonsWithGetStarted = useMemo(() => [
    {
      name: "Get Started",
      slug: "get-started",
      creator: "buttony",
      creatorGithub: "JhojanGgarcia",
      creatorGithubUrl: "https://github.com/JhojanGgarcia",
      category: "introduction",
      id: 0,
    },
    ...buttons,
  ], [buttons]);

  const decodedSlug = slug ? decodeURIComponent(slug) : null;
  const button = useMemo(
    () => decodedSlug && buttonsWithGetStarted.find((btn) => btn.slug === decodedSlug),
    [decodedSlug, buttonsWithGetStarted],
  );

  const buttonsByCreator = useMemo(
    () => groupButtonsByCreator(buttonsWithGetStarted),
    [buttonsWithGetStarted],
  );

  const toggleState = (setter) => setter((prev) => !prev);

  useClickOutside(dropdownRef, () => setToolOpen(false));

  if (button && button.slug === "get-started") {
    return (
      <>
        <Head>
          <title>{`Buttony ∙ Get Started`}</title>
          <meta
            name="description"
            content="Welcome to Buttony - Discover amazing button components with smooth animations and modern designs."
          />
        </Head>

        <div className="dark:border-accent/10 border-muted/10 dark:bg-background bg-foreground relative h-screen overflow-hidden border-x">
          <div className="flex h-full">
            {/* Sidebar (Desktop) */}
            <div className="hidden md:flex">
              <Sidebar
                buttonsByCreator={buttonsByCreator}
                buttonName="Get Started"
                creatorImage={null}
              />
            </div>

            {/* Main Content */}
            <main className="mx-auto flex w-full flex-1 overflow-x-hidden overflow-y-auto py-16">
              <GetStarted />
            </main>
          </div>
        </div>
      </>
    );
  }

  if (!button)
    return <div className="text-muted dark:text-white">Loading...</div>;

  return (
    <>
      <Head>
        <title>{`Buttony ∙ ${button.slug}`}</title>
        <meta
          name="description"
          content={`Explore the ${button.name} button component by ${button.creator} on Zerios.`}
        />
      </Head>

      <div className="dark:border-accent/10 border-muted/10 dark:bg-background bg-foreground relative h-screen overflow-hidden border-x">
        <div className="flex h-full">
          {/* Sidebar (Desktop) */}
          <div className="hidden md:flex">
            <Sidebar
              buttonsByCreator={buttonsByCreator}
              creatorImage={button.creatorGithub}
              buttonName={button.name}
            />
          </div>

          {/* Main Content */}
          <main className="mx-auto flex w-full flex-1 overflow-x-hidden overflow-y-auto py-16">
            <div className="relative mx-auto w-full max-w-4xl flex-col space-y-2 px-2">
              {/* Preview + Code Section */}
              <Section spotlight title={t("sections.preview.title")}>
                <ButtonDetails button={button} />

                {/* Tabs */}
                <div className="border-muted/10 dark:border-accent/10 mb-4 flex gap-2 border-b">
                  {[
                    {
                      id: "preview",
                      label: t("sections.preview.title"),
                      icon: Eye,
                    },
                    {
                      id: "code",
                      label: t("sections.preview.tabDemo"),
                      icon: Code,
                    },
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={`group flex items-center justify-center px-4 py-2 text-sm font-medium transition-all ${
                        activeTab === id
                          ? "dark:border-foreground dark:text-accent text-muted border-b-2"
                          : "text-muted dark:text-accent hover:text-muted/70 dark:hover:text-accent/70"
                      }`}
                    >
                      <Icon size={14} className="group-hover:text-chart mr-2" />{" "}
                      {label}
                    </button>
                  ))}
                </div>

                {/* Animated Tabs Content */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    {activeTab === "preview" ? (
                      <motion.div
                        key="preview"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="border-muted/10 dark:border-accent/10 relative flex min-h-[180px] flex-col items-center justify-center rounded-3xl border sm:min-h-[200px] md:min-h-60"
                      >
                        <div className="py-8">{button.button}</div>

                        {button.hasControls && (
                          <div
                            ref={dropdownRef}
                            className="absolute top-3 right-3"
                          >
                            <button
                              aria-label="tools menu"
                              onClick={() => toggleState(setToolOpen)}
                              className="dark:border-accent/10 border-muted/10 dark:bg-background/90 bg-foreground/90 text-muted dark:text-accent hover:bg-background/10 dark:hover:bg-foreground/10 rounded-full border p-1.5 backdrop-blur-sm transition"
                            >
                              <CircleEllipsis
                                className="opacity-70"
                                size={16}
                              />
                            </button>

                            <AnimatePresence>
                              {toolOpen && (
                                <motion.div
                                  key="dropdown"
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="dark:border-accent/10 border-muted/10 absolute top-12 right-2 z-10 w-56 overflow-hidden rounded-3xl border backdrop-blur-xs"
                                >
                                  {/* Loading Toggle */}
                                  <div className="hover:bg-muted/20 dark:hover:bg-accent/5 flex items-center justify-between px-4 py-3">
                                    <span className="text-sm font-medium">
                                      Loading State
                                    </span>
                                    <button
                                      onClick={() => toggleState(setIsLoading)}
                                      className={`relative inline-flex h-5 w-9 items-center rounded-full border transition-all ${
                                        isLoading
                                          ? "bg-green-500/40"
                                          : "bg-red-500/40"
                                      }`}
                                    >
                                      <span
                                        className={`bg-background dark:bg-foreground inline-block h-3.5 w-3.5 transform rounded-full shadow transition-transform ${
                                          isLoading
                                            ? "translate-x-[18px]"
                                            : "translate-x-0.5"
                                        }`}
                                      />
                                    </button>
                                  </div>

                                  <div className="dark:border-accent/10 border-muted/10 border-t" />

                                  {/* Size Selector */}
                                  <div className="p-4">
                                    <span className="mb-3 block text-sm font-medium">
                                      Button Size
                                    </span>
                                    <div className="flex gap-2">
                                      {["xs", "sm", "md", "lg", "xl"].map(
                                        (s) => (
                                          <button
                                            key={s}
                                            onClick={() => setSize(s)}
                                            className={`flex-1 rounded-lg py-2 text-xs font-semibold uppercase transition-all ${
                                              size === s
                                                ? "dark:border-accent/20 bg-muted/20 dark:bg-accent/20 text-muted dark:text-accent border shadow-sm"
                                                : "text-muted dark:text-accent/80 hover:text-foreground dark:hover:text-accent dark:border-accent/10 border-muted/10 hover:bg-muted/30 dark:hover:bg-accent/10 border"
                                            }`}
                                          >
                                            {s}
                                          </button>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="code"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="relative"
                      >
                        <CodeBlock
                          filename={`./${button.slug}.jsx`}
                          code={button.demo}
                          language="javascript"
                        />
                        <CopyToClipboard
                          className="absolute top-3 right-3"
                          text={getCopyText(button, "demo")}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Section>

              {/* Explanation Section */}
              <Section title={t("sections.explanation")}>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-muted dark:text-accent/90 text-sm leading-relaxed sm:text-base"
                >
                  {button.desc}
                </motion.p>
              </Section>

              {/* Code Section */}
              <Section title={t("sections.code")}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <CodeBlock
                    filename={`./${button.slug}.jsx`}
                    code={button.code}
                    language="javascript"
                  />
                  <CopyToClipboard
                    className="absolute top-3 right-3"
                    text={getCopyText(button, "code")}
                  />
                </motion.div>
              </Section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

// Static paths - optimized hybrid strategy
// Only pre-generate most important pages at build time, rest generated on-demand
export async function getStaticPaths() {
  const buttons = BUTTONS_CATALOG("Click me", "Hover me");

  // Define which buttons to pre-generate (most popular/important ones)
  // You can adjust this list based on your analytics or preferences
  const importantSlugs = [
    "get-started",
    "glass",
    "minimalist",
    "simple",
    "button-3d",
    "scale-in",
    "scale-out",
    "slide-left",
    "slide-up",
    "shine",
    "magnetic",
    "animated-border",
    "rotate-border",
    "hover-transform",
    "button-expand-center",
  ];

  // Only pre-generate important buttons for all locales
  // This reduces build time from ~46s to ~5-10s
  const importantButtons = buttons.filter((btn) =>
    importantSlugs.includes(btn.slug),
  );

  const paths = importantButtons.flatMap(({ slug }) =>
    routing.locales.map((locale) => ({
      params: { slug },
      locale,
    })),
  );

  // Use 'blocking' fallback: remaining pages generated on first request
  // This dramatically speeds up build time while still generating all pages
  return {
    paths,
    fallback: "blocking",
  };
}

// Enhanced getStaticProps with ISR (Incremental Static Regeneration)
export const getStaticProps = withMessages(async (context) => {
  // Add revalidation for ISR - pages regenerate every 24 hours
  // This ensures content stays fresh without full rebuilds
  return {
    revalidate: 86400, // 24 hours in seconds
  };
});
