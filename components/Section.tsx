import { ReactNode } from "react";
import classNames from "classnames";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={classNames(
        "relative rounded-3xl border border-white/5 bg-night-700/60 p-8 shadow-glow backdrop-blur transition hover:border-accent-400/60",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-2">
          {eyebrow ? (
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-300">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
        </header>
        <div className="space-y-4 text-sm leading-relaxed text-slate-200/90 md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
