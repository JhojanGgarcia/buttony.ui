import { Box, Cpu, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Button3d } from "@/components/ui/buttons/buttons.ibelick/click/button-3d";
import { ButtonScaleIn } from "@/components/ui/buttons/buttons.ibelick/click/button-scalein";
import { ButtonScaleOut } from "@/components/ui/buttons/buttons.ibelick/click/button-scaleout";
import { ButtonStretchBelow } from "@/components/ui/buttons/buttons.ibelick/click/button-stretch-below";
import { ButtonStretchUp } from "@/components/ui/buttons/buttons.ibelick/click/button-stretch-up";
import { ButtonCollpaseCenter } from "@/components/ui/buttons/buttons.ibelick/hover/button-collapse-center";
import { ButtonExpandCenter } from "@/components/ui/buttons/buttons.ibelick/hover/button-expand-center";
import { ButtonExpandLeft } from "@/components/ui/buttons/buttons.ibelick/hover/button-expand-left";
import { ButtonExpandRight } from "@/components/ui/buttons/buttons.ibelick/hover/button-expand-right";
import { ButtonRing } from "@/components/ui/buttons/buttons.ibelick/hover/button-ring";
import { ButtonSlideLeft } from "@/components/ui/buttons/buttons.ibelick/hover/button-slide-left";
import { ButtonSlideUp } from "@/components/ui/buttons/buttons.ibelick/hover/button-slide-up";
import { ButtonTransform } from "@/components/ui/buttons/buttons.ibelick/hover/button-transform";
import { ButtonLuxe } from "@/components/ui/buttons/buttons.luxe/variants";

// Use avatars.githubusercontent.com to avoid third-party cookies
// GitHub avatars API uses 's' parameter for size (in pixels)
const getGitHubAvatar = (username, size = 40) =>
  `https://avatars.githubusercontent.com/${username}?s=${size}`;

const CREATORS = {
  buttony: {
    name: "buttony",
    github: "JhojanGgarcia",
    url: "https://github.com/JhojanGgarcia",
  },
  ibelick: {
    name: "buttons.ibelick",
    github: "ibelick",
    url: "https://github.com/ibelick",
    page: "https://buttons.ibelick.com/",
  },
  luxe: {
    name: "luxe",
    github: "guhrodrrigues",
    url: "https://github.com/guhrodrrigues",
    page: "https://www.luxeui.com/ui/button",
  },
};


