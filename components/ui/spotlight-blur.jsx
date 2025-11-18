import React from "react";

export default function SpotlightBlur({
  color,
  position = "top-left",
  blur = "2xl",
  width = "200px",
  height = "1500px",
  skew = 12,
  opacity = 100,
  className = "",
}) {
  const positions = {
    left: "left-0",
    right: "right-0",
    "top-left": "-top-82 -left-42",
    "top-right": "-top-82 -right-42",
    "bottom-left": "-bottom-82 -left-42",
    "bottom-right": "-bottom-82 -right-42",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-center": "-top-82 left-1/2 -translate-x-1/2",
    "bottom-center": "-bottom-82 left-1/2 -translate-x-1/2",
  };

  const blurClasses = {
    sm: "blur-sm",
    md: "blur-md",
    lg: "blur-lg",
    xl: "blur-xl",
    "2xl": "blur-2xl",
    "3xl": "blur-3xl",
  };

  const skewClass =
    skew > 0
      ? `skew-x-${Math.abs(skew)}`
      : skew < 0
        ? `-skew-x-${Math.abs(skew)}`
        : "";

  return (
    <div
      className={`bg-background dark:bg-foreground absolute rounded-full ${
        positions[position] || positions["top-left"]
      } ${blurClasses[blur]} ${skewClass} ${className}`}
      style={{
        background: color,
        width: width,
        height: height,
        opacity: opacity / 100,
        transform: `skewX(${skew}deg)`,
      }}
    />
  );
}
