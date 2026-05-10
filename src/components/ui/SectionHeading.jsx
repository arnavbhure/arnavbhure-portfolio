import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, kicker, align = "between" }) {
  return (
    <Reveal
      className={`mx-auto mb-12 flex max-w-7xl flex-col gap-5 ${
        align === "center" ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"
      }`}
    >
      <div className="max-w-4xl">
        {eyebrow && <p className="mb-4 font-display text-xs font-semibold uppercase text-signal-cyan">{eyebrow}</p>}
        <h2 className="font-display text-4xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">{title}</h2>
      </div>
      {kicker && <p className="max-w-md text-sm leading-7 text-white/60 sm:text-base">{kicker}</p>}
    </Reveal>
  );
}
