import React from "react";

export const Button3d = ({ children, text, props }) => {
  return (
    <button
      {...props}
      className="group dark:border-accent/10 border-muted/10 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border bg-transparent px-6 font-medium text-neutral-600 [box-shadow:0px_4px_1px_#a3a3a3] transition-all active:translate-y-0 active:shadow-none"
    >
      {children || text}
    </button>
  );
};
