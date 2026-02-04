import { FadeInWhenVisible } from "./FadeInWhenVisible";

const LIFECODE_URL =
  process.env.NEXT_PUBLIC_LIFECODE_URL ?? "#";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-8">
      <FadeInWhenVisible className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center text-sm text-muted-foreground">
        <nav className="flex gap-6">
          <a
            href={LIFECODE_URL}
            className="transition-all duration-200 hover:opacity-80 hover:underline"
          >
            lifecode
          </a>
        </nav>
        <p>© {year} Life Labs</p>
      </FadeInWhenVisible>
    </footer>
  );
}
