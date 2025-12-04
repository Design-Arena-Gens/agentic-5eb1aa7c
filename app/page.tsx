import { PillarCard } from "@/components/PillarCard";
import { PlayCard, type Play } from "@/components/PlayCard";
import { Section } from "@/components/Section";

const pillars = [
  {
    title: "1. Consistency Is Hard",
    focus: "Hybrid discipline",
    bullets: [
      "Always flag AI image consistency as probabilistic—no model delivers perfect continuity alone.",
      "Stage reference boards and anchor frames before generating so every prompt has a visual north star.",
      "Pair ControlNet, IP-Adapter, or reference-only passes with manual paint-overs for hero shots.",
      "Designate a ‘continuity marshal’ to log prompt seeds, sampler settings, and manual tweaks."
    ],
    cta: "Document every deviation. Aim for believable continuity, not pixel-perfect clones."
  },
  {
    title: "2. Time Is Precious",
    focus: "Prioritize what ships",
    bullets: [
      "Tag each scene as must-have, negotiable, or cuttable before crisis hits.",
      "Maintain parallel Fast vs. Quality track pipelines so you can pivot without retooling.",
      "Batch prompts by lighting/setup to reduce context switching—especially for reruns.",
      "Set a hard stop for perfection passes to prevent the tail (polish) from eating the schedule."
    ],
    cta: "When the clock is brutal, protect story-critical shots and trim transitional fluff."
  },
  {
    title: "3. Free Tools First",
    focus: "Budget-aware resilience",
    bullets: [
      "Default to free or OSS tools (ComfyUI, Fooocus, Krita) and document upgrade paths if they choke.",
      "Track free-tier quotas and create rotation plans before hitting limits; swap accounts in waves.",
      "Use bridge scripts to shuttle outputs across platforms so you can pivot tools midstream.",
      "Only escalate to paid add-ons (Kaiber, Runway, Pika) after exhausting layered free tactics."
    ],
    cta: "Paid tools are contingency amplifiers, not the plan. Spend after testing the free stack."
  },
  {
    title: "4. Story Over Perfection",
    focus: "Narrative clarity",
    bullets: [
      "Measure shots by emotional payload: if the beat lands, micro-glitches can stay.",
      "Use voice-over, captions, or sound design to carry mood when visuals wobble.",
      "Reserve hand-cleanup capacity for frames audiences will freeze on (reveals, closeups).",
      "Keep a script-first mindset—if the narrative path is clear, visuals can be impressionistic."
    ],
    cta: "The viewer forgives stylistic variance if the story compels them forward."
  }
];

const plays: Play[] = [
  {
    title: "Stabilize a Failing Render Pipeline",
    goal: "Recover a broken image generation run without restarting from scratch.",
    steps: [
      "Triage: document the failure mode, current tool versions, seed history, and last good outputs.",
      "Switch: reroute prompts to a backup runner (e.g., ComfyUI local) using saved workflow JSON.",
      "Latch: feed last good frame into ControlNet/Img2Img to preserve composition.",
      "Patch: plan minimal manual fixes (Krita/Photoshop) for continuity-critical assets only."
    ],
    track: "Stability Track",
    tools: ["ComfyUI", "Fooocus", "Krita", "ControlNet", "Git/Notion Logs"]
  },
  {
    title: "Fast Track: Ship Story Beats Under Deadline",
    goal: "Deliver a coherent cut when time is almost gone.",
    steps: [
      "Identify 3–5 anchor shots that carry the narrative arc; freeze scope elsewhere.",
      "Generate rough passes with lightweight prompts and upscale only the anchors.",
      "Leverage batch inference for filler shots; accept stylistic drift if rhythm holds.",
      "Overlay narration or motion graphics to bridge any visual discrepancies."
    ],
    track: "Fast Track",
    tools: ["Stable Diffusion XL (free checkpoints)", "Topaz Gigapixel trial", "DaVinci Resolve (free)"]
  },
  {
    title: "Quality Track: Salvage Partial Success",
    goal: "Elevate a promising but inconsistent batch without scrapping it.",
    steps: [
      "Group outputs by shared strengths (lighting, pose) and select the best representatives.",
      "Use IP-Adapter or reference-based ControlNet passes anchored to the chosen frames.",
      "Blend manual paintovers for faces/hands on key frames; leave background noise untouched.",
      "Add depth of field or color grading to mask remaining variance while adding cohesion."
    ],
    track: "Quality Track",
    tools: ["Automatic1111", "IP-Adapter", "Photoshop/GIMP", "DaVinci Resolve PowerGrades"]
  }
];

const failureSignals = [
  {
    label: "Model Drift",
    signs: ["Character facial markers shift >15%", "Costume colors desaturate unexpectedly"],
    response: "Lock in style references and reroute through ControlNet + reference-only passes."
  },
  {
    label: "Quota Exhaustion",
    signs: ["Free API returning rate limit errors", "Local GPU thermal throttling"],
    response:
      "Rotate to alternate free accounts, throttle concurrency, and offload non-essential renders to CPU fallback."
  },
  {
    label: "Prompt Collapse",
    signs: ["Outputs degrade into noise", "Model ignores key prompt tokens"],
    response:
      "Reset sampler/CFG to last known good combo, insert negative prompt counterweights, or downgrade checkpoint to a more stable baseline."
  },
  {
    label: "Manual Overload",
    signs: ["Retouch queue exceeds 90 minutes", "Artists context-switch >5 times per hour"],
    response:
      "Reclassify shots and cut low-impact fixes. Automate repetitive corrections with batch scripts or defer to voiceover."
  }
];

