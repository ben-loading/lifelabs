import { Sparkles } from "lucide-react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

const LIFECODE_URL =
  process.env.NEXT_PUBLIC_LIFECODE_URL ?? "#";

export function ProductCard() {
  return (
    <section className="px-6 py-16">
      <FadeInWhenVisible className="mx-auto max-w-md">
        <div
          className="group rounded-xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
        >
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:animate-sparkle" />
            <span className="font-medium tracking-wide">lifecode</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            从八字与紫微出发，在现代语境下重新认识自己
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <span className="text-xs text-muted-foreground">即将上线</span>
            <a
              href={LIFECODE_URL}
              className="flex h-11 w-full items-center justify-center rounded-lg bg-primary text-primary-foreground font-medium tracking-wider transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            >
              了解更多
            </a>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
