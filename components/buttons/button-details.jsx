import Badge from "@/components/ui/badge";
import { HorizontalBorder, VerticalBorder } from "@/components/ui/decoration";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const ButtonDetails = ({ button }) => {
  const [loaded, setLoaded] = useState(false);
  if (!button) return null;

  return (
    <header className="relative flex items-start gap-2 p-3 sm:gap-3 sm:p-4">
      {button.avatar && (
        <div className="relative shrink-0">
          <AvatarWithSkeleton src={button.avatar} alt={button.creator} />
        </div>
      )}

      <div className="relative min-w-0 flex-1">
        <div>
          <h1
            style={{ fontFamily: "var(--font-varien)" }}
            className="dark:text-accent text-muted mb-0.5 truncate text-base font-medium sm:mb-1 sm:text-lg md:text-xl"
          >
            {button.name}
          </h1>

          {button.page ? (
            <Link
              href={button.page}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group z-50 inline-flex items-center gap-1 text-xs font-medium text-black transition-colors hover:text-black/90 sm:text-sm md:text-base dark:text-white dark:hover:text-white/90"
            >
              <span className="truncate">{button.creator}</span>
              <ArrowUpRight className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 sm:h-4 sm:w-4" />
            </Link>
          ) : (
            <span className="block truncate text-xs font-medium text-black sm:text-sm md:text-base dark:text-white">
              {button.creator}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default ButtonDetails;

function AvatarWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-8 w-8">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse rounded-full bg-gray-300/60 dark:bg-gray-700/50" />
      )}

      {src && (
        <Image
          src={src}
          alt={`${alt} avatar`}
          width={32}
          height={32}
          className={`border-muted/10 dark:border-accent/10 rounded-full border object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          // Habilitar optimización para mejor caché
          priority={false}
        />
      )}
    </div>
  );
}