const BUTTONY_BUTTONS = (click, t, isLoading, size) => [
  {
    name: t ? t("sidebar.buttons.buttony.glass") : "Glass",
    slug: "glass",
    category: "solid",
    button: (
      <Button
        icon={<Target size={12} />}
        isLoading={isLoading}
        size={size}
        text={click}
        variant="glass"
      />
    ),
    desc: t ? t("buttonsDescription.buttony.glass") : "",
    hasControls: true,
    code: `const SIZES = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
  xl: "px-8 py-4 text-lg",
};

export const Glass = ({
  icon,
  size = "md",
  text = "",
  className = "",
  children,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      disabled={isLoading}
      className={\`dark:text-white text-black dark:border-white/20 border-black/20 flex items-center gap-2 rounded-full border bg-white/10 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/10 dark:hover:bg-black/20 \${SIZES[size]} \${isLoading ? "pointer-events-none opacity-50" : ""} \${className}\`}
      {...props}
    >
      <span className="relative flex items-center gap-2">
        {isLoading ? <Loader2 size={16} className="animate-spin" /> : icon}
        {children || text}
      </span>
    </button>
  );
};`,
    demo: `import { Glass } from './Glass';
import { Heart, Star, Send, Loader2 } from 'lucide-react';

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Glass icon={<Heart size={16} />} text="Like" />
      <Glass icon={<Star size={16} />} size="sm">Small Button</Glass>
      <Glass icon={<Send size={18} />} size="lg">Large Button</Glass>
      <Glass icon={<Heart size={16} />} isLoading text="Loading..." />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.buttony.minimalist") : "Minimalist",
    slug: "minimalist",
    category: "solid",
    button: (
      <Button
        icon={<Cpu size={12} />}
        isLoading={isLoading}
        size={size}
        text={click}
        variant="minimalist"
      />
    ),
    desc: t ? t("buttonsDescription.buttony.minimalist") : "",
    hasControls: true,
    code: `const SIZES = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
  xl: "px-8 py-4 text-lg",
};

export const Minimalist = ({
  icon,
  size = "md",
  text = "",
  className = "",
  children,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      disabled={isLoading}
      className={\`group border-black/10 dark:border-white/10 dark:text-white text-black relative z-50 flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full border px-2 text-sm font-medium shadow-[inset_0_-9px_10px_-15px_rgb(0,0,0)] backdrop-blur-xs dark:shadow-[inset_0_-9px_10px_-15px_rgb(255,255,255)] transition-all \${SIZES[size]} \${isLoading ? "pointer-events-none opacity-50" : ""} \${className}\`}
      {...props}
    >
      <span className="relative flex items-center gap-2">
        {isLoading ? <Loader2 size={16} className="animate-spin" /> : icon}
        {children || text}
      </span>
    </button>
  );
};`,
    demo: `import { Minimalist } from './Minimalist';
import { Heart, Star, Send, Loader2 } from 'lucide-react';

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Minimalist icon={<Heart size={16} />} text="Like" />
      <Minimalist icon={<Star size={16} />} size="sm">Small Button</Minimalist>
      <Minimalist icon={<Send size={18} />} size="lg">Large Button</Minimalist>
      <Minimalist icon={<Heart size={16} />} isLoading text="Loading..." />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.buttony.simple") : "Simple",
    slug: "simple",
    category: "click",
    button: (
      <Button
        icon={<Box size={12} />}
        isLoading={isLoading}
        size={size}
        text={click}
        variant="simple"
      />
    ),
    desc: t ? t("buttonsDescription.buttony.simple") : "",
    hasControls: true,
    code: `const SIZES = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
  xl: "px-8 py-4 text-lg",
};

export const Simple = ({
  icon,
  size = "md",
  text = "",
  className = "",
  children,
  isLoading = false,
  isHighlight = false,
  ...props
}) => {
  return (
    <button
      disabled={isLoading}
      className={\`dark:bg-background bg-foreground/50 dark:border-white/10 border-black/10 dark:text-white text-black flex items-center gap-1 rounded-full border border-b shadow-[inset_0_-9px_10px_-15px_rgb(0,0,0)] backdrop-blur-xs transition-all hover:brightness-110 active:brightness-90 dark:shadow-[inset_0_-9px_10px_-15px_rgb(255,255,255)] \${SIZES[size]} \${isLoading ? "pointer-events-none opacity-50" : ""} \${className}\`}
      {...props}
    >
      {isHighlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[0.031em] left-1/2 h-px w-1/2 max-w-[1000px] -translate-x-1/4 -translate-y-1/2 bg-linear-to-l from-transparent via-black via-30% to-transparent opacity-45 dark:via-white"
        />
      )}
      <span className="relative flex items-center gap-2">
        {isLoading ? <Loader2 size={16} className="animate-spin" /> : icon}
        {children || text}
      </span>
    </button>
  );
};`,
    demo: `import { Simple } from './Simple';
import { Heart, Star, Send, Sparkles, Check, Loader2 } from 'lucide-react';

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Simple icon={<Heart />} text="Like" />
      <Simple icon={<Star />} size="sm">Small</Simple>
      <Simple icon={<Send />} size="lg">Large</Simple>
      <Simple icon={<Sparkles />} isHighlight text="Highlighted" />
      <Simple isLoading text="Loading..." />
      <Simple icon={<Check />} size="xl" isHighlight>Extra Large</Simple>
    </div>
  );
}`,
  },
];

const IBELICK_CLICK_BUTTONS = (click, t) => [
  {
    name: t ? t("sidebar.buttons.ibelick.scaleIn") : "Scale In",
    slug: "scale-in",
    button: <ButtonScaleIn text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.scaleIn") : "",
    code: `import React from "react";

export const ButtonScaleIn = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="dark:bg-background bg-foreground dark:text-white dark:border-white/10 border-black/10 text-black inline-flex h-12 items-center justify-center rounded-md border px-6 font-medium transition active:scale-110"
    >
      {children || text}
    </button>
  );
};`,
    demo: `import { ButtonScaleIn } from "./ButtonScaleIn";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonScaleIn text="Click Me" />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.ibelick.scaleOut") : "Scale Out",
    slug: "scale-out",
    button: <ButtonScaleOut text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.scaleOut") : "",
    code: `import React from "react";

export const ButtonScaleOut = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="dark:bg-background bg-foreground dark:text-white dark:border-white/10 border-black/10 text-black inline-flex h-12 items-center justify-center rounded-md border px-6 font-medium shadow-[inset] transition active:scale-95"
    >
      {children || text}
    </button>
  );
};`,
    demo: `import { ButtonScaleOut } from "./ButtonScaleOut";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonScaleOut text="Click Me" />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.ibelick.stretchUp") : "Stretch Up",
    slug: "stretch-up",
    button: <ButtonStretchUp text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.stretchUp") : "",
    code: `import React from "react";

export const ButtonStretchUp = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="dark:bg-background bg-foreground dark:text-white dark:border-white/10 border-black/10 text-black relative overflow-hidden rounded-md border px-5 py-2.5 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
    >
      {children || text}
    </button>
  );
};`,
    demo: `import { ButtonStretchUp } from "./ButtonStretchUp";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonStretchUp text="Click Me" />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.ibelick.stretchBelow") : "Stretch Below",
    slug: "stretch-below",
    button: <ButtonStretchBelow text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.stretchBelow") : "",
    code: `import React from "react";

export const ButtonStretchBelow = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="dark:bg-background bg-foreground dark:text-white dark:border-white/10 border-black/10 text-black relative overflow-hidden rounded-md border px-5 py-2.5 duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90"
    >
      {children || text}
    </button>
  );
};`,
    demo: `import { ButtonStretchBelow } from "./ButtonStretchBelow";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonStretchBelow text="Click Me" />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.ibelick.button3D") : "Button 3D",
    slug: "button-3d",
    button: <Button3d text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.button3D") : "",
    code: `import React from "react";

export const Button3d = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="group dark:border-white/10 border-black/10 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border bg-transparent px-6 font-medium text-neutral-600 [box-shadow:0px_4px_1px_#a3a3a3] transition-all active:translate-y-0 active:shadow-none"
    >
      {children || text}
    </button>
  );
};`,
    demo: `import { Button3d } from "./Button3d";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Button3d text="Click Me" />
    </div>
  );
}`,
  },
];

