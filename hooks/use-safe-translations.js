import { useTranslations } from "next-intl";

export function useSafeTranslations(namespace = "") {
  try {
    return useTranslations(namespace);
  } catch (error) {
    console.warn("Intl context not available, using fallbacks");
    return (key) => {
      // Fallbacks básicos
      const fallbacks = {
        "hero.title": "Animated Buttons for your next projects.",
        "hero.desc": "Discover our collection of animated buttons...",
        "hero.cta": "Explore Buttons",
        "features.title": "Built for performance. Designed for flexibility.",
        "features.desc": "Buttony UI gives you the tools...",
        "buttons.action": "Action",
        "buttons.hover": "Hover",
        "header.nav.getStarted": "Get Started",
        "header.nav.components": "Components",
        "header.nav.updates": "Updates"
      };
      return fallbacks[key] || key;
    };
  }
}

