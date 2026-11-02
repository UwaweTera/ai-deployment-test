import { pipelineSteps, site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 lg:pt-28 lg:pb-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <p className="font-mono text-sm text-signal-strong">Automated deployment test</p>
          <h1 className="mt-5 text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            From empty folder to live URL.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{site.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#features"
              className="rounded-full bg-ink px-6 py-3 text-center font-medium text-paper transition-opacity hover:opacity-80"
            >
              See what it covers
            </a>
            <a
              href={site.repoUrl}
              className="rounded-full border border-line px-6 py-3 text-center font-medium transition-colors hover:bg-ink/5"
            >
              Read the source
            </a>
          </div>
        </div>

        <div id="pipeline" className="scroll-mt-24 rounded-2xl bg-ink p-6 text-paper sm:p-8">
          <h2 className="font-mono text-sm text-paper/60">The pipeline</h2>
          <ol className="mt-6">
            {pipelineSteps.map((step, index) => (
              <li key={step.label} className="group flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-signal font-mono text-xs font-semibold text-ink">
                    {index + 1}
                  </span>
                  {index < pipelineSteps.length - 1 && (
                    <span aria-hidden className="w-px flex-1 bg-paper/20" />
                  )}
                </div>
                <div className="pb-6 group-last:pb-0">
                  <p className="leading-7 font-medium">{step.label}</p>
                  <p className="text-sm text-paper/60">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
