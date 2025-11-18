import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Languages } from "lucide-react";
import useClickOutside from "@/hooks/use-click-outside";
import { LANGUAGES } from "@/constants/languages";

export function LanguageSelector({ currentLocale, onLanguageChange }) {
  const [selected, setSelected] = useState(
    LANGUAGES.find((l) => l.code === currentLocale),
  );
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setOpen(false));

  useEffect(() => {
    const lang = LANGUAGES.find((l) => l.code === currentLocale);
    if (lang) setSelected(lang);
  }, [currentLocale]);

  const handleSelect = (lang) => {
    setSelected(lang);
    onLanguageChange(lang.code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="dark:border-accent/10 border-muted/10 relative flex h-8 w-8 items-center justify-center rounded-r-full border backdrop-blur-xl outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Languages size={14} className="dark:text-accent/50 text-muted/50" />
      </button>

      {open && (
        <div className="border-muted/10 bg-foreground dark:bg-background dark:border-accent/10 animate-in fade-in-0 zoom-in-95 absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-2xl border shadow-lg backdrop-blur-xl">
          <div className="max-h-80 overflow-y-auto">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className="hover:bg-muted/5 dark:hover:bg-accent/5 flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors"
              >
                <span className="text-muted dark:text-accent">{lang.flag}</span>
                <span className="text-muted dark:text-accent flex-1">
                  {lang.label}
                </span>
                {selected.code === lang.code && (
                  <Check className="text-muted dark:text-accent h-4 w-4" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
