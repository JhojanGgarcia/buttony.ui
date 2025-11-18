import React from "react";

export const ButtonRing = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="dark:bg-background bg-foreground dark:text-accent dark:border-accent/10 border-muted/10 text-muted hover:ring-muted/10 dark:hover:ring-accent/10 dark:hover:bg-accent/5 hover:bg-muted/10 relative h-12 overflow-hidden rounded border px-5 py-2.5 transition-all duration-300 hover:ring-1 hover:ring-offset-2"
    >
      <span className="relative">{children || text}</span>
    </button>
  );
};
