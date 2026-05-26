import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { profiles } from "../data/portfolio.js";
import { fadeUp, stagger } from "../animations/variants.js";
import Section from "../components/ui/Section.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function Profiles() {
  return (
    <Section id="profiles" className="section-y profiles-section">
      <SectionHeading
        eyebrow="Coding profiles"
        title="Practice signals from the developer console."
        kicker=""
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl"
      >
        <div
          className="console-window"
          role="list"
          aria-label="Coding profile links"
        >
          <div className="console-top" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>profiles.monitor</p>
          </div>

          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              variants={fadeUp}
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              role="listitem"
              className="profile-line group"
            >
              <span className="font-mono text-xs text-signal-cyan/70">
                0{index + 1}
              </span>
              <span className="profile-icon">
                {profile.icon ? (
                  <img src={profile.icon} alt="" />
                ) : (
                  <FaGithub aria-hidden="true" className="size-5" />
                )}
              </span>
              <span className="font-display text-lg font-semibold text-white">
                {profile.name}
              </span>
              <span className="hidden text-white/50 lg:inline">
                {profile.metric}
              </span>
              <span className="ml-auto hidden font-mono text-xs uppercase text-white/40 lg:inline">
                {profile.value}
              </span>
              <FiArrowUpRight
                aria-hidden="true"
                className="size-4 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-cyan"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
