import { motion } from "framer-motion";
import { aboutCopy, aboutHighlights } from "../data/portfolio.js";
import { fadeUp, stagger } from "../animations/variants.js";
import Reveal from "../components/ui/Reveal.jsx";
import Section from "../components/ui/Section.jsx";

export default function About() {
  return (
    <Section id="about" className="section-y border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <p className="mb-5 font-display text-xs font-semibold uppercase text-signal-cyan">About</p>
          <h2 className="font-display text-5xl font-bold leading-[0.94] text-white sm:text-7xl lg:text-8xl">
            Curiosity with a system map.
          </h2>
          <div className="about-axis mt-8" aria-hidden="true">
            <span>human creativity</span>
            <span>engineering systems</span>
          </div>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <motion.div variants={fadeUp} className="editorial-mark">
            <span>build</span>
            <span>debug</span>
            <span>understand</span>
          </motion.div>

          <div className="space-y-7">
            {aboutCopy.map((paragraph) => (
              <motion.p key={paragraph} variants={fadeUp} className="text-xl leading-9 text-white/75 sm:text-2xl sm:leading-10">
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2">
            {aboutHighlights.map((item, index) => (
              <div key={item} className="highlight-fragment">
                <span className="font-mono text-xs text-signal-cyan/80">0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
