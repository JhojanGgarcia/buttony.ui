export const HorizontalBorder = ({
  position = "top",
  className = "",
  children,
}) => (
  <div
    className={`absolute ${position}-0 bg-background/10 dark:bg-foreground/10 h-px w-[200vw] ${className}`}
    aria-hidden="true"
  >
    {children}
  </div>
);
