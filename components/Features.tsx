import { features } from "@/lib/site";

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Every step leaves something you can check.
        </h2>
        <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.index} className="border-t border-ink pt-5">
              <span className="font-mono text-sm text-signal-strong">{feature.index}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
