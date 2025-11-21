"use client";

import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    // set valeur initiale
    setIsMobile(mediaQuery.matches);

    // callback quand ça change
    const handler = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // écoute le changement
    mediaQuery.addEventListener("change", handler);

    // clean listener
    return () => mediaQuery.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}
