import { VerticalBorder } from "@/components/ui/decoration";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useState, useMemo, useCallback } from "react";

const ANIMATION_CONFIG = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

const GET_STARTED_SLUG = "get-started";

const ActiveIndicator = ({ layoutId }) => (
  <motion.div
    layoutId={layoutId}
    className="dark:border-accent/10 border-muted/10 bg-background/5 dark:bg-foreground/5 absolute inset-0 rounded-xl border mask-[linear-gradient(to_right,transparent,black_0%,black_15%,transparent)]"
    initial={false}
    transition={ANIMATION_CONFIG}
  />
);

const NavigationLink = ({ button, isActive, onLinkClick, isMobile }) => (
  <Link
    href={`/buttons/${button.slug}`}
    onClick={onLinkClick}
    className={`relative z-10 block rounded-xl px-3 py-1.5 text-sm transition-colors ${isActive
      ? "dark:text-accent text-muted"
      : "dark:text-accent/80 text-muted/80 hover:dark:text-accent hover:text-muted hover:mask-[linear-gradient(to_right,black_1%,transparent_95%)]"
      }`}
    aria-current={isActive ? "page" : undefined}
  >
    {button.name}
    {isActive && (
      <ActiveIndicator layoutId={isMobile ? "activeMobileButton" : "activeButton"} />
    )}
  </Link>
);

const CreatorHeader = ({ creator, isMobile, isExpanded, onToggle }) => {
  const headerClasses = "text-muted dark:text-accent mb-2 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase";

  if (isMobile) {
    return (
      <button
        onClick={onToggle}
        className={`${headerClasses} w-full justify-between text-left`}
      >
        {creator}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>
    );
  }

  return <h3 className={headerClasses}>{creator}</h3>;
};

const CreatorSection = ({ creator, buttons, buttonName, isMobile, isExpanded, onToggle, onLinkClick }) => (
  <li>
    <CreatorHeader
      creator={creator}
      isMobile={isMobile}
      isExpanded={isExpanded}
      onToggle={onToggle}
    />

    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.ul
          initial={isMobile ? { height: 0, opacity: 0 } : false}
          animate={{ height: "auto", opacity: 1 }}
          exit={isMobile ? { height: 0, opacity: 0 } : {}}
          transition={{ duration: 0.2 }}
          className="space-y-0.5 overflow-hidden"
        >
          {buttons.map((btn) => (
            <li key={btn.slug} className="relative">
              <NavigationLink
                button={btn}
                isActive={btn.name === buttonName}
                onLinkClick={onLinkClick}
                isMobile={isMobile}
              />
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </li>
);

const GetStartedSection = ({ button, buttonName, isMobile, onLinkClick }) => {
  if (!button) return null;

  return (
    <li className="pb-4 mb-4">
      <NavigationLink
        button={button}
        isActive={button.name === buttonName}
        onLinkClick={onLinkClick}
        isMobile={isMobile}
      />
    </li>
  );
};

const Sidebar = ({ buttonsByCreator, buttonName, isMobile = false, onClose }) => {
  const t = useTranslations();
  const [expandedCreators, setExpandedCreators] = useState({});

  const { getStartedButton, filteredCreators } = useMemo(() => {
    if (!buttonsByCreator || Object.keys(buttonsByCreator).length === 0) {
      return { getStartedButton: null, filteredCreators: {} };
    }

    const allButtons = Object.values(buttonsByCreator).flat();
    const getStarted = allButtons.find((btn) => btn.slug === GET_STARTED_SLUG);

    const filtered = Object.entries(buttonsByCreator).reduce((acc, [creator, buttons]) => {
      const filteredButtons = buttons.filter((btn) => btn.slug !== GET_STARTED_SLUG);
      if (filteredButtons.length > 0) {
        acc[creator] = filteredButtons;
      }
      return acc;
    }, {});

    return { getStartedButton: getStarted || null, filteredCreators: filtered };
  }, [buttonsByCreator]);

  const toggleCreator = useCallback((creator) => {
    setExpandedCreators((prev) => ({ ...prev, [creator]: !prev[creator] }));
  }, []);

  const handleLinkClick = useCallback(() => {
    if (isMobile && onClose) {
      onClose();
    }
  }, [isMobile, onClose]);

  if (Object.keys(filteredCreators).length === 0 && !getStartedButton) {
    return null;
  }

  return (
    <aside
      className={`relative ${isMobile ? "h-full w-full" : "w-64 shrink-0"} overflow-hidden ${isMobile ? "" : "px-4"}`}
      aria-label="Buttons navigation sidebar"
    >
      {!isMobile && (
        <>
          <VerticalBorder side="left" px={0} />
          <VerticalBorder side="right" px={0} />
        </>
      )}

      <nav
        className={`${isMobile ? "h-full p-4" : "absolute top-8 w-64"} flex flex-col ${isMobile ? "" : "h-[calc(100vh-0rem)]"}`}
        aria-label="Buttons by creator"
      >
        <div className="mb-6 flex shrink-0 items-center justify-between">
          <h2 className="text-xl font-bold">{t("sidebar.title")}</h2>
          {isMobile && onClose && (
            <button
              onClick={onClose}
              className="hover:bg-muted/10 dark:hover:bg-accent/10 rounded-lg p-2 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className={`flex-1 overflow-y-auto ${isMobile ? "" : "mask-[linear-gradient(to_bottom,transparent,black_0%,black_95%,transparent)]"} pr-2`}>
          <ul className="space-y-6 py-2">
            <GetStartedSection
              button={getStartedButton}
              buttonName={buttonName}
              isMobile={isMobile}
              onLinkClick={handleLinkClick}
            />

            {Object.entries(filteredCreators).map(([creator, buttons]) => (
              <CreatorSection
                key={creator}
                creator={creator}
                buttons={buttons}
                buttonName={buttonName}
                isMobile={isMobile}
                isExpanded={isMobile ? expandedCreators[creator] : true}
                onToggle={() => toggleCreator(creator)}
                onLinkClick={handleLinkClick}
              />
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;