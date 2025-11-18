import React from "react";

export const ButtonSlideLeft = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-accent dark:border-accent/10 border-muted/10 text-muted relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium duration-500"
    >
      <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
        {children || text}
      </div>
      <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
        {children || text}
      </div>
    </button>
  );
};
