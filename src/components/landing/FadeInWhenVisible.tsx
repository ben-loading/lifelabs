"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Delay before playing animation (e.g. stagger) */
  delay?: number;
  /** Offset from viewport bottom to trigger (px) */
  rootMargin?: string;
};

export function FadeInWhenVisible({
  children,
  className = "",
  delay = 0,
  rootMargin = "0px 0px -8% 0px",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          timeoutId = setTimeout(() => setVisible(true), delay);
      },
      { threshold: 0.05, rootMargin }
    );
    observer.observe(el);
    return () => {
      if (timeoutId != null) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [delay, rootMargin]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
