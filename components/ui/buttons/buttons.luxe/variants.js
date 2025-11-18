"use client";

import { useRef, useState } from "react";

import { motion } from "framer-motion";
import * as Slot from "@radix-ui/react-slot";
import Link from "next/link";

const variants = [
  {
    variant: "default",
    component: ({ className, children, text, ...props }) => (
      <button
        {...props}
        className={`bg-foreground dark:bg-background border-muted/10 dark:border-accent/10 text-muted dark:text-accent shadow-main-foreground/70 hover:bg-main-invert/90 dark:shadow-main-foreground/80 dark:hover:bg-main-foreground/56 relative overflow-hidden rounded-xl border px-4 py-2 shadow-inner transition-all duration-200 ${className}`}
      >
        {children || text}
      </button>
    ),
  },
  {
    variant: "outline",
    component: ({ className, children, text, ...props }) => (
      <button
        {...props}
        className={`bg-foreground dark:bg-background border-muted/10 dark:border-accent/10 text-muted dark:text-accent hover:bg-main-foreground/40 relative rounded-xl border px-4 py-2 transition-all duration-200 ${className}`}
      >
        {children || text}
      </button>
    ),
  },
  {
    variant: "success",
    component: ({ className, children, text, ...props }) => (
      <button
        {...props}
        className={`bg-foreground dark:bg-background border-muted/10 dark:border-accent/10 text-muted dark:text-accent rounded-xl border bg-linear-to-t from-green-700 to-green-600 px-4 py-2 ${className}`}
      >
        {children || text}
      </button>
    ),
  },
  {
    variant: "destructive",
    component: ({ className, children, text, ...props }) => (
      <button
        {...props}
        className={`bg-foreground dark:bg-background border-muted/10 dark:border-accent/10 text-muted dark:text-accent rounded-xl border bg-linear-to-t from-red-600 to-red-500 px-4 py-2 ${className}`}
      >
        {children || text}
      </button>
    ),
  },
  {
    variant: "shine",
    component: ({ className, children, text, ...props }) => (
      <button
        {...props}
        className={`animate-shine bg-foreground dark:bg-background border-muted/10 dark:border-accent/10 text-muted dark:text-accent items-center justify-center rounded-xl border bg-[linear-gradient(110deg,#ffff,45%,#303030,55%,#ffff)] bg-size-[400%_100%] px-4 py-2 transition-colors dark:bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)] ${className}`}
      >
        {children || text}
      </button>
    ),
  },
  {
    variant: "animated-border",
    component: ({ children, className, text, ...props }) => (
      <button
        {...props}
        className={`bg-foreground dark:bg-background border-muted/10 dark:border-accent/10 text-muted dark:text-accent hover:bg-main-foreground/40 relative rounded-xl border px-4 py-2 duration-200 ${className}`}
      >
        <div className="pointer-events-none absolute -inset-px rounded-[inherit] border border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]">
          <motion.div
            className="absolute aspect-square bg-linear-to-r from-transparent via-neutral-300 to-neutral-400 dark:from-transparent dark:via-neutral-600 dark:to-neutral-400"
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            style={{
              width: 20,
              offsetPath: `rect(0 auto auto 0 round ${20}px)`,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "linear",
            }}
          />
        </div>
        <span className="relative z-10 flex items-center justify-center gap-1">
          {children || text}
        </span>
      </button>
    ),
  },
  {
    variant: "rotate-border",
    component: ({ children, className, text, ...props }) => (
      <button
        {...props}
        className="relative inline-flex overflow-hidden rounded-xl p-px"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#d4d4d4_50%,#414141_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
        <span
          className={`bg-foreground dark:bg-background border-muted/10 dark:border-accent/10 text-muted dark:text-accent inline-flex size-full items-center justify-center rounded-[11px] border px-4 py-2 backdrop-blur-3xl ${className}`}
        >
          {children || text}
        </span>
      </button>
    ),
  },
  {
    variant: "glitch-brightness",
    component: ({ children, className, text, ...props }) => {
      return (
        <button
          {...props}
          className={`group dark:text-accent dark:border-accent/10 border-muted/10 text-muted dark:bg-background bg-foreground dark:hover:bg-background hover:bg-foreground relative overflow-hidden rounded-xl border px-4 py-2 duration-300 ${className}`}
        >
          <TextGlitch>{children || text}</TextGlitch>
          <Brightness />
        </button>
      );

      function TextGlitch({ children }) {
        return (
          <div className="relative overflow-hidden">
            <span className="invisible">{children}</span>
            <span className="absolute top-0 left-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full hover:duration-300">
              {children}
            </span>
            <span className="absolute top-0 left-0 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:duration-300">
              {children}
            </span>
          </div>
        );
      }

      function Brightness() {
        return (
          <div
            aria-hidden
            className="animate-brightness absolute inset-0 flex h-full w-full justify-center"
          >
            <div className="dark:bg-accent/20 bg-muted/40 relative h-full w-8 blur" />
          </div>
        );
      }
    },
  },
];

// components/ui/buttons/buttons.luxe/variants.js
// Modifica la función ButtonLuxe para aceptar href

export function ButtonLuxe({
  variant = "default",
  text,
  children,
  isMagnetic = false,
  href, // Nueva prop
  className,
  ...props
}) {
  const FALLBACK_INDEX = 0;

  const variantComponent = variants.find(
    (v) => v.variant === variant,
  )?.component;

  const Component = variantComponent || variants[FALLBACK_INDEX].component;

  // Si hay href, renderizar como Link, sino como button
  const buttonContent = href ? (
    <Link href={href} className="inline-block">
      <Slot.Root className="text-sm font-medium">
        <Component {...props} className={className} text={text}>
          {children}
        </Component>
      </Slot.Root>
    </Link>
  ) : (
    <Slot.Root className="text-sm font-medium">
      <Component {...props} className={className} text={text}>
        {children}
      </Component>
    </Slot.Root>
  );


  return buttonContent;
}

function useMagnetic() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX, y: middleY });
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  const { x, y } = position;

  return { ref, handleMouseMove, handleMouseLeave, x, y };
}
