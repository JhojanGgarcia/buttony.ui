export const VerticalBorder = ({ side, px }) => (
  <div
    className={`absolute ${
      side === "left" ? `left-${px}` : `right-${px}`
    } bg-background/10 dark:bg-foreground/10 top-0 h-full w-px transition max-md:hidden`}
  />
);
