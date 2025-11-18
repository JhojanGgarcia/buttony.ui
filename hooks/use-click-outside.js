"use client";

import { useEffect } from "react";

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    if (!ref || !handler) return;

    let isTouchMove = false;
    let touchStartX = 0;
    let touchStartY = 0;
    const threshold = 5;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isTouchMove = false;
    };

    const handleTouchMove = (e) => {
      if (!isTouchMove) {
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const deltaX = Math.abs(touchX - touchStartX);
        const deltaY = Math.abs(touchY - touchStartY);

        if (deltaX > threshold || deltaY > threshold) {
          isTouchMove = true;
        }
      }
    };

    const handleTouchEnd = (e) => {
      if (!isTouchMove && handleClickOutside(e)) {
        setTimeout(() => {
          handler(e);
        }, 10);
      }
    };

    const handleClickOutside = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return false;
      }
      return true;
    };

    const handleMouseDown = (e) => {
      if (handleClickOutside(e)) {
        setTimeout(() => {
          handler(e);
        }, 10);
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [ref, handler]);
};

export default useClickOutside;