const IBELICK_HOVER_BUTTONS = (hover, t) => [
  {
    name: t ? t("sidebar.buttons.ibelick.slideLeft") : "Slide Left",
    slug: "slide-left",
    button: <ButtonSlideLeft text={hover} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.slideLeft") : "",
    code: `import React from "react";

export const ButtonSlideLeft = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-white dark:border-white/10 border-black/10 text-black relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium duration-500"
    >
      <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
        {children || text}
      </div>
      <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
        {children || text}
      </div>
    </button>
  );
};`,
    demo: `import { ButtonSlideLeft } from "./ButtonSlideLeft";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonSlideLeft text="Hover Me" />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.ibelick.slideUp") : "Slide Up",
    slug: "slide-up",
    button: <ButtonSlideUp text={hover} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.slideUp") : "",
    code: `import React from "react";

export const ButtonSlideUp = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-white dark:border-white/10 border-black/10 text-black relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium duration-500"
    >
      <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
        {children || text}
      </div>
      <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
        {children || text}
      </div>
    </button>
  );
};`,
    demo: `import { ButtonSlideUp } from "./ButtonSlideUp";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonSlideUp text="Hover Me" />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.ibelick.hoverTransform") : "Hover Transform",
    slug: "hover-transform",
    button: <ButtonTransform text={hover} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.hoverTransform") : "",
    code: `import React from "react";

export const ButtonTransform = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-white dark:border-white/10 border-black/10 text-black relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium"
    >
      <span>{children || text}</span>
      <div className="absolute inset-0 flex h-full w-full transform-[skew(-12deg)_translateX(-100%)] justify-center group-hover:transform-[skew(-12deg)_translateX(100%)] group-hover:duration-1000">
        <div className="dark:bg-white/20 bg-black/20 relative h-full w-8 blur-xl" />
      </div>
    </button>
  );
};`,
    demo: `import { ButtonTransform } from "./ButtonTransform";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonTransform text="Hover Me" />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.ibelick.hoverRing") : "Hover Ring",
    slug: "hover-ring",
    button: <ButtonRing text={hover} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.hoverRing") : "",
    code: `import React from "react";

