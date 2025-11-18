import React from "react";

export const ButtonTransform = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-accent dark:border-accent/10 border-muted/10 text-muted relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium"
    >
      <span>{children || text}</span>
      <div className="absolute inset-0 flex h-full w-full transform-[skew(-12deg)_translateX(-100%)] justify-center group-hover:transform-[skew(-12deg)_translateX(100%)] group-hover:duration-1000">
        <div className="dark:bg-accent/20 bg-muted/20 relative h-full w-8 blur-xl" />
      </div>
    </button>
  );
};
