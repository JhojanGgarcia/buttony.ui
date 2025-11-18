import React from "react";

export const ButtonSlideUp = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-accent dark:border-accent/10 border-muted/10 text-muted relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium duration-500"
    >
      <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
        {children || text}
      </div>
      <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
        {children || text}
      </div>
    </button>
  );
};
