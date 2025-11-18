import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "next-intl";

import BasePage from "@/layout/Page";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

import { withMessages } from "@/lib/with-messages";
import { ButtonLuxe } from "@/components/ui/buttons/buttons.luxe/variants";
import SpotlightBlur from "@/components/ui/spotlight-blur";

export default function NotFound() {
  const t = useTranslations("404");

  return (
    <React.Fragment>
      <Head>
        <title>404 ∙ Page Not Found</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
      </Head>

      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
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

        <div className="space-y-6">
          <h1 className="text-muted dark:text-accent text-6xl font-bold">
            404
          </h1>
          <h2 className="text-muted dark:text-accent text-2xl font-semibold">
            {t("title")}
          </h2>
          <p className="text-muted dark:text-accent max-w-md">{t("message")}</p>
          <Link href="/">
            <ButtonLuxe className="cursor-pointer" variant="animated-border">
              {t("backHome")}
            </ButtonLuxe>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export const getStaticProps = withMessages();
