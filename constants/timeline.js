import { Check } from "lucide-react";

export const DATA = (t) => [
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {t("timeline.versions.2024.v1_0_0.description")}
        </p>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {t("timeline.versions.2025.v1_1_0.description")}
        </p>

        <div className="dark:text-accent text-muted mb-8 flex flex-col space-y-2">
          {["tab1", "tab2", "tab3", "tab4", "tab5", "tab6", "tab7"].map(
            (tab) => (
              <div key={tab} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0" />
                <span>
                  {t(`timeline.versions.2025.v1_1_0.features.${tab}`)}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    ),
  },
];
