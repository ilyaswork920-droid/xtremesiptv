import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            404
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/">Back to Home</Button>
            <Button href="/blog" variant="secondary">
              Visit the Blog
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
