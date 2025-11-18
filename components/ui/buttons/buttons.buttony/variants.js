export const BUTTON_VARIANTS = {
  glass: {
    button:
      "backdrop-blur-md  bg-white/10 dark:bg-black/10 dark:text-accent text-muted border dark:border-accent/20 border-muted/20 dark:border-white/10 rounded-full flex items-center gap-2 shadow-lg hover:bg-white/20 dark:hover:bg-black/20 transition-all",
  },
  minimalist: {
    button:
      "group border-muted/10 dark:border-accent/10 dark:text-accent text-muted relative z-50 flex w-fit  items-center justify-center gap-2 overflow-hidden rounded-full border text-sm font-medium shadow-[inset_0_-9px_10px_-15px_var(--color-muted)] backdrop-blur-xs dark:shadow-[inset_0_-9px_10px_-15px_var(--color-accent)] transition-all",
  },
  simple: {
    button:
      "dark:bg-background bg-foreground/50 dark:border-accent/10 border-muted/10 dark:text-accent text-muted flex  items-center gap-1 rounded-full border border-b-1 shadow-[inset_0_-9px_10px_-15px_var(--color-muted)] backdrop-blur-xs  hover:brightness-110 active:brightness-90 dark:shadow-[inset_0_-9px_10px_-15px_var(--color-accent)] transition-all",
    highlight: true,
  },
};
