import { ArrowRight } from "lucide-react";

const LIFECODE_URL = process.env.NEXT_PUBLIC_LIFECODE_URL ?? "#";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Gradient orbs (v0-style background) */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full opacity-80 blur-3xl"
        style={{
          background: "var(--gradient-orb-1)",
          animation: "blob-float 12s ease-in-out infinite",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 rounded-full opacity-80 blur-3xl"
        style={{
          background: "var(--gradient-orb-2)",
          animation: "blob-float 14s ease-in-out infinite reverse",
        }}
        aria-hidden
      />

      <div className="relative z-10">
        <span
          className="initial-invisible animate-fade-in-up inline-block rounded-full border border-border bg-muted/80 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-sm"
          style={{ animationFillMode: "forwards" }}
        >
          人生 · 玄学 · 科技
        </span>
        <h1
          className="initial-invisible animate-fade-in-up stagger-1 mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          style={{ animationFillMode: "forwards" }}
        >
          Life Labs
        </h1>
        <p
          className="initial-invisible animate-fade-in-up stagger-2 mx-auto mt-5 max-w-md text-base text-muted-foreground sm:text-lg"
          style={{ animationFillMode: "forwards" }}
        >
          以古典智慧与现代常识，陪伴你探索自我、看见可能
        </p>
        <div
          className="initial-invisible animate-fade-in-up stagger-3 mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationFillMode: "forwards" }}
        >
          <a
            href={LIFECODE_URL}
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-medium text-primary-foreground shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:shadow-[var(--glow)] active:scale-[0.98]"
          >
            了解更多
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#philosophy"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-background/80 px-6 font-medium backdrop-blur-sm transition-colors hover:bg-muted/50"
          >
            我们的理念
          </a>
        </div>
      </div>
    </section>
  );
}
