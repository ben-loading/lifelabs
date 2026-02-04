import { Quote } from "lucide-react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

export function Philosophy() {
  return (
    <section id="philosophy" className="px-6 py-20">
      <FadeInWhenVisible className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-border bg-muted/30 p-8 shadow-sm backdrop-blur-sm sm:p-10">
          <Quote className="mx-auto mb-4 h-8 w-8 text-primary/60" aria-hidden />
          <h2 className="text-center text-xl font-semibold tracking-wide text-foreground sm:text-2xl">
            古典玄学 · 现代常识 · 人生艺术
          </h2>
          <p className="mt-5 text-center leading-relaxed text-muted-foreground">
            我们相信，古老的智慧与当代的理性并非对立。在这里，玄学是认识自我的艺术——帮助你了解自己、趋吉避凶，而不是迷信。我们用现代语境重新诠释传统，让每一次探索都成为与自己的对话。
          </p>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
