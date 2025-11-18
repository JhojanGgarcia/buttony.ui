import React from "react";

export const ButtonExpandCenter = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-accent text-muted dark:border-accent/10 border-muted/10 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium"
    >
      <span className="bg-chart/50 absolute h-0 w-0 rounded-full transition-all duration-300 group-hover:h-56 group-hover:w-32" />
      <span className="relative">{children || text}</span>
    </button>
  );
};
