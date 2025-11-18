export const LinePattern = ({ className }) => (
  <div
    className={`border-background/50 dark:border-foreground/50 h-4 w-full border-b bg-[repeating-linear-gradient(315deg,black_0,#fff_1px,transparent_0,transparent_50%)] bg-size-[6px_6px] bg-fixed opacity-5 dark:bg-[repeating-linear-gradient(315deg,white_0,#fff_1px,transparent_0,transparent_50%)] ${className}`}
  />
);
