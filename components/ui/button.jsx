import { Loader2 } from "lucide-react";
import { BUTTON_VARIANTS } from "@/components/ui/buttons/buttons.buttony/variants";

const SIZES = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
  xl: "px-8 py-4 text-lg",
};

export const Button = ({
  variant = "simple",
  icon,
  size = "md",
  text,
  className = "",
  children,
  isLoading = false,
  ...props
}) => {
  const config = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.simple;

  const content = (
    <>
      {isLoading ? <Loader2 size={12} className="animate-spin" /> : icon}
      {children || text}
    </>
  );

  const buttonElement = (
    <button
      disabled={isLoading}
      className={`${config.button} ${SIZES[size]} ${isLoading ? "pointer-events-none opacity-50" : ""} ${className}`}
      {...props}
    >
      {config.highlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[0.031em] left-1/2 h-px w-1/2 max-w-[1000px] -translate-x-1/4 -translate-y-1/2 bg-linear-to-l from-transparent via-(--color-muted) via-30% to-transparent opacity-45 dark:via-(--color-accent)"
        />
      )}

      {config.inner ? (
        <div className={config.inner}>{content}</div>
      ) : (
        <span className="relative flex items-center gap-2">{content}</span>
      )}
    </button>
  );

  return config.wrapper ? (
    <div className={config.wrapper}>{buttonElement}</div>
  ) : (
    buttonElement
  );
};
