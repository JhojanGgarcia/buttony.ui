import React from "react";

export const ButtonStretchUp = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="dark:bg-background bg-foreground dark:text-accent dark:border-accent/10 border-muted/10 text-muted relative overflow-hidden rounded-md border px-5 py-2.5 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
    >
      {children || text}
    </button>
  );
};