export const ButtonRing = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="dark:bg-background bg-foreground dark:text-white dark:border-white/10 border-black/10 text-black hover:ring-black/10 dark:hover:ring-white/10 dark:hover:bg-white/5 hover:bg-black/10 relative h-12 overflow-hidden rounded border px-5 py-2.5 transition-all duration-300 hover:ring-1 hover:ring-offset-2"
    >
      <span className="relative">{children || text}</span>
    </button>
  );
};`,
    demo: `import { ButtonRing } from "./ButtonRing";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonRing text="Hover Me" />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.ibelick.buttonExpandCenter") : "Expand Center",
    slug: "button-expand-center",
    button: <ButtonExpandCenter text={hover} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.expandCenter") : "",
    code: `import React from "react";

export const ButtonExpandCenter = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-white text-black dark:border-white/10 border-black/10 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium"
    >
      <span className="bg-chart/50 absolute h-0 w-0 rounded-full transition-all duration-300 group-hover:h-56 group-hover:w-32" />
      <span className="relative">{children || text}</span>
    </button>
  );
};`,
    demo: `import { ButtonExpandCenter } from "./ButtonExpandCenter";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonExpandCenter text="Hover Me" />
    </div>
  );
}`,
  },
  {
    name: t
      ? t("sidebar.buttons.ibelick.buttonCollapseCenter")
      : "Collapse Center",
    slug: "button-collapse-center",
    button: <ButtonCollpaseCenter text={hover} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.collapseCenter") : "",
    code: `import React from "react";

export const ButtonCollpaseCenter = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="group bg-chart/50 dark:text-white text-black dark:border-white/10 border-black/10 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium"
    >
      <span className="dark:bg-background bg-foreground absolute h-56 w-32 rounded-full transition-all duration-300 group-hover:h-0 group-hover:w-0" />
      <span className="relative">{children || text}</span>
    </button>
  );
};`,
    demo: `import { ButtonCollpaseCenter } from "./ButtonCollpaseCenter";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonCollpaseCenter text="Hover Me" />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.ibelick.buttonExpandLeft") : "Expand Left",
    slug: "button-expand-left",
    button: <ButtonExpandLeft text={hover} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.expandLeft") : "",
    code: `import React from "react";

export const ButtonExpandLeft = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-white text-black dark:border-white/10 border-black/10 relative h-12 overflow-hidden overflow-x-hidden rounded-md border px-8 py-2"
    >
      <span className="relative z-10">{children || text}</span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="bg-chart/50 absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150" />
      </span>
    </button>
  );
};`,
    demo: `import { ButtonExpandLeft } from "./ButtonExpandLeft";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonExpandLeft text="Hover Me" />
    </div>
  );
}`,
  },
  {
    name: t ? t("sidebar.buttons.ibelick.buttonExpandRight") : "Expand Right",
    slug: "button-expand-right",
    button: <ButtonExpandRight text={hover} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.ibelick.expandRight") : "",
    code: `import React from "react";

export const ButtonExpandRight = ({ children, text, ...props }) => {
  return (
    <button
      {...props}
      className="group dark:bg-background bg-foreground dark:text-white text-black dark:border-white/10 border-black/10 relative h-12 overflow-hidden overflow-x-hidden rounded-md border px-8 py-2"
    >
      <span className="relative z-10">{children || text}</span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="bg-chart/50 absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
      </span>
    </button>
  );
};`,
    demo: `import { ButtonExpandRight } from "./ButtonExpandRight";

function Demo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonExpandRight text="Hover Me" />
    </div>
  );
}`,
  },
];

const LUXE_BUTTONS = (click, t) => [
  {
    name: t ? t("sidebar.buttons.luxe.shine") : "Shine",
    slug: "shine",
    button: <ButtonLuxe variant="shine" text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.luxe.shine") : "",
    code: `
