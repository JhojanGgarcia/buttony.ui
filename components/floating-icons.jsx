"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Icon = ({ mouseX, mouseY, iconData, index }) => {
  const ref = React.useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 22 });
  const springY = useSpring(y, { stiffness: 300, damping: 22 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = mouseX.current - centerX;
      const dy = mouseY.current - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        const force = (1 - distance / 150) * 50;
        const angle = Math.atan2(dy, dx);
        x.set(-Math.cos(angle) * force);
        y.set(-Math.sin(angle) * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute ${iconData.className}`}
    >
      <motion.div
        className="dark:border-accent/10 border-muted/15 bg-background/5 relative z-9999 flex h-16 w-16 items-center justify-center rounded-3xl border p-3 shadow-2xl backdrop-blur-xs md:h-20 md:w-20"
        animate={{
          y: [0, -6, 0, 6, 0],
          x: [0, 4, 0, -4, 0],
          rotate: [0, 4, 0, -4, 0],
        }}
        transition={{
          duration: 6 + Math.random() * 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <iconData.icon className="h-8 w-8 md:h-10 md:w-10" />
      </motion.div>
    </motion.div>
  );
};

export const FloatingIconsHero = ({ className = "", icons = [], ...props }) => {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = React.useCallback((event) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className={`pointer-events-none absolute inset-0 z-9998 flex h-full w-full items-center justify-center overflow-hidden ${className}`}
      {...props}
    >
      <div className="absolute inset-0 z-9998 flex h-full w-full items-center justify-center">
        {icons.map((iconData, index) => (
          <Icon
            key={iconData.id}
            mouseX={mouseX}
            mouseY={mouseY}
            iconData={iconData}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
