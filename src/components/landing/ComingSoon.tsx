import { Compass, Moon, Shuffle, Layers } from "lucide-react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

const ITEMS = [
  { icon: Compass, label: "星盘" },
  { icon: Moon, label: "星座" },
  { icon: Shuffle, label: "每日抽签" },
  { icon: Layers, label: "塔罗" },
] as const;

export function ComingSoon() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <FadeInWhenVisible>
          <h2 className="text-center text-lg font-medium tracking-wide text-muted-foreground">
            即将推出
          </h2>
        </FadeInWhenVisible>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ITEMS.map(({ icon: Icon, label }, i) => (
            <FadeInWhenVisible key={label} delay={i * 80}>
              <div
                className="flex flex-col items-center gap-2 rounded-lg border border-border py-6 text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:bg-muted/50 hover:text-foreground"
              >
                <Icon className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
                <span className="text-sm">{label}</span>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
