import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80dvh] flex-col justify-center pt-24">
      <p className="font-mono text-xs text-signal">ERR 404 · ROUTE_NOT_FOUND</p>
      <h1 className="mt-4 font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.92] tracking-tight">
        This endpoint <span className="text-muted-foreground italic">doesn’t exist.</span>
      </h1>
      <pre className="mt-8 max-w-xl overflow-x-auto rounded-xl border border-border bg-card p-4 font-mono text-xs text-muted-foreground">
        {`$ curl -I ${"{this-page}"}\nHTTP/2 404\nx-suggestion: try the homepage`}
      </pre>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </section>
  );
}
