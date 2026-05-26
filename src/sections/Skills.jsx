import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiTerminal,
} from "react-icons/fi";
import { skillGroups } from "../data/portfolio.js";
import { fadeUp, stagger } from "../animations/variants.js";
import Section from "../components/ui/Section.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

const icons = [FiLayers, FiCpu, FiDatabase, FiGitBranch, FiTerminal];

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].category);
  const activeGroup =
    skillGroups.find((group) => group.category === active) ?? skillGroups[0];

  return (
    <Section id="skills" className="section-y border-t border-white/10">
      <SectionHeading
        eyebrow="Skills & stack"
        title="A working system, grouped by use."
        kicker=""
      />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="skill-command"
        >
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? FiTerminal;
            const isActive = active === group.category;
            return (
              <motion.button
                key={group.category}
                variants={fadeUp}
                type="button"
                onMouseEnter={() => setActive(group.category)}
                onFocus={() => setActive(group.category)}
                onClick={() => setActive(group.category)}
                className={`skill-command-row ${isActive ? "is-active" : ""}`}
              >
                <Icon aria-hidden="true" className="size-5" />
                <span>{group.category}</span>
                <small>{group.signal}</small>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          key={activeGroup.category}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="skill-system"
        >
          <div className="skill-system-header">
            <span className="font-mono text-xs uppercase text-signal-cyan">
              {activeGroup.signal}
            </span>
            <h3 className="font-display text-4xl font-bold text-white sm:text-6xl">
              {activeGroup.category}
            </h3>
          </div>

          <div
            className="skill-flow"
            aria-label={`${activeGroup.category} skills`}
          >
            {activeGroup.skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-token"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.045, duration: 0.35 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="terminal-readout" aria-hidden="true">
            <span>
              $ stack.inspect --group {activeGroup.category.toLowerCase()}
            </span>
            <span>status: learning through shipped interfaces</span>
            <span>
              output: reusable components, clear state, product-first UI
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
