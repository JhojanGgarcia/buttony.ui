import React from "react";

export const ButtonExpandRight = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-accent text-muted dark:border-accent/10 border-muted/10 relative h-12 overflow-hidden overflow-x-hidden rounded-md border px-8 py-2"
    >
      <span className="relative z-10">{children || text}</span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="bg-chart/50 absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
      </span>
    </button>
  );
};
