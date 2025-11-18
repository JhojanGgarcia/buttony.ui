import { HorizontalBorder, VerticalBorder } from "@/components/ui/decoration";
import SpotlightBlur from "@/components/ui/spotlight-blur";

const Section = ({ children, title }) => (
  <section className="dark:text-accent/80 text-muted/80 3xl:max-w-4xl relative block w-full max-w-xs p-2 text-left sm:max-w-sm sm:p-4 md:max-w-md md:p-6 lg:max-w-lg lg:p-8 xl:max-w-2xl xl:p-10 2xl:max-w-3xl 2xl:p-12">
    {title && (
      <h2 className="mb-4 text-lg font-semibold sm:text-xl md:text-2xl">
        {title}
      </h2>
    )}

    {children}
  </section>
);

export default Section;
