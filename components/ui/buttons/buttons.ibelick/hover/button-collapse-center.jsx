import React from "react";

export const ButtonCollpaseCenter = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="group bg-chart/50 dark:text-accent text-muted dark:border-accent/10 border-muted/10 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium"
    >
      <span className="dark:bg-background bg-foreground absolute h-56 w-32 rounded-full transition-all duration-300 group-hover:h-0 group-hover:w-0" />
      <span className="relative">{children || text}</span>
    </button>
  );
};
