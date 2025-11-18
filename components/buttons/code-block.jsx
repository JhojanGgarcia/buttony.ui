"use client";

// Importación optimizada - usar importación por defecto de Prism
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { useEffect, useState } from "react";

const darkTheme = {
  comment: { color: "#6b7280", fontStyle: "italic" },
  punctuation: { color: "#096ec0" },
  property: { color: "#ffffff" },
  keyword: { color: "#d4d4d4" },
};

const lightTheme = {
  comment: { color: "#6b7280", fontStyle: "italic" },
  punctuation: { color: "#096ec0" },
  property: { color: "#111827" },
  keyword: { color: "#374151" },
};
export default function CodeBlock({
  code,
  language = "css",
  filename,
  children,
}) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkDarkMode = () => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDark(darkMode);
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  const theme = isDark ? darkTheme : lightTheme;
  return (
    <div className="dark:border-accent/10 border-muted/10 bg-background/5 dark:bg-foreground/5 relative z-0 mx-auto flex w-full flex-col items-center rounded-3xl border p-4 backdrop-blur-3xl">
      <div className="relative w-full overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={theme}
          customStyle={{
            background: "transparent",
            fontSize: "0.8rem",
            padding: "0.75rem 1rem",
            width: "100%",
            boxSizing: "border-box",
          }}
          lineNumberStyle={{
            minWidth: "2.5em",
            paddingRight: "0.75em",
            color: isDark ? "#52525b" : "#9ca3af",
            textAlign: "right",
            userSelect: "none",
            fontSize: "0.625rem",
          }}
          PreTag="div"
          showLineNumbers
          showInlineLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
