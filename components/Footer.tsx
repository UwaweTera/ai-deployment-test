import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{site.name} is a demo project built to test a deployment workflow.</p>
        <a href={site.repoUrl} className="transition-colors hover:text-ink">
          Source on GitHub
        </a>
      </div>
    </footer>
  );
}
