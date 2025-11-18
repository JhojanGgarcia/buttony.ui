import React from "react";

export const ButtonScaleOut = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="dark:bg-background bg-foreground dark:text-accent dark:border-accent/10 border-muted/10 text-muted darl inline-flex h-12 items-center justify-center rounded-md border px-6 font-medium shadow-[inset] transition active:scale-95"
    >
      {children || text}
    </button>
  );
};
