import { DATA } from "@/constants/timeline";
import { useTranslations } from "next-intl";
import SpotlightBlur from "./ui/spotlight-blur";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Timeline = () => {
  const t = useTranslations("get-started");
  const [openItems, setOpenItems] = useState({});
  const data = DATA(t);

  const toggleOpen = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="w-full relative overflow-hidden  border-l border-r dark:border-accent/10 border-muted/10 md:px-10">


      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        <h2 style={{ fontFamily: "var(--font-varien)" }} className="relative text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          {t("timeline.title")}
        </h2>
        <p className="relative text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          {t("timeline.description")}
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:gap-10 mb-6">
            {/* Año - Clickeable */}
            <div className="flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="hidden h-10 absolute left-3 md:left-3 w-10 rounded-full backdrop-blur-3xl border dark:border-accent/10 border-muted/10 md:flex items-center justify-center">
                <div className="h-4 w-4 rounded-full dark:bg-accent/10 bg-muted/10 p-2" />
              </div>

              <button
                onClick={() => toggleOpen(index)}
                className="relative items-center gap-2 cursor-pointer flex text-xl md:pl-20 md:text-5xl font-bold dark:text-accent text-muted hover:opacity-70 transition-opacity w-full"
              >
                <span className="md:hidden block text-2xl">{item.title}</span>
                <span className="hidden md:block">{item.title}</span>
                <ChevronDown
                  className={`h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 ${openItems[index] ? "rotate-180" : ""}`}
                />
              </button>
            </div>


            <div
              className={`relative pr-12 pl-4 md:pl-20 w-full overflow-hidden transition-all duration-500 ease-in-out ${openItems[index]
                ? "max-h-[2000px] opacity-100 mt-4 md:mt-0"
                : "max-h-0 opacity-0"
                }`}
            >
              <div className="pb-8 md:pb-12">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};