type Pillar = {
  title: string;
  focus: string;
  bullets: string[];
  cta?: string;
};

type PillarCardProps = {
  pillar: Pillar;
};

export function PillarCard({ pillar }: PillarCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-white/5 bg-night-500/80 p-6 shadow-lg transition hover:border-accent-400/70">
      <header className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
        <p className="text-sm uppercase tracking-[0.25em] text-accent-300">{pillar.focus}</p>
      </header>
      <ul className="flex flex-1 list-disc flex-col gap-2 pl-5 text-sm text-slate-200/90">
        {pillar.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {pillar.cta ? <p className="text-xs text-accent-300/80">{pillar.cta}</p> : null}
    </article>
  );
}
