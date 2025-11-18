import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import PageLayout from "@/layout/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const locale = router.locale || "en";
  const messages = pageProps.messages || {};

  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      onError={(error) => {
        // Silently handle missing messages and environment fallbacks
        if (
          error.code === "MISSING_MESSAGE" ||
          error.code === "ENVIRONMENT_FALLBACK"
        ) {
          return;
        }
        console.error("Intl error:", error);
      }}
      getMessageFallback={({ namespace, key, error }) => {
        // Return the key as fallback instead of throwing
        return `${namespace ? `${namespace}.` : ""}${key}`;
      }}
    >
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </NextIntlClientProvider>
  );
}
