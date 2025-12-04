export type Play = {
  title: string;
  goal: string;
  steps: string[];
  track: "Fast Track" | "Quality Track" | "Stability Track";
  tools: string[];
};

type PlayCardProps = {
  play: Play;
};

const trackColors: Record<Play["track"], string> = {
  "Fast Track": "bg-emerald-500/15 text-emerald-200 border border-emerald-400/40",
  "Quality Track": "bg-accent-500/10 text-accent-200 border border-accent-400/40",
  "Stability Track": "bg-sky-500/10 text-sky-200 border border-sky-400/40"
};

export function PlayCard({ play }: PlayCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-white/5 bg-night-500/80 p-6 shadow-lg transition hover:border-accent-400/70">
      <header className="flex flex-col gap-2">
        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${trackColors[play.track]}`}>
          <span className="font-semibold uppercase tracking-wide">{play.track}</span>
        </div>
        <h3 className="text-lg font-semibold text-white">{play.title}</h3>
        <p className="text-sm text-slate-300">{play.goal}</p>
      </header>
      <ul className="list-decimal space-y-2 pl-5 text-sm text-slate-200/90">
        {play.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
      <footer className="mt-auto pt-4 text-xs text-slate-400">
        Toolkit: <span className="text-slate-200">{play.tools.join(" • ")}</span>
      </footer>
    </article>
  );
}
