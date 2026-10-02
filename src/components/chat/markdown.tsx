import Link from "next/link";
import { Fragment } from "react";

/**
 * Tiny markdown renderer for chat answers: paragraphs, "- " lists,
 * **bold**, `code` and [links](url). Output is React nodes — no innerHTML.
 */
export function Markdown({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);

  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="my-3 space-y-1.5 pl-1">
              {lines.map((line, j) => (
                <li key={j} className="relative pl-5 before:absolute before:top-[0.7em] before:left-0.5 before:h-px before:w-2.5 before:bg-subtle-foreground">
                  {inline(line.slice(2))}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="my-3 first:mt-0 last:mb-0">
            {lines.map((line, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {inline(line)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

function inline(text: string) {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em]">
          {part.slice(1, -1)}
        </code>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const cls = "text-foreground underline decoration-signal/60 underline-offset-4 hover:decoration-signal";
      return href.startsWith("/") ? (
        <Link key={i} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noreferrer" className={cls}>
          {label}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