export const ShineButton = ({ className = "", children, ...props }) => {
  return (
    <button
      {...props}
      className={\`animate-shine bg-foreground dark:bg-background border-black/10 dark:border-white/10 text-black dark:text-white items-center justify-center rounded-xl border bg-[linear-gradient(110deg,#ffff,45%,#303030,55%,#ffff)] bg-size-[400%_100%] px-4 py-2 transition-colors dark:bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)] \${className}\`}
    >
      {children}
    </button>
  );
};`,
    demo: `import { Button } from "@/components/ui/button"

export function ButtonShineExample() {
  return (
    <Button variant="shine">
      Button
    </Button>
  )
}`,
  },
  {
    name: t ? t("sidebar.buttons.luxe.animatedBorder") : "Animated Border",
    slug: "animated-border",
    button: <ButtonLuxe variant="animated-border" text={click} />,
    desc: t ? t("buttonsDescription.luxe.animatedBorder") : "",
    code: `
export const AnimatedBorderButton = ({ className = "", children, ...props }) => {
  return (
    <button
      {...props}
      className={\`bg-foreground dark:bg-background border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-main-foreground/40 relative rounded-xl border px-4 py-2 duration-200 \${className}\`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] border border-transparent 
                   mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] 
                   mask-intersect [mask-clip:padding-box,border-box]"
      >
        <motion.div
          className="absolute aspect-square bg-linear-to-r from-transparent via-neutral-300 to-neutral-400 
                     dark:from-transparent dark:via-neutral-600 dark:to-neutral-400"
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          style={{
            width: 20,
            offsetPath: \`rect(0 auto auto 0 round 20px)\`,
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "linear",
          }}
        />
      </div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};`,
    demo: `import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ButtonAnimatedBorderExample() {
  return (
    <Button variant="animated-border">
      Button
    </Button>
  )
}`,
  },
  {
    name: t ? t("sidebar.buttons.luxe.rotateBorder") : "Rotate Border",
    slug: "rotate-border",
    button: <ButtonLuxe variant="rotate-border" text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.luxe.rotateBorder") : "",
    code: `
export const RotateBorderButton = ({ className = "", children, ...props }) => {
  return (
    <button {...props} className="relative inline-flex overflow-hidden rounded-xl p-px">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#d4d4d4_50%,#414141_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
      <span
        className={\`bg-foreground dark:bg-background border-black/10 dark:border-white/10 text-black dark:text-white inline-flex size-full items-center justify-center rounded-[11px] border px-4 py-2 backdrop-blur-3xl \${className}\`}
      >
        {children}
      </span>
    </button>
  );
};`,
    demo: `import { Button } from "@/components/ui/button"

export function ButtonRotateBorderExample() {
  return (
    <Button variant="rotate-border">
      Button
    </Button>
  )
}`,
  },
  {
    name: t ? t("sidebar.buttons.luxe.glitchBrightness") : "Glitch Brightness",
    slug: "glitch-brightness",
    button: <ButtonLuxe variant="glitch-brightness" text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.luxe.glitchBrightness") : "",
    code: `
export const GlitchBrightnessButton = ({ className = "", children, ...props }) => {
  return (
    <button
      {...props}
      className={\`group dark:text-white dark:border-white/10 border-black/10 text-black dark:bg-background bg-foreground dark:hover:bg-background hover:bg-foreground relative overflow-hidden rounded-xl border px-4 py-2 duration-300 \${className}\`}
    >
      <div className="relative overflow-hidden">
        <span className="invisible">{children}</span>
        <span className="absolute top-0 left-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full hover:duration-300">
          {children}
        </span>
        <span className="absolute top-0 left-0 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:duration-300">
          {children}
        </span>
      </div>
      <div
        aria-hidden
        className="animate-brightness absolute inset-0 flex h-full w-full justify-center"
      >
        <div className="dark:bg-white/20 bg-black/40 relative h-full w-8 blur" />
      </div>
    </button>
  );
};`,
    demo: `import { Button } from "@/components/ui/button"

export function ButtonGlitchBrightnessExample() {
  return (
    <Button variant="glitch-brightness">
      Button
    </Button>
  )
}`,
  },
  {
    name: t ? t("sidebar.buttons.luxe.magnetic") : "Magnetic",
    slug: "magnetic",
    button: <ButtonLuxe variant="outline" isMagnetic text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.luxe.magnetic") : "",
    code: `import { useState, useRef } from "react";
import { motion } from "framer-motion";

export const MagneticButton = ({ className = "", children, ...props }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
    >
      <button
        {...props}
        className={\`bg-foreground dark:bg-background border-black/10 dark:border-white/10 text-black dark:text-white shadow-main-foreground/70 hover:bg-main-invert/90 dark:shadow-main-foreground/80 dark:hover:bg-main-foreground/56 relative overflow-hidden rounded-xl border px-4 py-2 shadow-inner transition-all duration-200 \${className}\`}
      >
        {children}
      </button>
    </motion.div>
  );
};`,
    demo: `import { Button } from "@/components/ui/button"

export function ButtonMagneticExample() {
  return (
    <Button variant="outline" isMagnetic>
      Button
    </Button>
  )
}`,
  },
  {
    name: t ? t("sidebar.buttons.luxe.outline") : "Outline",
    slug: "outline",
    button: <ButtonLuxe variant="outline" text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.luxe.outline") : "",
    code: `
export const OutlineButton = ({ className = "", children, ...props }) => {
  return (
    <button
      {...props}
      className={\`bg-foreground dark:bg-background border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-main-foreground/40 relative rounded-xl border px-4 py-2 transition-all duration-200 \${className}\`}
    >
      {children}
    </button>
  );
};`,
    demo: `import { Button } from "@/components/ui/button"

export function ButtonOutlineExample() {
  return (
    <Button variant="outline">
      Button
    </Button>
  )
}`,
  },
  {
    name: t ? t("sidebar.buttons.luxe.default") : "Default",
    slug: "default",
    button: <ButtonLuxe variant="default" text={click} />,
    thirdParty: true,
    desc: t ? t("buttonsDescription.luxe.default") : "",
    code: `
export const DefaultButton = ({ className = "", children, ...props }) => {
  return (
    <button
      {...props}
      className={\`bg-foreground dark:bg-background border-black/10 dark:border-white/10 text-black dark:text-white shadow-main-foreground/70 hover:bg-main-invert/90 dark:shadow-main-foreground/80 dark:hover:bg-main-foreground/56 relative overflow-hidden rounded-xl border px-4 py-2 shadow-inner transition-all duration-200 \${className}\`}
    >
      {children}
    </button>
  );
};`,
    demo: `import { Button } from "@/components/ui/button"

export function ButtonDefaultExample() {
  return (
    <Button variant="default">
      Button
    </Button>
  )
}`,
  },
];

const createButtonsList = (click, hover, t, isLoading, size) => {
  const buttonyButtons = BUTTONY_BUTTONS(click, t, isLoading, size).map(
    (btn) => ({
      ...btn,
      category: btn.category,
      creator: CREATORS.buttony.name,
      creatorGithub: CREATORS.buttony.github,
      creatorGithubUrl: CREATORS.buttony.url,
      page: null,
    }),
  );

  const ibelickClickButtons = IBELICK_CLICK_BUTTONS(click, t).map((btn) => ({
    ...btn,
    category: "click",
    creator: CREATORS.ibelick.name,
    creatorGithub: CREATORS.ibelick.github,
    creatorGithubUrl: CREATORS.ibelick.url,
    page: CREATORS.ibelick.page,
  }));

  const ibelickHoverButtons = IBELICK_HOVER_BUTTONS(hover, t).map((btn) => ({
    ...btn,
    category: "hover",
    creator: CREATORS.ibelick.name,
    creatorGithub: CREATORS.ibelick.github,
    creatorGithubUrl: CREATORS.ibelick.url,
    page: CREATORS.ibelick.page,
  }));

  const luxeButtons = LUXE_BUTTONS(click, t).map((btn) => ({
    ...btn,
    category: "click",
    creator: CREATORS.luxe.name,
    creatorGithub: CREATORS.luxe.github,
    creatorGithubUrl: CREATORS.luxe.url,
    page: CREATORS.luxe.page,
  }));

  return [
    ...buttonyButtons,
    ...ibelickClickButtons,
    ...ibelickHoverButtons,
    ...luxeButtons,
  ];
};

export const BUTTONS_CATALOG = (
  click = "Click me",
  hover = "Hover me",
  t,
  isLoading,
  size,
) => {
  const buttons = createButtonsList(click, hover, t, isLoading, size);
  return buttons.map((button, index) => ({
    ...button,
    id: index + 1,
    avatar: button.creatorGithub ? getGitHubAvatar(button.creatorGithub) : null,
  }));
};

export { getGitHubAvatar, CREATORS };
