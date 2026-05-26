import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "../data/portfolio.js";
import Reveal from "../components/ui/Reveal.jsx";
import Section from "../components/ui/Section.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="journey" className="section-y border-t border-white/10">
      <SectionHeading
        eyebrow="Learning journey"
        title="The stack keeps widening."
        kicker=""
      />

      <div ref={ref} className="relative mx-auto max-w-5xl">
        <motion.div
          className="timeline-progress"
          style={{ scaleY }}
          aria-hidden="true"
        />
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <Reveal
              key={item.title}
              className={`timeline-item ${index % 2 ? "timeline-item-right" : ""}`}
            >
              <span className="timeline-marker">{item.marker}</span>
              <div>
                <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/60">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
