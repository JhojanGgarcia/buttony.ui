import React from "react";

export const ButtonScaleIn = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="dark:bg-background bg-foreground dark:text-accent dark:border-accent/10 border-muted/10 text-muted inline-flex h-12 items-center justify-center rounded-md border px-6 font-medium transition active:scale-110"
    >
      {children || text}
    </button>
  );
};