const communityChecklist = [
  "Gather reproducible evidence: screenshots, error logs, prompt samples, and hardware specs.",
  "Search project Discords/Reddit/GitHub issues using the exact error string.",
  "Draft a concise help post: what broke, what you already tried, the desired outcome, timelines.",
  "Offer to share anonymized assets (or proxy renders) so helpers can reproduce issues.",
  "Reciprocate—log the successful fix publicly to strengthen the knowledge loop."
];

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:gap-14 md:px-10 lg:px-14">
      <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-night-700/60 p-10 text-slate-200 shadow-glow backdrop-blur">
        <span className="text-xs font-semibold uppercase tracking-[0.55em] text-accent-300">
          Phase 7
        </span>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          Contingency Planning for AI Imagery Pipelines
        </h1>
        <p className="text-base text-slate-300 md:text-lg">
          Failures are guaranteed. This playbook keeps momentum when rendering tools, quotas, or
          timelines implode. Each tactic honors the four guiding principles: acknowledge consistency
          limits, defend the schedule, start with free options, and keep story stakes front and center.
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-slate-400">
          <span className="rounded-full border border-white/10 px-3 py-1">
            designed for hybrid pipelines
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            deployable playbook
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            story-first resilience
          </span>
        </div>
      </header>

      <Section id="pillars" eyebrow="Key Principles" title="Non-negotiable Operating Principles">
        <p>
          When pressure spikes, these four principles prevent panic pivots. Consistency, time, cost,
          and story discipline are interlinked: strain one and the others splinter. Keep them all in
          view while navigating any contingency.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </Section>

      <Section
        id="signals"
        eyebrow="Early Warning"
        title="Detect Failure Modes Before They Spiral"
      >
        <p>
          Spotting the wobble early is faster than rebuilding everything later. Keep this scoreboard
          visible in production meetings and flag issues the moment two signals trigger together.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {failureSignals.map((signal) => (
            <article
              key={signal.label}
              className="rounded-2xl border border-white/5 bg-night-500/80 p-6 text-sm text-slate-200"
            >
              <header className="mb-3 flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{signal.label}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-accent-300">Watchlist</span>
              </header>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Signals</p>
              <ul className="mb-4 mt-2 list-disc space-y-1 pl-5 text-slate-200/90">
                {signal.signs.map((sign) => (
                  <li key={sign}>{sign}</li>
                ))}
              </ul>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Response</p>
              <p className="mt-2 text-slate-200/90">{signal.response}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="plays"
        eyebrow="Adaptive Plays"
        title="Switch Tracks Without Losing the Story"
      >
        <p>
          Choose the play that matches the crisis profile. Fast Track protects schedule, Quality Track
          protects polish, and Stability Track stops bleeding. Always cross-check against story impact
          before launching a recovery sprint.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {plays.map((play) => (
            <PlayCard key={play.title} play={play} />
          ))}
        </div>
      </Section>

      <Section
        id="salvage"
        eyebrow="Salvage Protocol"
        title="When a Run Partially Succeeds"
      >
        <p>
          Avoid trashing promising work. Salvage protocols keep the best 20% and rebuild the remaining
          80% around it. Maintain momentum while acknowledging that pure AI consistency is aspirational.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>Assess survivors.</strong> Rank outputs by narrative importance over visual fidelity.
            Anchor your salvage plan on shots carrying emotional peaks.
          </li>
          <li>
            <strong>Clone the lighting.</strong> Feed keeper frames into ControlNet or reference-guided
            Img2Img passes to reproduce composition and palettes.
          </li>
          <li>
            <strong>Patch with intent.</strong> Reserve manual fixes for hero elements (faces, props).
            Let background quirks stand unless they distract from story.
          </li>
          <li>
            <strong>Blend in post.</strong> Use color grading, film grain, or subtle motion overlays to
            paper over residual mismatches.
          </li>
        </ol>
      </Section>

      <Section
        id="alternatives"
        eyebrow="Alternative Toolchains"
        title="Fallback Stack When Primary Tools Die"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/5 bg-night-500/80 p-6">
            <h3 className="text-lg font-semibold text-white">No-GPU Emergency</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200/90">
              <li>Switch to cloud-hosted free tiers: Stability.ai DreamStudio trial, Mage.Space.</li>
              <li>Queue renders overnight to ride off-peak quotas; pre-build prompt batches.</li>
              <li>Use low-res generations as animatics; plan manual paint-overs on keyframes later.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-white/5 bg-night-500/80 p-6">
            <h3 className="text-lg font-semibold text-white">Workflow Crash Mid-Project</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200/90">
              <li>Export workflows from ComfyUI/Automatic1111 beforehand; re-import into alternate UI.</li>
              <li>Keep portable prompt packs (JSON/YAML) for instant migration.</li>
              <li>Leverage open-source scripts from the community to rebuild critical nodes quickly.</li>
            </ul>
          </article>
        </div>
        <p className="text-sm text-slate-300">
          Paid upgrades (e.g., Runway Gen-2, Midjourney turbo minutes) are escalation levers. Trigger
          them only after discounting free, open, or trial pathways and highlighting the story impact to
          stakeholders.
        </p>
      </Section>

      <Section
        id="community"
        eyebrow="Community Lifeline"
        title="When to Ask for Help"
      >
        <p>
          The ecosystem moves fast—community insight can rescue you faster than solitary digging.
          Follow this checklist to respect everyone&apos;s time and deepen trust.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          {communityChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-slate-300">
          Ask for help once you&apos;ve logged the failure, documented experiments, and scoped the
          story risk. Share back the resolution so the next team can recover faster.
        </p>
      </Section>

      <footer className="pb-10 pt-6 text-center text-xs text-slate-500">
        Built for rapid deployment on Vercel · Last updated {new Date().toLocaleDateString()}
      </footer>
    </main>
  );
}
